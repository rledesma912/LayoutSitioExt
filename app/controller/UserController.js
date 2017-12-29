/**
* @class UserController.js
* @description PruebaRest UserController
* @namespace PruebaRest.controller.UserController
* @author Vaibhav Ramdasi
*/

Ext.define('PruebaRest.controller.UserController', {

    extend: 'Ext.app.Controller',
    stores: ['Users'],
    models: ['User'],
    views: ['user.List'],

    init: function () {
        this.control(
                {

                    'button[text=Agregar]':
                    {

                        //could have handled in # handler # of toolbar button
                        // but to keep view isolated from thick event handlers moved here

                        click: this.addRow
                    }

                });
    },

    addRow: function (e) {
        var store = this.getUsersStore();
        var isBlank = false;

        //Restrict empty album count to one. Should this validation be moved to Model.?

        store.each(function (record) {
            if (null == record.data['Nombre'] && null == record.data['Descripcion']) {

                Ext.Msg.show(
                                {
                                    title: 'Advertencia',
                                    msg: 'Antes complete los campos vacíos.',
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.WARNING
                                });
                 if (null == record.index)
                 record.index = 0;
                isBlank = true
                //there could be a clean approach to achieve this..?
                var grid = Ext.ComponentQuery.query('userlist')[0];
                grid.plugins[0].startEdit(record.index, 1);
                return false; //break the loop
            }

        });
        if (!isBlank) {

            //[....could have restricted to create empty record in database with this.getUsersStore().autoSync=false]
            //Create empty album in database. Populate it's id when created.
            this.getUsersStore().insert(0, this.getUserModel().create());

        }
    }
});