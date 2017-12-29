/**
* @class Users.js
* @description PruebaRest User Model
* @namespace PruebaRest.model.User
* @author Vaibhav Ramdasi
*/


Ext.define('PruebaRest.model.User', {

    extend: 'Ext.data.Model',

    fields: [

                {
                    name: 'IdPrueba',
                    type: 'int',
                    optional: true
                },
                {
                    name: 'Nombre',
                    type: 'string',
                    optional: true
                },
                {
                    name: 'Descripcion',
                    type: 'string'
                },
                {
                    name: 'Observaciones',
                    type: 'string'
                }
            ],

    idProperty: 'IdPrueba',

    proxy: {

        type: 'rest',
        url: 'http://desarrollo/PruebaEntidadWCF01/ServicioPrueba.svc/',
        timeout: 120000,
        noCache: false,
       
        api: {
        read: 'http://desarrollo/PruebaEntidadWCF01/ServicioPrueba.svc/ObtenerTodos/u/fpallares/FGH45-33FG2-VB53A-GG8J0-NMN32-5D23A',
        create: 'http://desarrollo/PruebaEntidadWCF01/ServicioPrueba.svc/Agregar/u/fpallares/FGH45-33FG2-VB53A-GG8J0-NMN32-5D23A',
        update: 'http://desarrollo/PruebaEntidadWCF01/ServicioPrueba.svc/Actualizar/u/fpallares/FGH45-33FG2-VB53A-GG8J0-NMN32-5D23A',
        destroy: 'http://desarrollo/PruebaEntidadWCF01/ServicioPrueba.svc/Eliminar/u/fpallares/FGH45-33FG2-VB53A-GG8J0-NMN32-5D23A'
        },
       
        reader:
        {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },

        writer:
        {
            type: 'json',
            writeAllFields: true
        },

        afterRequest: function (request, success) {

            if (request.action == 'read') {
                this.readCallback(request);
            }

            else if (request.action == 'create') {
                this.createCallback(request);
            }

            else if (request.action == 'update') {
                this.updateCallback(request);
            }

            else if (request.action == 'destroy') {
                this.deleteCallback(request);
            }
        },

        //After Users fetched

        readCallback: function (request) {
            if (!request.operation.success) {
                Ext.Msg.show(
                                {
                                    title: 'Warning',
                                    msg: 'Could not load Users. Please try again.',
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.WARNING
                                });
            }
        },


        //After A record/User created

        createCallback: function (request) {

            if (!request.operation.success) {
                Ext.Msg.show(
                                {
                                    title: 'Warning',
                                    msg: 'Could not add User. Please try again.',
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.WARNING
                                });
                Ext.data.StoreManager.lookup('Users').removeAt(0);
            }
            var grid = Ext.ComponentQuery.query('Userlist')[0];
            grid.plugins[0].startEdit(0, 1);
        },

        //After User updated

        updateCallback: function (request) {
            if (!request.operation.success) {
                Ext.Msg.show(
                                {
                                    title: 'Warning',
                                    msg: 'Could not update User. Please try again.',
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.WARNING
                                });
            }
        },

        //After a record deleted

        deleteCallback: function (request) {
            if (!request.operation.success) {
                Ext.Msg.show(
                                {
                                    title: 'Warning',
                                    msg: 'Could not delete User. Please try again.',
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.WARNING
                                });
                //If request fails re-insert record.
                Ext.data.StoreManager.lookup('Users').insert(0, request.operation.records[0]);
            }
        }
    }
});