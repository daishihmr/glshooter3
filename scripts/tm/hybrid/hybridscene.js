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

        this.ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene.add(this.ambientLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff);
        this.directionalLight.position.set(1, 1, 1).normalize();
        this.scene.add(this.directionalLight);

        this.threeObject = this.scene;
    },
});

