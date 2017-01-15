function setupInput(){

addEventListener("keydown", function(w) {
    if (w.keyCode === 87) key.up = true;
    if (w.keyCode === 83) key.down = true;
    if (w.keyCode === 65) key.left = true;
    if (w.keyCode === 68) key.right = true;
    if (w.keyCode === 69) key.use = true;
    if (w.keyCode === 27) key.back = true;

    w.preventDefault();
    w.stopPropagation();
}, false);
addEventListener("keyup", function(w) {
    if (w.keyCode === 87) key.up = false;
    if (w.keyCode === 83) key.down = false;
    if (w.keyCode === 65) key.left = false;
    if (w.keyCode === 68) key.right = false;
    if (w.keyCode === 69) key.use = false;
    if (w.keyCode === 27) key.back = false;
}, false);

document.onmousedown = function(trigger) {
    click = true;
};
document.onmouseup = function(trigger) {
    click = false;
};
document.onmousemove = function(m) {
    cursorX = m.pageX - document.getElementById("Canvas").offsetLeft;
    cursorY = m.pageY - document.getElementById("Canvas").offsetTop;
};
function mausX() {
    return cursorX;
}
function mausY() {
    return cursorY;
}

}
