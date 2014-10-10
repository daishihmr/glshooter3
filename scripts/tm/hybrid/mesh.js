tm.define("tm.hybrid.Mesh", {
    superClass: "tm.hybrid.ThreeElement",

    init: function(mesh) {
        this.superInit();

        if (typeof(mesh) === "string") {
            var threeJSON = tm.asset.Manager.get(mesh);
            if (threeJSON) {
                this.threeObject = threeJSON.mesh;
            } else {
                console.error("アセット'{0}'がないよ".format(mesh));
            }
        } else if (mesh instanceof THREE.Mesh) {
            this.threeObject = mesh;
        }
    },
});

tm.hybrid.Mesh.prototype.getMorphTargetIndexByName = function(name) {
    this.threeObject.getMorphTargetIndexByName(name);
    return this;
};
tm.hybrid.Mesh.prototype.updateMorphTargets = function() {
    this.threeObject.updateMorphTargets();
    return this;
};
