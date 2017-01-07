var Game = {};

// Setup
var audio = {};
var image = {};
var player1 = {};
var skin = {};
var scene = {};
var scale = 1;
var state = 0;
var next = [];
var background = new Image();
var cursorX;
var cursorY;
var clothes = "kiiro_main";
var use = "false";
var groundlevel = 220;
var mode = "adventure";
var click = false;
var nsfw = false;
var key = {
	w : false,
	a : false,
	s : false,
	d : false,
	e : false,
	esc : false,
}

function setup_skins(){
	createSkin("kiiro_main");
	createSkin("kiiro_sketched");
	createSkin("blank");
	createSkin("kiiro_guitar");
}
function setup_player1() {
	player1.skin = skin[clothes].r[0];
	player1.step = 0;
	player1.dir = "right";	
    player1.crouch = false;
    player1.y = 200;
    player1.x = 400;
    player1.vy = 0;
    player1.vx = 0;
}

// Canvas-Initialisierung
window.onload = function() {
    var canvas = document.getElementById("Canvas");
    Game.ctx = canvas.getContext("2d");
	loadImages();
	loadAudio();
	setup_skins();
	setup_player1();
	setup_scenes();
	scene.at = "loading";

    // Tatsächliche Abbildung
    function draw() {
		Game.ctx.drawImage(background, 0, 0);
        scene[scene.at]();
        physik();
        if (scene.at !== "menue") Game.ctx.fillText("Version 0.252", 1140, 710);
		Game.ctx.drawImage(player1.skin, player1.x, player1.y, 220 * scale, 440 * scale)
		Game.ctx.drawImage(image.cursor, cursorX - 8, cursorY - 36);
        requestAnimationFrame(draw);
    }
    draw(); 


    // Eingabeverwaltung
    addEventListener("keydown", function(w) {
		if (w.keyCode === 87) key.w = true;
		if (w.keyCode === 83) key.s = true;
		if (w.keyCode === 65) key.a = true
		if (w.keyCode === 68) key.d = true;
		if (w.keyCode === 69) key.e = true;
		if (w.keycode === 27) key.esc = true;
	}, false);
    addEventListener("keyup", function(w) {
		if (w.keyCode === 87) key.w = false;
		if (w.keyCode === 83) key.s = false;
		if (w.keyCode === 65) key.a = false
		if (w.keyCode === 68) key.d = false;
		if (w.keyCode === 69) key.e = false;
		if (w.keycode === 27) key.esc = false;
	}, false);

    document.onmousedown = function(trigger) {
        click = true;
    }
    document.onmouseup = function(trigger) {
        click = false;
    }
    document.onmousemove = function(m) {
        cursorX = m.pageX - document.getElementById("Canvas").offsetLeft;
        cursorY = m.pageY - document.getElementById("Canvas").offsetTop;
    }
    function mausX() {
        return cursorX;
    }
    function mausY() {
        return cursorY;
    }

}
// Scripted by Shamenox with a lot of help by Miterosan