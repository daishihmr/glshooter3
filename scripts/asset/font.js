tm.define("tm.asset.Font", {
    superClass: "tm.event.EventDispatcher",

    init: function(src) {
        this.superInit();

        var tester = document.createElement("span");
        tester.style.fontFamily = "'{0}', 'monospace'".format(ff);
        tester.style.color = "rgba(0, 0, 0, 0)";
        tester.style.fontSize = "80px";
        tester.innerHTML = "QW@HhsXJ=/()あいうえお＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
        document.body.appendChild(tester);
        var before = tester.offsetWidth;

        var checkLoadFont = function() {
            if (tester.offsetWidth !== before) {
                document.body.removeChild(tester);
                font.loaded = true;
            } else {
                setTimeout(checkLoadFont, 10);
            }
        };
        checkLoadFont();
    },
});
