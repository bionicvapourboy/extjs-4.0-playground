Ext.define('MyApp.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    id: 'userList',
    title: 'Search result',
    store: 'UserStore',
    viewConfig: {
      emptyText: 'No records. Use the search panel to gather further results.',
      deferEmptyText: false
    },
    minHeight: 200,
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
              var recordClone = JSON.parse(JSON.stringify(record.raw));
              delete recordClone.id;
              store.add(recordClone);
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