document.onmousedown = function (e) {
    var x = e.pageX;
    var y = e.pageY;

    console.log("X is " + x + " and Y is " + y);
};

document.onkeydown = function (e) {
    if (e.key == "e") {
        for (i = 2; i <= 30; i++) {
            var pin = document.getElementById("pin" + i);
            pin.style.left = Math.floor(Math.random() * 1822);
            pin.style.top = Math.floor(Math.random() * 956);
        }
    }
};
