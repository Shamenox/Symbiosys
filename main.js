var Game = {};

// Setup
var player1 = {};
var skin = {};
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

// Canvas-Initialisierung
window.onload = function() {
    var canvas = document.getElementById("Canvas");
    Game.ctx = canvas.getContext("2d");

	setupInput();
	loadImages();
	loadAudio();
	setupSkins();
	setupEvents();
	console.log(event);
	setupPlayer1();
	setupNpcs();
	setupItems();
	setupScenes();
	scene.at = "loading";

	//start drawloop
    draw();
};

// Tatsaechliche Abbildung
function draw() {
	Game.ctx.drawImage(background, 0, 0);
	scene.act();
	event.check();
	physik();
	if (mode !== "interface") Game.ctx.fillText("Version 0.256", 1140, 710);
	Game.ctx.drawImage(player1.skin, player1.x, player1.y, 220 * scale, 440 * scale);
	item.bar.act();
	Game.ctx.drawImage(image.cursor, cursor.x - 8, cursor.y - 36);
	requestAnimationFrame(draw);
}
// Scripted by Shamenox with a lot of help by Miterosan
