tm.define("tm.asset.WebFont", {
    superClass: "tm.event.EventDispatcher",

    init: function(path, key) {
        this.superInit();

        var testElement = tm.dom.Element("body").create("span");
        testElement.style
            .set("fontFamily", "'{0}', 'monospace'".format(key))
            .set("color", "rgba(0, 0, 0, 0)")
            .set("fontSize", "40px");
        testElement.text = "QW@HhsXJ=/()あいうえお＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";

        var before = testElement.element.offsetWidth;

        var fontFaceStyleElement = tm.dom.Element("head").create("style");
        fontFaceStyleElement.text = "@font-face { font-family: '{0}'; src: url({1}) format('truetype'); }".format(key, path);

        var font = this;
        var checkLoadFont = function() {
            if (testElement.element.offsetWidth !== before) {
                testElement.remove();
                font.flare("load");
            } else {
                setTimeout(checkLoadFont, 100);
            }
        };
        setTimeout(checkLoadFont, 100);
    },
});

tm.asset.Loader.register("ttf", function(path, key) {
    var font = tm.asset.WebFont(path, key);
    return font;
});
