/**
* @class List.js
* @description PruebaRest Grid Panel
* @namespace PruebaRest.view.user.List
* @author Vaibhav Ramdasi
*/
Ext.define('PruebaRest.view.user.List', {
    
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    store: 'Users',
    
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Agregar',
                    iconCls: 'icon-add'

                }]
        }],
    
    forceFit: true,
    columnLines: true,
    autoResizeColumns: true,
    selType: 'rowmodel',
    
    plugins: [
                Ext.create('Ext.grid.plugin.RowEditing', {
                    clicksToEdit: 2,
                    errorSummary: false

                })],
    
    initComponent: function () {
    
        this.id = "list";
    
        this.columns = [
                {
                    header: 'ID',
                    dataIndex: 'IdPrueba',
                    sortable: false,
                    menuDisabled: true

                }, {
                    header: 'Nombre',
                    dataIndex: 'Nombre',
                    editable: true,
                    sortable: false,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    },
                    menuDisabled: true

                }, {
                    header: 'Descripción',
                    dataIndex: 'Descripcion',
                    editable: true,
                    sortable: false,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    },

                    menuDisabled: true

                }, {
                    header: 'Observaciones',
                    dataIndex: 'Observaciones',
                    editable: true,
                    sortable: false,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    },

                    menuDisabled: true

                }, {
                    xtype: 'actioncolumn',
                    width: 16,
                    align: 'center',
                    items: [
                        {
                            icon: 'http://cdn.sencha.io/ext-4.0.2a/examples/restful/images/delete.png',
                            tooltip: 'Eliminar',
                            handler: function (grid, rowIndex, colIndex) {
                                grid.getStore().removeAt(rowIndex);

                            } 
                        }]
                }

                ];

        this.callParent(arguments);
    }


});