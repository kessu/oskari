/*
 * grunt-bundle2module
 */

module.exports = function(grunt) {

    grunt.registerTask('bundle2module', 'Convert bundle to module', function(origin, target) {
        var done = this.async();
        var starttime = (new Date()).getTime();

        grunt.log.writeln('WARNING! Use with caution!');
        grunt.log.writeln('bundle2module overwrites existing files without notification or confirmations.');
        grunt.log.writeln('Converting ' + origin + " to module.js ");

        var fs = require('fs'),
            wrench = require('wrench'),
            path = require("path"),
            EOL = require("os").EOL;

        if (origin.lastIndexOf('/') !== (origin.length - 1)) {
            console.log('Adding / to path');
            origin += "/";
        }

        if (origin.indexOf("bundle.js") === -1) {
            console.log('Adding bundle.js to path');
            origin += "bundle.js";
        }

        if (!target) {
            // change packages folder to src
            // change bundle.js to module.js
            // remove bundle folder as unnecessary
            target = origin.replace('/packages/', '/src/').replace('bundle.js', 'module.js').replace('/bundle/', '/');
        }

        // Read target folder content to later on replace existing files with the ones they are replacing automatically
        var targetFolderPath = target.replace("module.js", "");
        var targetFiles = [];

        if (fs.existsSync(targetFolderPath)) {
            targetFiles = wrench.readdirSyncRecursive(targetFolderPath); // get the oskari2 specific files
        }

        function filterJSfiles(file) {
            return file.indexOf('.js') > -1;
        }

        // remove folders by only including js files and modify path so that RequireJS can handle it
        targetFiles = targetFiles
            .filter(filterJSfiles)
            .map(function (file) {
                return file.replace(/\\/g, "/");
            });

        function modifyPath4require(src, files) {

            var bundleBasePath = basePath;
            if(src.indexOf('/') === 0) {
                src = '.' + src;
                bundleBasePath = '.';
            }
            var normalizedPath = path.resolve(bundleBasePath, src);
            var relativePath = path.relative(basePath, normalizedPath);

            // modify path so that RequireJS can find it
            relativePath = relativePath.replace(/\\/g, '/'); // change \ to / to have all paths in the same format

            if (files) {
                // only js files are matched with oskari2 files
                var bundle = bundleBasePath.substr(bundleBasePath.lastIndexOf('/')+1);
                var targetFile = relativePath.substr(relativePath.indexOf(bundle)+bundle.length+1);
                var match = files.filter(function (file) {
                    return file === targetFile;
                });

                // replace oskari1 dependency with oskari2 implementation
                if (match.length === 1) {
                    relativePath = './' + targetFile;
                }
            }

            if (relativePath.indexOf('.') !== 0) {
                relativePath = './' + relativePath;
            } else {
                // detect relative files regarding resources, bundles, libraries, and sources
                // change path and mark with _ to ensure file extensions are removed so that Require is able to find the file
                relativePath = relativePath.replace(/[\.\/]*resources/, 'resources');
                relativePath = relativePath.replace(/[\.\/]*bundles/, 'bundles');
                relativePath = relativePath.replace(/[\.\/]*libraries/, 'libraries');
                relativePath = relativePath.replace(/[\.\/]*sources/, 'sources');
                relativePath = relativePath.replace(/[\.\/]*src/, 'src');
            }

            // some libs are specially specified in require and in order to avoid mixups that confuses require we rename them
            relativePath = relativePath.replace(/libraries\/jquery\/plugins\/jquery.cookie/, 'jquery-cookie');
            relativePath = relativePath.replace(/libraries\/jquery\/jquery.event.drag-2.0.min/, 'dragevent');

            // dots mess around with RequireJS file extension detection.
            // In order to make it work, exclude .js from filenames without dots such as jquery.base64.min.js
            relativePath = relativePath.replace('.js', '');

            return relativePath;
        }

        var basePath = path.dirname(target);
        var template = '/* GENERATED with grunt bundle2module, do not modify manually */' + EOL +'define({DEPENDENCIES}, function(Oskari,jQuery) {' + EOL + '    return Oskari.bundleCls("{BUNDLE_ID}").category({SIGNATURE})' + EOL + '});';
        var moduleDependencies = ["oskari", "jquery"];
        var bundleId = null;
        var categorySignature = "{";

        Oskari = {
            clazz : {
                define: function (type, constructor, prototype, dependencies) {
                    var signature = "";
                    for(var func in prototype) {
                        if (signature !== "") {
                            // add previous signature with comma
                            categorySignature += signature + ',';
                        }
                        signature = func + ": " + prototype[func].toString();
                    }
                    // add last signature without comma and close brace
                    categorySignature += signature + '}';

                    if (dependencies && dependencies.source && dependencies.source.scripts) {
                        var scripts = dependencies.source.scripts,
                            type = null,
                            src = null;
                        console.log('scripts', scripts);
                        for (var i = 0, ilen = scripts.length; i < ilen; i++) {
                            type = scripts[i].type;
                            src = scripts[i].src;
                            console.log('scripts', type, src);

                            var relativePath = modifyPath4require(src, targetFiles);
                            if (type == "text/javascript") {
                                moduleDependencies.push(relativePath);
                            } else if (type == "text/css") {
                                moduleDependencies.push("css!" + relativePath);
                            } else {
                                grunt.warn("Unknown type:"+ type + ". Use --force to include as text/javascript. It's recommended to state type in the bundle.js file and the converter can handle the dependency accordingly.", 6);
                                moduleDependencies.push(relativePath);
                            }
                        }
                    }

                    if (dependencies && dependencies.source && dependencies.source.locales) {
                        var locales = dependencies.source.locales,
                            type = null,
                            src = null,
                            lang = null;
                        console.log('locales', locales);
                        for (var i = 0, ilen = locales.length; i < ilen; i++) {
                            lang = locales[i].lang;
                            type = locales[i].type;
                            src = locales[i].src;

                            var bundleBasePath = basePath;
                            if(src.indexOf('/') === 0) {
                                src = '.' + src;
                                bundleBasePath = '.';
                            }

                            var relativePath = modifyPath4require(src);
                            moduleDependencies.push(relativePath);
                        }
                    }
                }
            },
            bundle_manager : {
                installBundleClass: function (bid) {
                    bundleId = bid;
                }
            }
        }

        var originPath = "../" + origin; // relative to this file, not grunt as when reading files
        var loaded = require(originPath);

        var result = template.replace('{DEPENDENCIES}', JSON.stringify(moduleDependencies).replace('["', '[' + EOL + '    "').replace('"]', '"' + EOL + ']').replace(/,"/g,',' + EOL + '    "')).replace('{BUNDLE_ID}', bundleId).replace('{SIGNATURE}', categorySignature)
        console.log('Template:\n', result);
        grunt.file.write(target, result);

        var endtime = (new Date()).getTime();
        grunt.log.writeln('bundle2module completed in ' + ((endtime - starttime) / 1000) + ' seconds');
        done();
    });

};