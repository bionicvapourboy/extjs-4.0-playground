Ext.define('User', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'login', type: 'string' },
    { name: 'avatar', type: 'string' },
    { name: 'url', type: 'string '},
  ],
});