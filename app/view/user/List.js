Ext.define('MyApp.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    id: 'userList',
    title: 'Search result',
    store: 'UserStore',
    initComponent: function() {
        var style = 'width: 50px; height: 50px; border-radius: 5px'
        this.columns = [
            {
              header: 'GitHub username',
              dataIndex: 'login',
              flex: 5,
              valign: 'middle',
            },
            {
              header: 'Avatar',
              dataIndex: 'avatar_url',
              flex: 1,
              align: 'center',
              valign: 'middle',
              renderer: function(value) {
                return Ext.String.format('<img style="'+style+'" class="avatarImg" src="'+value+'"></a>', value, value);
              }
            }
        ];
        this.callParent(arguments);
    },
    listeners : {
      cellclick : function(context, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var xy = e.xy;
        new Ext.menu.Menu({
          items : [{
            text : 'Bookmark',
            glyph: 'xf02e@FontAwesome',
            handler : function(){
              var store = Ext.data.StoreManager.lookup('BookmarkStore');
              store.add(record.raw);
            }
          }]
        }).showAt(xy)
      },

  }});