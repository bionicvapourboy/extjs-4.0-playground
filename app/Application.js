Ext.define('MyApp.Application', {
    name: 'MyApp',
    extend: 'Ext.app.Application',
    stores: [
        'BookmarkStore',
        'UserStore',
    ],
    controllers: [
        'SearchPanel',
    ],
    launch: function() {
        // ...on launch
    }
});
