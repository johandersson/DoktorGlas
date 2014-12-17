(function () {

    var mark = {
        getRange:function(){
            return window.getSelection();
        }
    };

    var el = document.getElementById("main");

    if (el) {
        el.addEventListener("mouseup", function () {
            if (window.getSelection) {
                alert(JSON.stringify(window.getSelection()))
            } else {
                return document.selection.createRange().text;
            }

        }, false);
    }
})();