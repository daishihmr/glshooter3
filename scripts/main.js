tm.main(function() {
    gls3.app = tm.hybrid.HybridApp();
    tm.dom.Element("body")
        .prepend(tm.dom.Element(gls3.app.element))
        .prepend(tm.dom.Element(gls3.app.threeCanvas));

    gls3.app.fps = 60;
    gls3.app.resize(gls3.W, gls3.H).fitWindow();

    gls3.app.pushScene(tm.ui.LoadingScene({
        nextScene: Main,
        width: gls3.W,
        height: gls3.H,
        assets: gls3.assets,
    }));

    gls3.app.run();
});

tm.define("Main", {
    superClass: "tm.hybrid.HybridScene",

    init: function() {
        this.superInit();
        this.fromJSON({
            children: {
                bg: {
                    type: "tm.display.RectangleShape",
                    init: [gls3.W, gls3.H, {
                        fillStyle: "black",
                        strokeStyle: "transparent",
                    }],
                    alpha: 0.5,
                    originX: 0,
                    originY: 0,
                },
                tltleLabel: {
                    type: "tm.display.Label",
                    init: ["This is Main scene.", 36],
                    x: gls3.W * 0.5,
                    y: gls3.H * 0.25,
                    fontFamily: "titleFont",
                },
                uiLabel: {
                    type: "tm.display.Label",
                    init: ["This is Main scene.", 36],
                    x: gls3.W * 0.5,
                    y: gls3.H * 0.5,
                    fontFamily: "uiFont",
                },
                numberLabel: {
                    type: "tm.display.Label",
                    init: ["1234567890", 36],
                    x: gls3.W * 0.5,
                    y: gls3.H * 0.75,
                    fontFamily: "numberFont",
                },
            },
        });

        this.three.camera.aspect = gls3.W / gls3.H;
        this.three.camera.z = 20;

        var test = tm.hybrid.Mesh("test")
            .addChildTo(this.three)
            .on("enterframe", function(e) {
                var kb = e.app.keyboard;
                var kd = kb.getKeyDirection().mul(0.2);
                this.x += kd.x;
                this.y -= kd.y;
            });

        var camera = this.three.camera;
        camera.from = new THREE.Quaternion().copy(camera.quaternion);
        camera.to = new THREE.Quaternion().copy(camera.quaternion);
        camera.step = 0;

        var m1 = new THREE.Matrix4();

        camera.on("enterframe", function(e) {
            if (e.app.frame % 200 !== 0) {
                THREE.Quaternion.slerp(this.from, this.to, this.quaternion, this.step);
                return;
            }

            m1.lookAt(this.position, test.position, this.up);

            this.from.copy(this.quaternion);
            this.to.setFromRotationMatrix(m1);

            this.tweener
                .clear()
                .set({
                    step: 0,
                })
                .to({
                    step: 1,
                }, 3000, "easeInOutQuad");
        });
    },
});
