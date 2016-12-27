var Game = {};

// Setup
var audio = {};
var image = {};
var player1 = {};
var room = {};
var skin = [];
var scene = "loading";
var scale = 1;
var state = 0;
var next = [];
var background = new Image();
var cursorX;
var cursorY;
var clothes = "main";
var use = "false";
var groundlevel = 220;
var gravity = "true";
var esc = "false";
var click = false;
var nsfw = false;

function setup_skins(){
	var standartSkin = createSkin();
		for (var i = 0;i <11 ; i++){
			standartSkin.r[i] = image["kiiro"+i+"r"];
		}
		standartSkin.r[11] = image.kiiro0r;
		for (var i = 0;i <11 ; i++){
			standartSkin.l[i] = image["kiiro"+i+"l"];
		}
		standartSkin.l[11] = image.kiiro0l;
	skin["main"] = standartSkin;
	
	var sketchedSkin = createSkin();
		for (var i = 0;i <11 ; i++){
			sketchedSkin.r[i] = image["kiiro"+i+"r_sketched"];
		}
		sketchedSkin.r[11] = image.kiiro0r_sketched;
		for (var i = 0;i <11 ; i++){
			sketchedSkin.l[i] = image["kiiro"+i+"l_sketched"];
		}
		sketchedSkin.l[11] = image.kiiro0l_sketched;
	skin["sketched"] = sketchedSkin;
	
	var blankSkin = createSkin();
		for (var i = 0;i <12 ; i++){
			blankSkin.r[i] = image.blank;
		}
		for (var i = 0;i <12 ; i++){
			blankSkin.l[i] = image.blank;
		}
	skin["blank"] = blankSkin;
}
function setup_player1() {
	player1.skin = skin["main"].r[0];
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

    // Tatsächliche Abbildung
    function draw() {
		Game.ctx.drawImage(background, 0, 0);
        room[scene]();
        physik();
        if (scene !== "menue") Game.ctx.fillText("Version 0.25", 1140, 710);
		Game.ctx.drawImage(player1.skin, player1.x, player1.y, 220 * scale, 440 * scale)
		Game.ctx.drawImage(image.cursor, cursorX - 8, cursorY - 36);
        requestAnimationFrame(draw);
    }

    draw(); 


    // Eingabeverwaltung
    addEventListener("keydown", function(w) {
		if (gravity === "true"){
			if (w.keyCode === 87 && player1.y === groundlevel) player1.vy = 30 * scale, player1.y -= 40;
			if (w.keyCode === 83) player1.y = groundlevel + 100, player1.crouch = "true";
			if (w.keyCode === 65 ) {
				player1.vx = -10 * scale;
				if (player1.x > 0) audio.steps.play();
			}
			if (w.keyCode === 68) {
				player1.vx = +10 * scale;
				if (player1.x > 0) audio.steps.play();
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