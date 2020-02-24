Ext.define('MyApp.view.SearchPanel', {
    alias: 'widget.searchpanel',
    extend: 'Ext.form.Panel',
    title: 'Search form',
    height: 70,
    width: 280,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'GitHub username',
            name: 'userName'
        },
    ],
    initComponent: function() {
        this.callParent(arguments); // Needed ?
        this.test = function(e) { console.log("MAIN", e)}
    }
});