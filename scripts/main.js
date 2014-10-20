tm.main(function() {
    tm.dom.Element("body").style.set("backgroundColor", "hsl(240, 40%, 10%)");

    gls3.app = tm.hybrid.HybridApp();

    tm.util.Script.loadStats().on("load", function() {
        gls3.app.enableStats();
    });

    var twoCanvas = tm.dom.Element(gls3.app.element);
    var threeCanvas = tm.dom.Element(gls3.app.threeCanvas);

    threeCanvas.style.set("backgroundColor", "black");

    tm.dom.Element("body")
        .prepend(twoCanvas)
        .prepend(threeCanvas);

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
    superClass: "gls3.GameScene",

    init: function() {
        var scene = this;
        this.superInit();
        this.fromJSON({
            children: {
                tltleLabel: {
                    type: "tm.display.Label",
                    init: ["This is Main scene.", 36],
                    fillStyle: "hsl(20, 80%, 60%)",
                    x: gls3.W * 0.5,
                    y: gls3.H * 0.25,
                    fontFamily: "titleFont",
                },
                uiLabel: {
                    type: "tm.display.Label",
                    init: ["This is Main scene.", 36],
                    fillStyle: "hsl(20, 80%, 60%)",
                    x: gls3.W * 0.5,
                    y: gls3.H * 0.5,
                    fontFamily: "uiFont",
                },
                numberLabel: {
                    type: "tm.display.Label",
                    init: ["1234567890", 36],
                    fillStyle: "hsl(20, 80%, 60%)",
                    x: gls3.W * 0.5,
                    y: gls3.H * 0.75,
                    fontFamily: "numberFont",
                },
            },
        });

        tm.hybrid.Mesh("bg")
            .setZ(-50)
            .setScale(50)
            .addChildTo(scene.three)
            .on("enterframe", function() {
                this.z += 0.01;
            });

        var camera = this.camera;
        camera.y = 5;
        camera.z = 50;
        camera.from = new THREE.Quaternion().copy(camera.quaternion);
        camera.to = new THREE.Quaternion().copy(camera.quaternion);
        camera.step = 0;

        camera.on("enterframe", function(e) {
            THREE.Quaternion.slerp(this.from, this.to, this.quaternion, this.step);
        });

        var matrix = new THREE.Matrix4();

        THREE.ImageUtils.loadTexture("./images/fighters.png", null, function(texture) {
            texture.offset.x = 0.0;
            texture.offset.y = 1.0 - 1 / 5;
            texture.repeat.x = 1 / 7;
            texture.repeat.y = 1 / 5;

            var material = new THREE.SpriteMaterial({
                map: texture,
                color: 0xffffff,
                depthTest: false,
            });
            var sprite = new THREE.Sprite(material);
            sprite.scale.set(5, 5, 1);
            tm.hybrid.ThreeElement(sprite)
                .on("enterframe", function(e) {
                    // if (e.app.frame % 5 === 0) {
                    //     texture.offset.x += 1 / 7;
                    //     if (texture.offset.x >= 1.0) {
                    //         texture.offset.x -= 1.0;
                    //     }
                    // }
                })
                .addChildTo(scene.three);
        });

        var spline = new THREE.SplineCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 20, 0),
            new THREE.Vector3(15, 15, -30),
            new THREE.Vector3(15, 5, 0),
            new THREE.Vector3(25, 10, 0),
            new THREE.Vector3(25, 30, 0)
        ]);

        var lineMat = new THREE.LineBasicMaterial({
            color: 0xff00f0,
        });

        var lineGeo = new THREE.Geometry();
        var splinePoints = spline.getPoints(100);
        for (var i = 0; i < splinePoints.length; i++) {
            lineGeo.vertices.push(splinePoints[i]);
        }

        tm.hybrid.ThreeElement(new THREE.Line(lineGeo, lineMat))
            .on("enterframe", function() {
                this.rotationY += 0.02;
            })
            .addChildTo(scene.three);
    },
});
