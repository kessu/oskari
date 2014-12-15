/* GENERATED with grunt bundle2module, do not modify manually */
define([
    "oskari",
    "jquery",
    "bundles/framework/bundle/personaldata/instance",
    "bundles/framework/bundle/personaldata/Flyout",
    "bundles/framework/bundle/personaldata/Tile",
    "bundles/framework/bundle/personaldata/events/PersonaldataLoadedEvent",
    "bundles/framework/bundle/personaldata/MyViewsTab",
    "bundles/framework/bundle/personaldata/service/ViewService",
    "bundles/framework/bundle/personaldata/PublishedMapsTab",
    "bundles/framework/bundle/personaldata/AccountTab",
    "bundles/framework/bundle/personaldata/request/AddTabRequest",
    "bundles/framework/bundle/personaldata/request/AddTabRequestHandler",
    "css!resources/framework/bundle/personaldata/css/personaldata.css",
    "bundles/framework/bundle/personaldata/locale/hy",
    "bundles/framework/bundle/personaldata/locale/bg",
    "bundles/framework/bundle/personaldata/locale/cs",
    "bundles/framework/bundle/personaldata/locale/da",
    "bundles/framework/bundle/personaldata/locale/de",
    "bundles/framework/bundle/personaldata/locale/en",
    "bundles/framework/bundle/personaldata/locale/es",
    "bundles/framework/bundle/personaldata/locale/et",
    "bundles/framework/bundle/personaldata/locale/fi",
    "bundles/framework/bundle/personaldata/locale/ka",
    "bundles/framework/bundle/personaldata/locale/el",
    "bundles/framework/bundle/personaldata/locale/hr",
    "bundles/framework/bundle/personaldata/locale/hu",
    "bundles/framework/bundle/personaldata/locale/lv",
    "bundles/framework/bundle/personaldata/locale/nl",
    "bundles/framework/bundle/personaldata/locale/pl",
    "bundles/framework/bundle/personaldata/locale/pt",
    "bundles/framework/bundle/personaldata/locale/ro",
    "bundles/framework/bundle/personaldata/locale/sr",
    "bundles/framework/bundle/personaldata/locale/sl",
    "bundles/framework/bundle/personaldata/locale/sk",
    "bundles/framework/bundle/personaldata/locale/sq",
    "bundles/framework/bundle/personaldata/locale/sv",
    "bundles/framework/bundle/personaldata/locale/uk"
], function(Oskari,jQuery) {
    return Oskari.bundleCls("personaldata").category({create: function () {
        var me = this;
        var inst = Oskari.clazz.create("Oskari.mapframework.bundle.personaldata.PersonalDataBundleInstance");
        return inst;

    },update: function (manager, bundle, bi, info) {

    }})
});