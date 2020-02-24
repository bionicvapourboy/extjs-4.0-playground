Ext.define('MyApp.view.bookmark.List' ,{
  extend: 'Ext.grid.Panel',
  alias: 'widget.bookmarklist',
  id: 'bookmarkList',
  title: 'Search result',
  store: 'BookmarkStore',
  initComponent: function() {
    var style = 'width: 25px; height: 25px; border-radius: 5px; float: right;';
    var spanStyle = 'display: inline-block; top: 5px; position: relative';
    this.columns = [
      {
        dataIndex: 'avatar_url',
        flex: 1,
        align: 'center',
        renderer: function(value, meta, record, rowIndex) {
          var loginName = record.get('login');
          return Ext.String.format(
              '<div><span style="'+spanStyle+'">'+loginName+'</span><img style="'+style+'" class="avatarImg" src="'+value+'"></d>'
              , value, value);
        }
      }
    ];
    this.callParent(arguments);
  },
  hideHeaders: true,
  listeners : {
    cellclick : function(context, td, cellIndex, record, tr, rowIndex, e, eOpts) {
      var xy = e.xy;
      var store = this.getStore();
      new Ext.menu.Menu({
        items : [{
          text : 'Remove',
          glyph: 'xf00d@FontAwesome',
          handler : function(e, data){
            store.removeAt(rowIndex);
            store.sync();
          }
        },
        {
          text : 'Visit profile',
          glyph: 'xf113@FontAwesome',
          handler : function(e, data){
            window.open(record.raw.html_url, '_BLANK');
          }
        }]
      }).showAt(xy)
    },

  }});