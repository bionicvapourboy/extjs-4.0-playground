Ext.define('MyApp.view.Main', {
  extend: 'Ext.container.Container',
  requires: [
    'Ext.tab.Panel',
    'Ext.layout.container.Border',
    'MyApp.view.SearchPanel',
    'MyApp.view.user.List',
    'MyApp.view.bookmark.List',
  ],

  xtype: 'app-main',

  layout: {
    type: 'border'
  },

  items: [
    {
      region: 'west',
      xtype: 'bookmarklist',
      title: 'Bookmarked',
      width: 150,
    },
    {
      region: 'north',
      xtype: 'searchpanel',
    },
    {
      region: 'center',
      xtype: 'userlist',
    }],
});