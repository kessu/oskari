/**
 * @class Oskari.statistics.bundle.statsgrid.View
 *
 * Sample extension bundle definition which inherits most functionalty
 * from DefaultView class.
 *
 */
Oskari.clazz.define('Oskari.statistics.bundle.statsgrid.StatsView',
/**
 * @static constructor function
 */
function() {
}, {
    /**
     * Show content
     * @method showContent
     * @param {Boolean} isShown true if content should be rendered, false if not
     */
    showContent: function(isShown) {
        if(isShown) {
            this.getLeftColumn().addClass('statsgrid_100');
            this.getLeftColumn().append(this.getEl());
            this.addContent(this.getEl());
        }
        else {
            this.getLeftColumn().removeClass('statsgrid_100');
            this.getEl().empty();
            this.getEl().remove();
        }
    },
    addContent : function (el) {
        var sb = this.instance.getSandbox();
        var service = sb.getService('Oskari.statistics.bundle.statsgrid.StatisticsService');
        var comps = this.getComponents();
        comps.indicatorSelector.render(el);
        comps.regionSelector.render(el);
        comps.grid.render(el);
    },
    getComponents : function() {
        var sb = this.instance.getSandbox();
        return {
            indicatorSelector : Oskari.clazz.create('Oskari.statistics.bundle.statsgrid.IndicatorSelection', sb),
            regionSelector : Oskari.clazz.create('Oskari.statistics.bundle.statsgrid.RegionsetSelection', sb),
            grid : Oskari.clazz.create('Oskari.statistics.bundle.statsgrid.Datatable', sb)
        };
    }
}, {
    "protocol": ["Oskari.userinterface.View"],
    "extend": ["Oskari.statistics.bundle.statsgrid.GridModeView"]
});