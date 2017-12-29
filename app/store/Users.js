/**
* @class User.js
* @description PruebaRest Users Store
* @namespace PruebaRest.store.Users
* @author Vaibhav Ramdasi
*/


Ext.define('PruebaRest.store.Users', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    model: 'PruebaRest.model.User'
});