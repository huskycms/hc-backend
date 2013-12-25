define([
    "../../../../../../../../../../../../sugarcms/public/js/library/dojo/_base/declare",
    "../../../../../ContentPaneHash",
    "dojo/data/ItemFileWriteStore",
    "./Menu"
], function(declare, ContentPaneHash, Store, Menu) {
    // summary:
    //      TabPane it is a content pane which shown in TabContainer
    //      inside MenuContainer. It is override onShow method with
    //      behavior to creating MenuTree inside the content pane

    return declare([ ContentPaneHash ], {
            // _menu: [private] ./Menu
            _menu: null,

            postMixInProperties: function () {
                try {
                    if (!this.menuId) {
                        throw new Error('MenuId must be defined');
                    }
                    this.inherited(arguments);
                } catch (e) {
                     console.error(this.declaredClass, arguments, e);
                     throw e;
                }
            },

            onShow: function () {
                // summary:
                //      Create MenuTree inside ContentPane
                try {
                    this._menu && this._menu.destroyRecursive();
                    this._menu = new Menu({store: new Store({url: "/backend/menu/"+this.menuId})});
                    this.attr('content', this._menu.domNode);
                } catch (e) {
                    console.error(this.declaredClass, arguments, e);
                    throw e;
                }
            }
    });
});
