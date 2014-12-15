/* GENERATED with grunt bundle2module, do not modify manually */
define([
    "oskari",
    "jquery",
    "bundles/framework/bundle/publisher/instance",
    "bundles/framework/bundle/publisher/Flyout",
    "bundles/framework/bundle/publisher/Tile",
    "bundles/framework/bundle/publisher/event/MapPublishedEvent",
    "bundles/framework/bundle/publisher/event/ToolStyleChangedEvent",
    "bundles/framework/bundle/publisher/event/ColourSchemeChangedEvent",
    "bundles/framework/bundle/publisher/event/FontChangedEvent",
    "bundles/framework/bundle/publisher/event/LayerToolsEditModeEvent",
    "bundles/framework/bundle/publisher/view/NotLoggedIn",
    "bundles/framework/bundle/publisher/view/StartView",
    "bundles/framework/bundle/publisher/view/BasicPublisher",
    "bundles/framework/bundle/publisher/view/PublisherLocationForm",
    "bundles/framework/bundle/publisher/view/PublisherToolsForm",
    "bundles/framework/bundle/publisher/view/PublisherLayerForm",
    "bundles/framework/bundle/publisher/view/PublisherLayoutForm",
    "css!resources/framework/bundle/publisher/css/style.css",
    "bundles/framework/bundle/publisher/request/PublishMapEditorRequest",
    "bundles/framework/bundle/publisher/request/PublishMapEditorRequestHandler",
    "bundles/framework/bundle/publisher/locale/hy",
    "bundles/framework/bundle/publisher/locale/bg",
    "bundles/framework/bundle/publisher/locale/cs",
    "bundles/framework/bundle/publisher/locale/da",
    "bundles/framework/bundle/publisher/locale/de",
    "bundles/framework/bundle/publisher/locale/en",
    "bundles/framework/bundle/publisher/locale/es",
    "bundles/framework/bundle/publisher/locale/et",
    "bundles/framework/bundle/publisher/locale/fi",
    "bundles/framework/bundle/publisher/locale/el",
    "bundles/framework/bundle/publisher/locale/hr",
    "bundles/framework/bundle/publisher/locale/hu",
    "bundles/framework/bundle/publisher/locale/lv",
    "bundles/framework/bundle/publisher/locale/nl",
    "bundles/framework/bundle/publisher/locale/pl",
    "bundles/framework/bundle/publisher/locale/pt",
    "bundles/framework/bundle/publisher/locale/ro",
    "bundles/framework/bundle/publisher/locale/sr",
    "bundles/framework/bundle/publisher/locale/sl",
    "bundles/framework/bundle/publisher/locale/sk",
    "bundles/framework/bundle/publisher/locale/sq",
    "bundles/framework/bundle/publisher/locale/sv",
    "bundles/framework/bundle/publisher/locale/uk"
], function(Oskari,jQuery) {
    return Oskari.bundleCls("publisher").category({create: function () {
        var me = this;
        var inst = Oskari.clazz.create("Oskari.mapframework.bundle.publisher.PublisherBundleInstance");

        return inst;

    },update: function (manager, bundle, bi, info) {

    }})
});