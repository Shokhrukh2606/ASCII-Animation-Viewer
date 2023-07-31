var FONTSIZES = [];
FONTSIZES['Tiny'] = '7pt'
FONTSIZES['Small'] = '10pt'
FONTSIZES['Medium'] = '12pt'
FONTSIZES['Large'] = '16pt'
FONTSIZES['Extra Large'] = '24pt'
FONTSIZES['XXL'] = '32pt'
$("#animation").on("change", function (e) {
    $("#text-area").val(ANIMATIONS[e.target.value])
})
$("#fontsize").on("change", function (e) {
    $("#text-area").css("font-size", FONTSIZES[e.target.value])
})
