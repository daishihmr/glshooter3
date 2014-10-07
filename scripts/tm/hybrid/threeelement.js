tm.define("tm.hybrid.ThreeElement", {
    superClass: "tm.app.Element",

    init: function() {
        this.superInit();
        this.threeObject = null;
    },

    /** @override */
    addChild: function(child) {
        if (child.parent) child.remove();
        child.parent = this;
        this.children.push(child);

        if (child instanceof tm.hybrid.ThreeElement) {
            this.threeObject.add(child.threeObject);
        }

        var e = tm.event.Event("added");
        child.dispatchEvent(e);

        return child;
    },

    /** @override */
    removeChild: function(child) {
        var index = this.children.indexOf(child);
        if (index != -1) {
            this.children.splice(index, 1);

            if (child instanceof tm.hybrid.ThreeElement) {
                this.threeObject.remove(child.threeObject);
            }

            var e = tm.event.Event("removed");
            child.dispatchEvent(e);
        }
    },
});

tm.hybrid.ThreeElement.prototype.accessor("position", {
    get: function() {
        return this.threeObject.position;
    },
    set: function(v) {
        this.threeObject.position = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("x", {
    get: function() {
        return this.threeObject.position.x;
    },
    set: function(v) {
        this.threeObject.position.x = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("y", {
    get: function() {
        return this.threeObject.position.y;
    },
    set: function(v) {
        this.threeObject.position.y = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("z", {
    get: function() {
        return this.threeObject.position.z;
    },
    set: function(v) {
        this.threeObject.position.z = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("scale", {
    get: function() {
        return this.threeObject.scale;
    },
    set: function(v) {
        this.threeObject.scale = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("scaleX", {
    get: function() {
        return this.threeObject.scale.x;
    },
    set: function(v) {
        this.threeObject.scale.x = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("scaleY", {
    get: function() {
        return this.threeObject.scale.y;
    },
    set: function(v) {
        this.threeObject.scale.y = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("scaleZ", {
    get: function() {
        return this.threeObject.scale.z;
    },
    set: function(v) {
        this.threeObject.scale.z = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("rotation", {
    get: function() {
        return this.threeObject.rotation;
    },
    set: function(v) {
        this.threeObject.rotation = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("rotationX", {
    get: function() {
        return this.threeObject.rotation.x;
    },
    set: function(v) {
        this.threeObject.rotation.x = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("rotationY", {
    get: function() {
        return this.threeObject.rotation.y;
    },
    set: function(v) {
        this.threeObject.rotation.y = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("rotationZ", {
    get: function() {
        return this.threeObject.rotation.z;
    },
    set: function(v) {
        this.threeObject.rotation.z = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("up", {
    get: function() {
        return this.threeObject.up;
    },
    set: function(v) {
        this.threeObject.up = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("useQuaternion", {
    get: function() {
        return this.threeObject.useQuaternion;
    },
    set: function(v) {
        this.threeObject.useQuaternion = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("quaternion", {
    get: function() {
        return this.threeObject.quaternion;
    },
    set: function(v) {
        this.threeObject.quaternion = v;
    }
});

tm.hybrid.ThreeElement.prototype.accessor("visible", {
    get: function() {
        return this.threeObject.visible;
    },
    set: function(v) {
        this.threeObject.visible = v;
    }
});

tm.hybrid.ThreeElement.prototype.lookAt = function(target) {
    this.threeObject.lookAt(target.threeObject.position);
};
