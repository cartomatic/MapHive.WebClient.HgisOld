//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * App launcher - need to use it here, so the proper azzurra scss is brought in!
     */
    Ext.define('MapHiveHgis1.AppLauncher', {
        requires: [
            'Ext.tip.QuickTipManager',
            'MapHiveHgis1.view.main.Viewport',
            'mh.module.appBar.AppBar'
        ],

        constructor: function(config){
            //init Ext quick tips
            //Ext.QuickTips.interceptTitles = true;
            Ext.QuickTips.init();

            //Do whatever the customisation are required - running in an iframe vs standalone...

            //TODO - prepare the host insfrastructure - so can instantiate and communicate with the hosted apps!

            //init the GUI
            Ext.create('MapHiveHgis1.view.main.Viewport', {
                dockedItems: [
                    //use the default app toolbar
                    {
                        xtype: 'mh-app-bar'
                    }
                ]
            });
        }
    });

}());