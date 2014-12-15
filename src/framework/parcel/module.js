/* GENERATED with grunt bundle2module, do not modify manually */
define([
    "oskari",
    "jquery",
    "bundles/framework/bundle/parcel/event/FinishedDrawingEvent",
    "bundles/framework/bundle/parcel/event/SaveDrawingEvent",
    "bundles/framework/bundle/parcel/event/ParcelSelectedEvent",
    "bundles/framework/bundle/parcel/event/ParcelInfoLayerRegisterEvent",
    "bundles/framework/bundle/parcel/event/ParcelInfoLayerUnregisterEvent",
    "bundles/framework/bundle/parcel/plugin/DrawPlugin",
    "bundles/framework/bundle/parcel/request/SaveDrawingRequest",
    "bundles/framework/bundle/parcel/request/StopDrawingRequest",
    "bundles/framework/bundle/parcel/request/CancelDrawingRequest",
    "bundles/framework/bundle/parcel/request/StartDrawingRequest",
    "bundles/framework/bundle/parcel/request/SaveDrawingRequestHandler",
    "bundles/framework/bundle/parcel/request/StopDrawingRequestHandler",
    "bundles/framework/bundle/parcel/request/CancelDrawingRequestHandler",
    "bundles/framework/bundle/parcel/request/StartDrawingRequestHandler",
    "bundles/framework/bundle/parcel/model/PreParcel",
    "bundles/framework/bundle/parcel/model/PreParcelData",
    "bundles/framework/bundle/parcel/service/ParcelService",
    "bundles/framework/bundle/parcel/service/ParcelWfst",
    "bundles/framework/bundle/parcel/service/PreParcelWFSTStore",
    "bundles/framework/bundle/parcel/service/ParcelPlot",
    "bundles/framework/bundle/parcel/split/ParcelSplit",
    "bundles/framework/bundle/parcel/view/MainView",
    "bundles/framework/bundle/parcel/view/StartPrintView",
    "bundles/framework/bundle/parcel/view/ParcelPrintForm1",
    "bundles/framework/bundle/parcel/view/ParcelPrintForm2",
    "bundles/framework/bundle/parcel/handler/ButtonHandler",
    "bundles/framework/bundle/parcel/handler/ParcelSelectorHandler",
    "bundles/framework/bundle/parcel/handler/PreParcelSelectorHandler",
    "bundles/framework/bundle/parcel/instance",
    "bundles/framework/bundle/parcel/Flyout",
    "jquery-cookie",
    "libraries/clipper/clipper",
    "libraries/jsts/jsts",
    "css!resources/framework/bundle/parcel/css/style.css",
    "bundles/framework/bundle/parcel/locale/fi"
], function(Oskari,jQuery) {
    return Oskari.bundleCls("parcel").category({create: function () {
            var me = this;
            var inst = Oskari.clazz.create("Oskari.mapframework.bundle.parcel.DrawingToolInstance");
            return inst;

        },update: function (manager, bundle, bi, info) {
            manager.alert("RECEIVED update notification " + info);
        }})
});