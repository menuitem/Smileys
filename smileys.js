function smileys() {
    var srcWelcome = "http://www.freesmileys.org/smileys/smiley-basic/bye.gif";
    var srcGood = "http://www.freesmileys.org/smileys/smiley-basic/biggrin.gif";
    var srcBad = "http://www.freesmileys.org/smileys/smiley-basic/rofl.gif";
    if (arguments.length == 0) {
        var texts = document.getElementsByTagName('input');
        for (var i = 0; i < texts.length; i++) {
            if (texts[i].type == "text") {
                var img = document.createElement("img");
                img.setAttribute("src", srcWelcome);
                var parent = texts[i].parentNode;
                parent.insertBefore(img, texts[i].nextSibling);
            }
        }
        return
    }
    if (arguments.length == 1){
        var element = arguments[0]
        var img = arguments[0].nextSibling;
        if (element.value==""){
            img.setAttribute('src', srcWelcome);
            return
        }else{
            img.setAttribute('src', srcGood);
            return
        }
    }
    if (arguments.length == 2){
        var element = arguments[0]
        var img = arguments[0].nextSibling;
        img.setAttribute('src', srcBad);
    }
 }
