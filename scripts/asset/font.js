tm.define("tm.asset.WebFont", {
    superClass: "tm.event.EventDispatcher",

    init: function(path, key) {
        this.superInit();

        var tester = document.createElement("span");
        tester.style.fontFamily = "'{0}', 'monospace'".format(key);
        tester.style.color = "rgba(0, 0, 0, 0)";
        tester.style.fontSize = "80px";
        tester.innerHTML = "QW@HhsXJ=/()あいうえお＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
        document.body.appendChild(tester);
        var before = tester.offsetWidth;

        var elm = tm.dom.Element("head").create("style");
        elm.text = "@font-face { font-family: '{0}'; src: url({1}) format('truetype'); }".format(key, path);

        var font = this;
        var checkLoadFont = function() {
            console.log(before, tester.offsetWidth);
            if (tester.offsetWidth !== before) {
                document.body.removeChild(tester);
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
