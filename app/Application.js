(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Just a customised generic app entry point
     */
    Ext.define('MapHiveHgis1.Application', {
        extend: 'mh.Application',

        requires: [
            'MapHiveHgis1.AppLauncher'
        ],

        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        //Note: in this case MapHiveHgis1.AppLauncher just inherits from mh.AppLauncher and is used instead as
        //this is needed  so the proper azzurra scss is brought in!
        appLauncher: 'MapHiveHgis1.AppLauncher',

        onLaunchApp: function(){

            //first make sure the base does what's required!

            //note: need to drilldown 2 levels, as in fact, this will be an instance of the app defined and launched in the app.js!
            //this is needed, as the core funtionality is borrowed from the generic mh.Application
            this.superclass.superclass.onLaunchApp.call(this);

            //start the external route watcher - this will watch changes advised by a parent, and pass own changes to a parent
            this.fireGlobal('root:watchexternalroutes', {host: true});
        }

    });
}());