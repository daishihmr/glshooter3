tm.define("tm.hybrid.ThreeElement", {
    superClass: "tm.app.Element",

    init: function(threeObject) {
        this.superInit();

        /** @type {THREE.Object3D} */
        this.threeObject = threeObject || null;
    },

    /** @override */
    addChild: function(child) {
        if (child.parent) child.remove();
        child.parent = this;
        this.children.push(child);

        if (child instanceof tm.hybrid.ThreeElement) {
            console.log("add", child.threeObject instanceof THREE.Sprite);
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
tm.hybrid.ThreeElement.prototype.accessor("id", {
    get: function() {
        return this.threeObject.id;
    },
    set: function(v) {
        this.threeObject.id = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("uuid", {
    get: function() {
        return this.threeObject.uuid;
    },
    set: function(v) {
        this.threeObject.uuid = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("name", {
    get: function() {
        return this.threeObject.name;
    },
    set: function(v) {
        this.threeObject.name = v;
    }
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
tm.hybrid.ThreeElement.prototype.accessor("eulerOrder", {
    get: function() {
        return this.threeObject.eulerOrder;
    },
    set: function(v) {
        this.threeObject.eulerOrder = v;
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
tm.hybrid.ThreeElement.prototype.accessor("castShadow", {
    get: function() {
        return this.threeObject.castShadow;
    },
    set: function(v) {
        this.threeObject.castShadow = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("receiveShadow", {
    get: function() {
        return this.threeObject.receiveShadow;
    },
    set: function(v) {
        this.threeObject.receiveShadow = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("frustumCulled", {
    get: function() {
        return this.threeObject.frustumCulled;
    },
    set: function(v) {
        this.threeObject.frustumCulled = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("matrixAutoUpdate", {
    get: function() {
        return this.threeObject.matrixAutoUpdate;
    },
    set: function(v) {
        this.threeObject.matrixAutoUpdate = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("matrixWorldNeedsUpdate", {
    get: function() {
        return this.threeObject.matrixWorldNeedsUpdate;
    },
    set: function(v) {
        this.threeObject.matrixWorldNeedsUpdate = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("rotationAutoUpdate", {
    get: function() {
        return this.threeObject.rotationAutoUpdate;
    },
    set: function(v) {
        this.threeObject.rotationAutoUpdate = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("userData", {
    get: function() {
        return this.threeObject.userData;
    },
    set: function(v) {
        this.threeObject.userData = v;
    }
});
tm.hybrid.ThreeElement.prototype.accessor("matrixWorld", {
    get: function() {
        return this.threeObject.matrixWorld;
    },
    set: function(v) {
        this.threeObject.matrixWorld = v;
    }
});

tm.hybrid.ThreeElement.prototype.applyMatrix = function(matrix) {
    this.threeObject.applyMatrix(matrix);
    return this;
};
tm.hybrid.ThreeElement.prototype.translateX = function(distance) {
    this.threeObject.translateX(distance);
    return this;
};
tm.hybrid.ThreeElement.prototype.translateY = function(distance) {
    this.threeObject.translateY(distance);
    return this;
};
tm.hybrid.ThreeElement.prototype.translateZ = function(distance) {
    this.threeObject.translateZ(distance);
    return this;
};
tm.hybrid.ThreeElement.prototype.localToWorld = function(vector) {
    this.threeObject.localToWorld(vector);
    return this;
};
tm.hybrid.ThreeElement.prototype.worldToLocal = function(vector) {
    this.threeObject.worldToLocal(vector);
    return this;
};
tm.hybrid.ThreeElement.prototype.lookAt = function(vector) {
    this.threeObject.lookAt(vector);
    return this;
};
tm.hybrid.ThreeElement.prototype.updateMatrix = function() {
    this.threeObject.updateMatrix();
    return this;
};
tm.hybrid.ThreeElement.prototype.updateMatrixWorld = function(force) {
    this.threeObject.updateMatrixWorld(force);
    return this;
};
tm.hybrid.ThreeElement.prototype.getObjectByName = function(name, recursive) {
    return this.threeObject.getObjectByName(name, recursive);
};
tm.hybrid.ThreeElement.prototype.getObjectById = function(id, recursive) {
    return this.threeObject.getObjectById(id, recursive);
};
tm.hybrid.ThreeElement.prototype.translateOnAxis = function(axis, distance) {
    return this.threeObject.translateOnAxis(axis, distance);
};
tm.hybrid.ThreeElement.prototype.rotateOnAxis = function(axis, angle) {
    return this.threeObject.rotateOnAxis(axis, angle);
};
