/*
	"./plugin/layers/LayersPlugin",
	"../../base/request/MapLayerVisibilityRequestHandler",
	"../../base/request/MapMoveRequestHandler",
	"./plugin/controls/ControlsPlugin",
	"src/oskari/base/request/common/show-map-measurement-request",
	"./plugin/wmslayer/WmsLayerPlugin",
	"./plugin/wfslayer/WfsLayerPlugin",
	"../../base/plugin/panbuttons/PanButtons",
	"./plugin/panbuttons/PanButtons",
    */

define([
    "oskari",
    "jquery",
    "../../base/AbstractMapModule",
    "../../base/plugin/AbstractMapModulePlugin",
    "../../base/plugin/BasicMapModulePlugin",
    "./ui/module/map-module",
    "bundles/framework/bundle/mapmodule-plugin/plugin/Plugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/controls/ControlsPlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/controls/PorttiKeyboard",
    "bundles/framework/bundle/mapmodule-plugin/plugin/controls/OskariNavigation",
    "bundles/framework/bundle/mapmodule-plugin/plugin/controls/OskariPinchZoom",
    "bundles/framework/bundle/mapmodule-plugin/request/DisableMapKeyboardMovementRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/DisableMapMouseMovementRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/EnableMapKeyboardMovementRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/EnableMapMouseMovementRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/MapMovementControlsRequestHandler",
    "sources/framework/request/common/show-map-measurement-request",
    "bundles/framework/bundle/mapmodule-plugin/plugin/getinfo/GetFeatureInfoHandler",
    "bundles/framework/bundle/mapmodule-plugin/request/GetFeatureInfoRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/GetFeatureInfoActivationRequest",
    "bundles/framework/bundle/mapmodule-plugin/plugin/getinfo/GetInfoPlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/getinfo/GetFeatureInfoFormatter",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/getinfo/css/getinfo.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/markers/MarkersPlugin",
    "bundles/framework/bundle/mapmodule-plugin/request/AddMarkerRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/AddMarkerRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/request/RemoveMarkersRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/RemoveMarkersRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/event/AfterAddMarkerEvent",
    "bundles/framework/bundle/mapmodule-plugin/event/AfterRemoveMarkersEvent",
    "bundles/framework/bundle/mapmodule-plugin/plugin/search/SearchPlugin",
    "bundles/framework/bundle/search/service/searchservice",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/search/css/search.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/logo/LogoPlugin",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/logo/css/logoplugin.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/datasource/DataSourcePlugin",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/datasource/css/datasource.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/indexmap/IndexMapPlugin",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/indexmap/css/indexmap.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/scalebar/ScaleBarPlugin",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/scalebar/css/scalebar.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/publishertoolbar/PublisherToolbarPlugin",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/publishertoolbar/css/publishertoolbar.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/fullscreen/FullScreen",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/fullscreen/css/fullscreen.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/layers/LayerSelectionPlugin",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/layers/css/layersselection.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/layers/BackgroundLayerSelectionPlugin",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/layers/css/backgroundlayerselection.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/layers/LayersPlugin",
    "bundles/framework/bundle/mapmodule-plugin/request/MapLayerVisibilityRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/MapLayerVisibilityRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/request/MapMoveByLayerContentRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/MapMoveByLayerContentRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/event/MapLayerVisibilityChangedEvent",
    "bundles/framework/bundle/mapmodule-plugin/plugin/wmslayer/WmsLayerPlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/vectorlayer/VectorLayerPlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/location/GeoLocationPlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/DrawPlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/event/AddedFeatureEvent",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/event/FinishedDrawingEvent",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/event/SelectedDrawingEvent",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/event/ActiveDrawingEvent",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/request/GetGeometryRequest",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/request/GetGeometryRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/request/StartDrawingRequest",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/request/StartDrawingRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/request/StopDrawingRequest",
    "bundles/framework/bundle/mapmodule-plugin/plugin/drawplugin/request/StopDrawingRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/plugin/publishertoolbar/PublisherToolbarPlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/publishertoolbar/request/ToolContainerRequest",
    "bundles/framework/bundle/mapmodule-plugin/plugin/publishertoolbar/request/ToolContainerRequestHandler",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/publishertoolbar/css/publishertoolbar.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/realtime/RealtimePlugin",
    "bundles/framework/bundle/mapmodule-plugin/plugin/realtime/event/RefreshLayerEvent",
    "bundles/framework/bundle/mapmodule-plugin/request/ToolSelectionRequest",
    "bundles/framework/bundle/mapmodule-plugin/plugin/controls/ToolSelectionHandler",
    "bundles/framework/bundle/mapmodule-plugin/request/MapLayerUpdateRequest",
    "bundles/framework/bundle/mapmodule-plugin/request/MapLayerUpdateRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/request/MapMoveRequestHandler",
    "bundles/framework/bundle/mapmodule-plugin/event/MapClickedEvent",
    "bundles/framework/bundle/mapmodule-plugin/event/EscPressedEvent",
    "bundles/framework/bundle/mapmodule-plugin/event/GetInfoResultEvent",
    "bundles/framework/bundle/mapmodule-plugin/event/MapSizeChangedEvent",
    "bundles/framework/bundle/mapmodule-plugin/plugin/zoombar/Portti2Zoombar",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/zoombar/css/porttizoombar.css",
    "bundles/framework/bundle/mapmodule-plugin/plugin/panbuttons/PanButtons",
    "css!resources/framework/bundle/mapmodule-plugin/plugin/panbuttons/css/panbuttons.css",
    "css!resources/framework/bundle/mapmodule-plugin/css/mapmodule.css",
    "bundles/framework/bundle/mapmodule-plugin/locale/hy",
    "bundles/framework/bundle/mapmodule-plugin/locale/bg",
    "bundles/framework/bundle/mapmodule-plugin/locale/cs",
    "bundles/framework/bundle/mapmodule-plugin/locale/da",
    "bundles/framework/bundle/mapmodule-plugin/locale/de",
    "bundles/framework/bundle/mapmodule-plugin/locale/en",
    "bundles/framework/bundle/mapmodule-plugin/locale/es",
    "bundles/framework/bundle/mapmodule-plugin/locale/et",
    "bundles/framework/bundle/mapmodule-plugin/locale/fi",
    "bundles/framework/bundle/mapmodule-plugin/locale/ka",
    "bundles/framework/bundle/mapmodule-plugin/locale/el",
    "bundles/framework/bundle/mapmodule-plugin/locale/hr",
    "bundles/framework/bundle/mapmodule-plugin/locale/hu",
    "bundles/framework/bundle/mapmodule-plugin/locale/lv",
    "bundles/framework/bundle/mapmodule-plugin/locale/nl",
    "bundles/framework/bundle/mapmodule-plugin/locale/pl",
    "bundles/framework/bundle/mapmodule-plugin/locale/pt",
    "bundles/framework/bundle/mapmodule-plugin/locale/ro",
    "bundles/framework/bundle/mapmodule-plugin/locale/sr",
    "bundles/framework/bundle/mapmodule-plugin/locale/sl",
    "bundles/framework/bundle/mapmodule-plugin/locale/sk",
    "bundles/framework/bundle/mapmodule-plugin/locale/sq",
    "bundles/framework/bundle/mapmodule-plugin/locale/sv",
    "bundles/framework/bundle/mapmodule-plugin/locale/uk"
], function(Oskari,jQuery) {
    return Oskari.bundleCls("mapmodule-plugin").category({create: function () {
            return this;
        },update: function (manager, bundle, bi, info) {
            manager.alert("RECEIVED update notification " + info);
        }})
});