Ext.define('MyApp.store.BookmarkStore', {
  extend: 'Ext.data.Store',
  id: 'BookmarkItems',
  fields: ['login', 'avatar_url', 'html_url'],
  autoLoad: true,
  proxy: {
    type: 'localstorage',
    id  : 'localStorageBookmarkStore'
  }
});
