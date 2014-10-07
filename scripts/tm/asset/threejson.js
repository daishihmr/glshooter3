tm.define("tm.asset.ThreeJSON", {
    superClass: "tm.event.EventDispatcher",

    init: function(path) {
        this.superInit();
        this.mesh = null;

        if (tm.asset.ThreeJSON.loader === null) {
            tm.asset.ThreeJSON.loader = new THREE.JSONLoader();
        }

        tm.asset.ThreeJSON.loader.load(path, function(geometry, materials) {
            materials[0].shading = THREE.FlatShading;
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