function smileys() {
    if (arguments.length == 0) {
        var texts = document.getElementsByTagName('input');
        var src = "http:\/\/www.freesmileys.org\/smileys\/smiley\-basic\/bye.gif";
        for (var i = 0; i < texts.length; i++) {
            if (texts[i].type == "text") {
                var img = document.createElement("img");
                img.setAttribute("src", src);
                var parent = texts[i].parentNode;
                parent.insertBefore(img, texts[i].nextSibling);
            }
        }
    }
 }
