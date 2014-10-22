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
            children: {},
        });

        var bg = tm.hybrid.Mesh("bg")
            .addChildTo(scene.three);
        bg.setScale(80);
        bg.receiveShadow = true;

        var gameBoard = tm.hybrid.ThreeElement()
            .setY(100)
            .on("enterframe", function() {
                this.z -= 1;
            })
            .addChildTo(scene.three);

        var camera = this.camera;
        camera.setPosition(0, 2500, 1);
        camera.lookAt(gameBoard);
        camera.addChildTo(gameBoard);

        var fighter = tm.hybrid.Mesh(new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), new THREE.MeshLambertMaterial({
                color: 0x101080,
                ambient: 0x010101,
            })))
            .on("enterframe", function(e) {
                this.rotationZ += 2;
                var dir = e.app.keyboard.getKeyDirection().mul(20);
                this.x += dir.x;
                this.z += dir.y;
            })
            .addChildTo(gameBoard);
        fighter.castShadow = true;

        tm.hybrid.ThreeElement(new THREE.AmbientLight(0xffffff, 0.5))
            .addChildTo(gameBoard);

        var light = tm.hybrid.ThreeElement(new THREE.DirectionalLight(0xffffff, 2.0))
            .setPosition(0, 2500, 1)
            .addChildTo(gameBoard);
        light.castShadow = true;

        // THREE.ImageUtils.loadTexture("./images/fighters.png", null, function(texture) {
        //     texture.offset.x = 0.0;
        //     texture.offset.y = 1.0 - 1 / 5;
        //     texture.repeat.x = 1 / 7;
        //     texture.repeat.y = 1 / 5;

        //     var material = new THREE.SpriteMaterial({
        //         map: texture,
        //         color: 0xffffff,
        //         depthTest: false,
        //     });
        //     var sprite = new THREE.Sprite(material);
        //     sprite.scale.set(5, 5, 1);
        //     tm.hybrid.ThreeElement(sprite)
        //         .on("enterframe", function(e) {
        //             // if (e.app.frame % 5 === 0) {
        //             //     texture.offset.x += 1 / 7;
        //             //     if (texture.offset.x >= 1.0) {
        //             //         texture.offset.x -= 1.0;
        //             //     }
        //             // }
        //         })
        //         .addChildTo(scene.three);
        // });

        // var spline = new THREE.SplineCurve3([
        //     new THREE.Vector3(0, 0, 0),
        //     new THREE.Vector3(0, 20, 0),
        //     new THREE.Vector3(15, 15, -30),
        //     new THREE.Vector3(15, 5, 0),
        //     new THREE.Vector3(25, 10, 0),
        //     new THREE.Vector3(25, 30, 0)
        // ]);

        // var lineMat = new THREE.LineBasicMaterial({
        //     color: 0xff00f0,
        // });

        // var lineGeo = new THREE.Geometry();
        // var splinePoints = spline.getPoints(100);
        // for (var i = 0; i < splinePoints.length; i++) {
        //     lineGeo.vertices.push(splinePoints[i]);
        // }

        // tm.hybrid.ThreeElement(new THREE.Line(lineGeo, lineMat))
        //     .on("enterframe", function() {
        //         this.rotationY += 0.02;
        //     })
        //     .addChildTo(scene.three);
    },
});
