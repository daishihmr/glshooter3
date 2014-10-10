tm.define("tm.hybrid.Sprite", {
    superClass: "tm.hybrid.ThreeElement",

    init: function(texture, xCellSize, yCellSize) {
        if (typeof(texture) === "string") {
            this.texture = tm.asset.Manager.get(texture);
        } else if (texture) {
            this.texture = texture;
        } else {
            console.error("アセット'{0}'がないよ".format(texture));
        }
        xCellSize = xCellSize || 1;
        yCellSize = yCellSize || 1;

        this.superInit();
    },
});
