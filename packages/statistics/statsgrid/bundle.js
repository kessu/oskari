/**
 * @class Oskari.statistics.bundle.statsgrid.StatsGridBundle
 *
 * Definitpation for bundle. See source for details.
 */
Oskari.clazz.define("Oskari.statistics.bundle.statsgrid.StatsGridBundle",
    /**
     * @method create called automatically on construction
     * @static
     */

    function () {

    }, {
        "create": function () {
            return Oskari.clazz.create("Oskari.statistics.bundle.statsgrid.StatsGridBundleInstance",
                'statsgrid');
        }
    }, {
        "protocol": ["Oskari.bundle.Bundle", "Oskari.mapframework.bundle.extension.ExtensionBundle"],
        "source": {
            "scripts": [{
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/instance.js"
            }, {
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/service/StatisticsService.js"
            }, {
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/GridModeView.js"
            }, {
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/StatsView.js"
            }, {
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/components/RegionsetSelection.js"
            }, {
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/components/IndicatorSelection.js"
            }, {
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/components/Datatable.js"
            }, {
                "type": "text/css",
                "src": "../../../bundles/statistics/statsgrid2016/resources/css/style.css"
            }, {
                "src": "../../../libraries/chosen/chosen.jquery.js",
                "type": "text/javascript"
            }, {
                "src": "../../../libraries/chosen/chosen.css",
                "type": "text/css"
            }],
            "locales": [{
                "lang": "fi",
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/resources/locale/fi.js"
            }, {
                "lang": "en",
                "type": "text/javascript",
                "src": "../../../bundles/statistics/statsgrid2016/resources/locale/en.js"
            }]
        },
        "bundle": {
            "manifest": {
                "Bundle-Identifier": "statsgrid",
                "Bundle-Name": "statsgrid",
                "Bundle-Author": [{
                    "Name": "jjk",
                    "Organisatpation": "nls.fi",
                    "Temporal": {
                        "Start": "2013",
                        "End": "2013"
                    },
                    "Copyleft": {
                        "License": {
                            "License-Name": "EUPL",
                            "License-Online-Resource": "http://www.paikkatietoikkuna.fi/license"
                        }
                    }
                }],
                "Bundle-Verspation": "1.0.0",
                "Import-Namespace": ["Oskari"],
                "Import-Bundle": {}
            }
        },

        /**
         * @static
         * @property dependencies
         */
        "dependencies": ["jquery"]

    });

Oskari.bundle_manager.installBundleClass("statsgrid", "Oskari.statistics.bundle.statsgrid.StatsGridBundle");
