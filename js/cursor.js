var cursorShown = true;
var speed = 100;

function toggleCursor() {
    if (cursorShown) {
        document.getElementById("cursor").style.opacity = 0;
        cursorShown = false;
    } else {
        document.getElementById("cursor").style.opacity = 1;
        cursorShown = true;
    }
}

setInterval(toggleCursor, 500);