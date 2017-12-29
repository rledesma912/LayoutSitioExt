/**
* @class Viewport.js
* @description PruebaRest Viewport
* @namespace PruebaRest.view.Viewport
* @author Vaibhav Ramdasi
*/

Ext.define('PruebaRest.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items:
        [
            {
                region: 'center',
                flex: 1,
                title: 'Prueba de sitio REST',
                xtype: 'userlist',
                flex: 1,
                minHeight: 100
            }
        ]
});