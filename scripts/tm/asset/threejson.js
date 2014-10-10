tm.define("tm.asset.ThreeJSON", {
    superClass: "tm.event.EventDispatcher",

    init: function(path) {
        this.superInit();
        this.mesh = null;

        if (tm.asset.ThreeJSON.loader === null) {
            tm.asset.ThreeJSON.loader = new THREE.JSONLoader();
        }

        tm.asset.ThreeJSON.loader.load(path, function(geometry, materials) {
            console.log(materials[0]);
            this.mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
            this.flare("load");
        }.bind(this));
    },
});
tm.asset.ThreeJSON.loader = null;

tm.asset.Loader.register("three", function(path) {
    var font = tm.asset.ThreeJSON(path);
    return font;
});
