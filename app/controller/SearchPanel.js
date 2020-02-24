Ext.define('MyApp.controller.SearchPanel', {
  extend: 'Ext.app.Controller',
  init: function () {
    this.req = Ext.Function.createBuffered(
        function (e, value) {
          var store = Ext.ComponentQuery.query('#userList')[0].getStore();
          store.load({
            params: {q: value}
          });
        },
        1000,
        this
    );
    this.control({
      'searchpanel > textfield': {
        change: function (e, value) {
          this.req(e, value);
        },
      }
    });
  }
});