var Game = {};

// Setup
var audio = {};
var image = {
	quantity : 0,
	loaded : 0
};
var player1 = {};
var skin = {};
var scene = {};
var npc = {};
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
	up : false,
	left : false,
	down : false,
	right : false,
	use : false,
	back : false,
};
var event = {
	MopBeforeLeaving : false,
	getBirdfood : false
};

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
	setupPlayer1();
	setupNpcs();
	setupScenes();
	scene.at = "loading";

    // Tatsaechliche Abbildung
    function draw() {
		Game.ctx.drawImage(background, 0, 0);
        if (scene[scene.at].background === undefined) scene[scene.at]();
		if (scene[scene.at].background !== undefined) scene.act();
        physik();
        if (scene.at !== "menue" && scene.at !== "loading") Game.ctx.fillText("Version 0.255", 1140, 710);
		Game.ctx.drawImage(player1.skin, player1.x, player1.y, 220 * scale, 440 * scale);
		Game.ctx.drawImage(image.cursor, cursorX - 8, cursorY - 36);
        requestAnimationFrame(draw);
    }
    draw();

};
// Scripted by Shamenox with a lot of help by Miterosan
