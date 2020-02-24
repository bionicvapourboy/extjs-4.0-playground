Ext.define('MyApp.store.BookmarkStore', {
  extend: 'Ext.data.Store',
  id: 'BookmarkItems',
  fields: ['login', 'avatar_url'],

  data: [],
});
