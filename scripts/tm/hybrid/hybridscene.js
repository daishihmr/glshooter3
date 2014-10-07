tm.define("tm.hybrid.HybridScene", {
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();
        this.three = tm.hybrid.HybridScene.Three();
    },

    render: function(renderer) {
        renderer.render(this.three.scene, this.three.camera.threeObject);
    },
});

tm.define("tm.hybrid.HybridScene.Three", {
    superClass: "tm.hybrid.ThreeElement",

    init: function() {
        this.superInit();

        this.scene = new THREE.Scene();
        this.camera = tm.hybrid.Camera();
        this.camera.z = 7;

        this.light = new THREE.DirectionalLight(0xffffff);
        this.light.position.set(0, 0, 1).normalize();
        this.scene.add(this.light);

        this.threeObject = this.scene;
    },
});

