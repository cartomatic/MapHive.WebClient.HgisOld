(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Just a customised generic app entry point
     */
    Ext.define('MapHiveHgisOld.Application', {
        extend: 'mh.Application',

        requires: [
            'MapHiveHgisOld.AppLauncher'
        ],

        mixins: [
            'mh.mixin.CallMeParent'
        ],

        controllers: [
            'mh.controller.Root',
            'mh.controller.Auth',
            'mh.controller.Organization',
            'mh.controller.Splash'
        ],

        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        //Note: in this case MapHiveHgisOld.AppLauncher just inherits from mh.AppLauncher and is used instead
        appLauncher: 'MapHiveHgisOld.AppLauncher',

        /**
         * internal app launch procedure
         * @param cfg
         * @param cfg.userConfig
         * @param cfg.orgCtx
         */
        internalAppLaunch: function(cfg){

            //first make sure the base does what's required!
            this.callMeParent('internalAppLaunch', arguments);

            //start the external route watcher - this will watch changes advised by a parent, and pass own changes to a parent
            this.fireGlobal('root::watchexternalroutes', {host: true});


            //finally force reroute to the specified route so the router kicks in and handles nav properly
            //make sure though to postpone this a bit, so all the other stuff that can still be potentially configuring has some time to finish
            Ext.defer(
                function(){
                    this.redirectTo(window.location.hash.replace('#', ''), true);
                },
                250,
                this
            );
        }

    });
}());