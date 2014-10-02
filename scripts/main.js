tm.main(function() {
    gls3.app = tm.display.CanvasApp();
    var canvasElement = tm.dom.Element(gls3.app.element);

    tm.dom.Element("body").prepend(canvasElement);
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
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();
        this.fromJSON({
            children: [{
                type: "tm.display.Label",
                init: ["This is Main scene.", 36],
                x: gls3.W * 0.5,
                y: gls3.H * 0.25,
                fontFamily: "titleFont",
            }, {
                type: "tm.display.Label",
                init: ["This is Main scene.", 36],
                x: gls3.W * 0.5,
                y: gls3.H * 0.5,
                fontFamily: "uiFont",
            }, {
                type: "tm.display.Label",
                init: ["1234567890", 36],
                x: gls3.W * 0.5,
                y: gls3.H * 0.75,
                fontFamily: "numFont",
            }, ]
        });
    },
});
