tm.define("gls3.GameScene", {
    superClass: "tm.hybrid.HybridScene",

    init: function() {
        this.superInit();

        this.on("enter", function(e) {
            var composer = this.effectComposer = new THREE.EffectComposer(e.app.threeRenderer);
            composer.addPass(
                new THREE.RenderPass(this.three.scene, this.three.camera.threeObject),
                new THREE.WebGLRenderTarget(e.app.width, e.app.height, {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBFormat,
                    stencilBuffer: false
                })
            );

            var effect = new THREE.ShaderPass(THREE.CopyShader);
            composer.addPass(effect);

            // effect = new THREE.ShaderPass(THREE.VerticalBlurShader);
            // effect.uniforms.v.value *= 2;
            // composer.addPass(effect);

            // effect = new THREE.ShaderPass(THREE.RGBShiftShader);
            // effect.uniforms.amount.value *= 5;
            // composer.addPass(effect);

            effect.renderToScreen = true;
        });
    },

    render: function(renderer) {
        this.effectComposer.render();
    },

});
