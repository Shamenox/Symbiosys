var Game = {};

// Setup
var audio = {};
var image = {};
var player1 = {};
var room = {};
var skin = {};
var scene = "loading";
var scale = 1;
var state = 0;
var next = [];
var background = new Image();
var cursorX;
var cursorY;
var clothes = "kiiro_main";
var use = "false";
var groundlevel = 220;
var gravity = "true";
var esc = "false";
var click = false;
var nsfw = false;

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
    player1.crouch = "false";
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
	setup_rooms();

    // Tatsächliche Abbildung
    function draw() {
		Game.ctx.drawImage(background, 0, 0);
        room[scene].act();
        physik();
        if (scene !== "menue") Game.ctx.fillText("Version 0.251", 1140, 710);
		Game.ctx.drawImage(player1.skin, player1.x, player1.y, 220 * scale, 440 * scale)
		Game.ctx.drawImage(image.cursor, cursorX - 8, cursorY - 36);
        requestAnimationFrame(draw);
    }
    draw(); 


    // Eingabeverwaltung
    addEventListener("keydown", function(w) {
		if (gravity === "true"){
			if (w.keyCode === 87 && player1.y === groundlevel) player1.vy = 30 * scale, player1.y -= 40;
			if (w.keyCode === 83) player1.crouch = "true";
			if (w.keyCode === 65 && player1.x > room[scene].edgeL) {
				player1.vx = -10 * scale;
				audio.steps.play();
			}
			if (w.keyCode === 68 && player1.x < room[scene].edgeR) {
				player1.vx = +10 * scale;
				audio.steps.play();
			}
			if (w.keyCode === 69) use = "true";
		}
		if (gravity === "space"){
			if (w.keyCode === 87) player1.vy += 2;
			if (w.keyCode === 83) player1.vy -= 2;
			if (w.keyCode === 65) player1.vx -= 2;
			if (w.keyCode === 68) player1.vx += 2;
			if (w.keyCode === 69) use = "true";
			if (w.keycode === 27) esc = "true";
		}
	}, false);
    addEventListener("keyup", function(w) {
		if (gravity === "true"){
			if (w.keyCode === 83) player1.crouch = "false";
			if (w.keyCode === 65) player1.vx = 0;
			if (w.keyCode === 68) player1.vx = 0;
			if (w.keyCode === 69 && use === "true") use = "false";
			if (w.keycode === 27) esc = "false";
		}
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