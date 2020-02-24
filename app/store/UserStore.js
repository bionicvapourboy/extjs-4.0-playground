Ext.define('MyApp.store.UserStore', {
  extend: 'Ext.data.Store',
  autoLoad: true,
  autoSync: true,
  // model: 'User',
  fields: ['login', 'avatar_url'],
  proxy: {
    type: 'rest',
    extraParams: {
      q: 'bionicvapourboy'
    },
    url: 'https://api.github.com/search/users',
    reader: {
      type: 'json',
      root: 'items'
    },
  },
});