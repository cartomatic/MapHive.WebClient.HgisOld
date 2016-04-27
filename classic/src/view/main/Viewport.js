//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Created by domin on 4/27/2016.
     */
    Ext.define('MapHiveHgis1.view.main.Viewport', {
        extend: 'Ext.panel.Panel',

        requires: [
        'Ext.plugin.Viewport'
    ],

    plugins: 'viewport',

        border: false


    });

}());