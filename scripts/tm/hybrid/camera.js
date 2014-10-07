tm.define("tm.hybrid.Camera", {
    superClass: "tm.hybrid.ThreeElement",

    init: function() {
        this.superInit();
        this.threeObject = new THREE.PerspectiveCamera(40, 300 / 400, 1, 10000);
    },
});

tm.hybrid.Camera.prototype.accessor("fov", {
    get: function() {
        return this.threeObject.fov;
    },
    set: function(v) {
        this.threeObject.fov = v;
    },
});

tm.hybrid.Camera.prototype.accessor("aspect", {
    get: function() {
        return this.threeObject.aspect;
    },
    set: function(v) {
        this.threeObject.aspect = v;
    },
});
