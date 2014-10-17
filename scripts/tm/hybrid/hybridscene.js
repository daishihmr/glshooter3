tm.define("tm.hybrid.HybridScene", {
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();
        this.two = this;
        this.three = tm.hybrid.HybridScene.Three();

        this.effectComposer = null;

        this.on("enter", function(e) {
            this.camera.aspect = e.app.width / e.app.height;
        });
    },

    render: function(renderer) {
        renderer.render(this.three.scene, this.three.camera.threeObject);
    },
});
tm.hybrid.HybridScene.prototype.accessor("camera", {
    get: function() {
        return this.three.camera;
    },
    set: function(v) {
        this.three.camera = v;
    },
});
tm.hybrid.HybridScene.prototype.accessor("ambientLight", {
    get: function() {
        return this.three.ambientLight;
    },
    set: function(v) {
        this.three.ambientLight = v;
    },
});
tm.hybrid.HybridScene.prototype.accessor("directionalLight", {
    get: function() {
        return this.three.directionalLight;
    },
    set: function(v) {
        this.three.directionalLight = v;
    },
});

tm.define("tm.hybrid.HybridScene.Three", {
    superClass: "tm.hybrid.ThreeElement",

    init: function() {
        this.superInit(new THREE.Scene());

        this.scene = this.threeObject;

        this.camera = tm.hybrid.Camera();
        this.camera.z = 7;

        this.ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene.add(this.ambientLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff);
        this.directionalLight.position.set(1, 1, 1).normalize();
        this.scene.add(this.directionalLight);
    },
});

tm.hybrid.HybridScene.prototype.accessor("fog", {
    get: function() {
        return this.three.scene.fog;
    },
    set: function(v) {
        this.three.scene.fog = v;
    },
});
tm.hybrid.HybridScene.prototype.accessor("overrideMaterial", {
    get: function() {
        return this.three.scene.overrideMaterial;
    },
    set: function(v) {
        this.three.scene.overrideMaterial = v;
    },
});
tm.hybrid.HybridScene.prototype.accessor("autoUpdate", {
    get: function() {
        return this.three.scene.autoUpdate;
    },
    set: function(v) {
        this.three.scene.autoUpdate = v;
    },
});
