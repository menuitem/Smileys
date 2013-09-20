function smileys(arguments) {
    var srcWelcome = "http://www.freesmileys.org/smileys/smiley-basic/bye.gif";
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
    var element = document.getElementById(arguments[0].nextSibling);
    console.log(element);
    
 }
