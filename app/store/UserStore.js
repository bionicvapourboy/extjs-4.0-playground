Ext.define('MyApp.store.UserStore', {
  extend: 'Ext.data.Store',
  autoLoad: false,
  autoSync: false,
  fields: ['login', 'avatar_url'],
  data: [],
  proxy: {
    type: 'rest',
    url: 'https://api.github.com/search/users',
    reader: {
      type: 'json',
      root: 'items'
    },
  },
});