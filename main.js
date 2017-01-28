var Game = {event : {}};

// Setup
var player1 = {};
var skin = {};
var overlay = {}
var scale = 1;
var state = 0;
var next = [];
var background = new Image();
var clothes = "kiiro_main";
var use = "false";
var groundlevel = 220;
var mode = "adventure";
var nsfw = false;

function setupSkins(){
	createSkin("kiiro_main");
	createSkin("kiiro_sketched");
	createSkin("blank");
	createSkin("kiiro_guitar");
}
function setupPlayer1() {
	player1.skin = skin[clothes].r[0];
	player1.step = 0;
	player1.dir = "right";
    player1.crouch = false;
    player1.y = 200;
    player1.x = 400;
    player1.vy = 0;
    player1.vx = 0;
}

function setupOverlays(){
	overlay.items = [];
	overlay.display = function(){
		for (i = 0; i < overlay.items.length; i++){
			Game.ctx.drawImage(overlay.items[i].image, overlay.items[i].x, overlay.items[i].y);
		}
		for (i = 0; i < overlay.items.length; i++){
			overlay.items.pop();
		}
	}
}
	function displayOverlay(that, atX, atY){
		neuesOverlay = {};
		neuesOverlay.image = that;
		neuesOverlay.x = atX;
		neuesOverlay.y = atY;
		overlay.items[overlay.items.length] = neuesOverlay;
	}

// Canvas-Initialisierung
window.onload = function() {
    var canvas = document.getElementById("Canvas");
    Game.ctx = canvas.getContext("2d");

	setupInput();
	loadImages();
	loadAudio();
	setupSkins();
	setupEvents();
	setupPlayer1();
	setupNpcs();
	setupItems();
	setupOverlays();
	setupScenes();
	scene.at = "loading";

	//start drawloop
    draw();
};

// Tatsaechliche Abbildung
function draw() {
	Game.ctx.drawImage(background, 0, 0);
	scene.act();
	physik();
	if (mode !== "interface") Game.ctx.fillText("Version 0.26", 1140, 710);
	Game.ctx.drawImage(player1.skin, player1.x, player1.y, 220 * scale, 440 * scale);
	overlay.display();
	item.bar.act();
	Game.ctx.drawImage(image.cursor, cursor.x - 8, cursor.y - 36);
	requestAnimationFrame(draw);
}
// Scripted by Shamenox with a lot of help by Miterosan
