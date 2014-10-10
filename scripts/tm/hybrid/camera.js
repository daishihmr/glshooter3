tm.define("tm.hybrid.Camera", {
    superClass: "tm.hybrid.ThreeElement",

    init: function() {
        this.superInit();
        this.threeObject = new THREE.PerspectiveCamera(40, 1, 1, 10000);
    },
});

tm.hybrid.Camera.prototype.accessor("matrixWorldInverse", {
    get: function() {
        return this.threeObject.matrixWorldInverse;
    },
    set: function(v) {
        this.threeObject.matrixWorldInverse = v;
    },
});
tm.hybrid.Camera.prototype.accessor("projectionMatrix", {
    get: function() {
        return this.threeObject.projectionMatrix;
    },
    set: function(v) {
        this.threeObject.projectionMatrix = v;
    },
});
tm.hybrid.Camera.prototype.accessor("fov", {
    get: function() {
        return this.threeObject.fov;
    },
    set: function(v) {
        this.threeObject.fov = v;
        this.threeObject.updateProjectionMatrix();
    },
});
tm.hybrid.Camera.prototype.accessor("aspect", {
    get: function() {
        return this.threeObject.aspect;
    },
    set: function(v) {
        this.threeObject.aspect = v;
        this.threeObject.updateProjectionMatrix();
    },
});
tm.hybrid.Camera.prototype.accessor("near", {
    get: function() {
        return this.threeObject.near;
    },
    set: function(v) {
        this.threeObject.near = v;
        this.threeObject.updateProjectionMatrix();
    },
});
tm.hybrid.Camera.prototype.accessor("far", {
    get: function() {
        return this.threeObject.far;
    },
    set: function(v) {
        this.threeObject.far = v;
        this.threeObject.updateProjectionMatrix();
    },
});
