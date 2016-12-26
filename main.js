var Game = {};

// Setup

var audio = {};
var image = {};
var player1 = {}
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
var isWalking = false;
var nsfw = false;


function setup_skins(){
	var standartSkin = createSkin();
	for (var i = 0;i <11 ; i++){
		standartSkin.r[i] = image["kiiro"+i+"r"];
	}
	standartSkin.r[11] = image.kiirocr;
	for (var i = 0;i <11 ; i++){
		standartSkin.l[i] = image["kiiro"+i+"l"];
	}
	standartSkin.l[11] = image.kiirocl;
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
        if (scene === "whitescreen") whitescreenF();
        if (scene === "loading") loadingF();
        if (scene === "menue") menueF();
        if (scene === "kiiros room") kiirosroomF();
        if (scene === "desktop") desktopF();
        if (scene === "basestar") basestarF();
        if (scene === "closet") closetF();
        if (scene === "home_floor1") home_floor1F();
        if (scene === "home_floor2") home_floor2F();
        if (scene === "room1") room1F();
        if (scene === "home_floor3") home_floor3F();
		if (scene === "home_floor4") home_floor4F();
		if (scene === "home_floor5") home_floor5F();
        if (scene === "livingroom") livingroomF();
		if (scene === "xx1") xx1F();
        physik();
        if (scene !== "menue")Game.ctx.fillText("Version 0.25", 1140, 710);
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


// Eingabeverarbeitung
function physik() {
console.log(player1.step);
    player1.y -= player1.vy;
    player1.x += player1.vx;
	if (gravity === "true"){
		if (player1.step > 10 && player1.crouch === "false") player1.step = 1;
		if (player1.crouch !== "false" ) player1.step = 11;
		if (player1.dir === "right") player1.skin = skin[clothes].r[player1.step];
		if (player1.dir === "left") player1.skin = skin[clothes].l[player1.step];
		if (player1.y > groundlevel) {
			if (player1.crouch === "jump") player1.crouch = "false";
			player1.vy = 0;
        if (player1.crouch !== "true") player1.y = groundlevel;
    }
		if (player1.y < groundlevel) player1.vy -= 4, player1.crouch = "jump";
		if (player1.vx > 0)player1.dir = "right";
		if (player1.vx < 0)player1.dir = "left";
		if (player1.vx !== 0 && !isWalking) {
			player1.step +=1;
			setTimeout(steppon,100);
			isWalking = true;
			}
		if (player1.vx === 0) player1.step = 0;
		
	}
    if (use === "black") background = image.blackscreen;

}

function steppon(){
	isWalking = false;
}
function normalize() {
    use = "false";
    state = 0;
    for (var i = 0; i < next.length; i++) {
        next[i] = false;
    }
}

function fadeout() {
    use = "black";
    setTimeout(normalize, 500);
}

function delay() {
    state += 1;
    if (!next[state]) normalize();
}

function talk(text, turn) {
    if (turn === 1 && state === 0) state = 1;
    if (state === turn)Game.ctx.fillText(text, player1.x, groundlevel);
    if (next[turn] !== true) setTimeout(delay, 2000 * turn), next[turn] = true;
}

// Raumdaten

function loadingF() {
    background = image.whitescreen;
    if (player1.x > 1280) player1.x = 0;
    if (player1.x < 0) player1.x = 1280;
   Game.ctx.font = "80px Calibri";
   Game.ctx.fillText("Loading... please wait", 300, 200);
    if (state > 74) {
        state = 0;
        scene = "menue";
    }
}

function whitescreenF() {
    background = image.whitescreen;
    if (player1.x > 1280) player1.x = 0;
    if (player1.x < 0) player1.x = 1280;
    if (player1.y > 720) player1.y = 0;
    if (player1.y < 0) player1.y = 720;
}

function menueF() {
    background = image.menue;
   Game.ctx.font = "240px Calibri";
   Game.ctx.beginPath();
   Game.ctx.rect(20, 20, 1240, 680);
   Game.ctx.lineWidth = 7;
   Game.ctx.strokeStyle = 'black';
   Game.ctx.stroke();
   Game.ctx.fillText("Start", 440, 200);
    if (click === true) scene = "kiiros room"
}

function kiirosroomF() {
   Game.ctx.strokeStyle = 'black';
   Game.ctx.fillStyle = "black";
   Game.ctx.font = "24px Calibri";
    scale = 1;
    groundlevel = 220;
    if (player1.x > 1080) player1.x = 1080;
    if (player1.x < 0) player1.x = 0;
    if (use !== "black" || use !== "aboutToSleep") background = image.kiirosroom;
    if (use !== "guitar") audio.theme1.play();

    if (player1.x < 20) {
        if (false)Game.ctx.fillText("I dont want to go outside right now.", 100, 220);
        if (use === "false")Game.ctx.fillText("Leave(E)", 84, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            scene = "home_floor1";
            player1.x = 700;
            use = "false";
        }
    }
    if (player1.x > 200 && player1.x < 400) {
        if (use === "false")Game.ctx.fillText("Use(E)", 350, 220);
        if (use === "true") scene = "desktop";
    }
    if (480 < player1.x && player1.x < 680) {
        if (use === "false")Game.ctx.fillText("Open(E)", 580, 220);
        if (use === "true") use = "intro", scene = "closet";
    }
    if (player1.x > 640 && player1.x < 840) {
        if (use === "false")Game.ctx.fillText("Rest(E)", 840, 220);
        if (use === "true") {
            use = "sleep";
            setTimeout(fadeout, 2000);
        }
        if (use === "sleep") {
            background = image.bouttosleep;
           Game.ctx.fillText("Im so tired... Time to get some sleep.", 880, 220);
            player1.skin = image.blank;
        }
    }
    if (use === "guitar") player1.skin = image.kiiroguitar, Game.ctx.drawImage(image.overlay_guitar, 1092, 75);
    if (player1.x > 940 && player1.x < 1050) {
        if (use === "false")Game.ctx.fillText("Play(E)", 1050, 220);
        if (use === "true") {
            use = "guitar";
            audio.guitar1.play();
            setTimeout(normalize, 17000);
        }
    }
    if (player1.x > 1050)Game.ctx.fillText("Maybe I could go to the park...", 900, 220);
}

function desktopF() {
    theme1.play();
    background = image.desktop;
   Game.ctx.drawImage(image.toolbar, 0, 0);
    player1.x = -200;
   Game.ctx.drawImage(image.basestar, 100, 100);
   Game.ctx.drawImage(image.lnk, 100, 100);
   Game.ctx.fillText("Basestar", 100, 224);
    if (esc === "true") scene = "kiirosroom";
    if (click === true) {
        if (cursorX > 30 && cursorX < 90 && cursorY > 660 && cursorY < 710) scene = "kiiros room", player1.x = 350, gravity = "true";
        if (cursorX > 100 && cursorX < 200 && cursorY > 100 && cursorY < 200) scene = "basestar", player1.x = 600;
    }
}

function basestarF() {
    groundlevel = 2000;
    gravity = "space";
    player1.skin = image.basestar;
    scale = 0.75;
    background = image.space1;
    if (player1.x > 1280) player1.x = 0;
    if (player1.x < 0) player1.x = 1280;
    if (player1.y > 720) player1.y = 0;
    if (player1.y < 0) player1.y = 720;
   Game.ctx.drawImage(image.fenster, 0, 0);
   Game.ctx.fillText("Basestar Simulator.exe", 10, 28);
    if (click === true) {
        if (cursorX > 30 && cursorX < 90 && cursorY > 660 && cursorY < 710) scene = "kiiros room", player1x = 350, gravity = "true";
        if (cursorX > 1250 && cursorX < 1280 && cursorY > 0 && cursorY < 30) scene = "desktop", player1x = -200, gravity = "true";
    }
    if (esc === "true") scene = "desktop";
}

function closetF() {
    audio.theme1.play();
    player1.x = -200;
    background = image.closet;
   Game.ctx.lineWidth = 4;
   Game.ctx.beginPath();
    if (use === "intro")Game.ctx.fillText("Hmmm, I wish I had more outfits...", 300, 40), setTimeout(normalize, 2000);
    if (cursorX < 400 || cursorX > 900)Game.ctx.drawImage(image.lnk, cursorX - 100, cursorY - 110),Game.ctx.fillText("Return", cursorX - 100, cursorY - 46);
    if (click === true) {
        if (cursorX < 400 || cursorX > 900) scene = "kiiros room", player1.x = 580;
        if (cursorX < 600 && cursorX > 460 && cursorY < 220 && cursorY > 80) use = "slot1";
        if (cursorX < 800 && cursorX > 660 && cursorY < 220 && cursorY > 80) use = "slot2";
        if (cursorX < 600 && cursorX > 460 && cursorY < 390 && cursorY > 250) use = "slot3";
        if (cursorX < 800 && cursorX > 660 && cursorY < 390 && cursorY > 250) use = "slot4";
        if (cursorX < 600 && cursorX > 460 && cursorY < 570 && cursorY > 430) use = "slot5";
        if (cursorX < 800 && cursorX > 660 && cursorY < 570 && cursorY > 430) use = "slot6";
    }
    if (cursorX < 600 && cursorX > 460 && cursorY < 220 && cursorY > 80)Game.ctx.rect(460, 80, 140, 140),Game.ctx.fillText("Everyday wear", 460, 60);
    if (cursorX < 800 && cursorX > 660 && cursorY < 220 && cursorY > 80)Game.ctx.rect(660, 80, 140, 140),Game.ctx.fillText("Empty", 660, 60);
    if (cursorX < 600 && cursorX > 460 && cursorY < 390 && cursorY > 250)Game.ctx.rect(460, 250, 140, 140), Game.ctx.fillText("Empty", 460, 120);
    if (cursorX < 800 && cursorX > 660 && cursorY < 390 && cursorY > 250)Game.ctx.rect(660, 250, 140, 140), Game.ctx.fillText("Empty", 660, 120);
    if (cursorX < 600 && cursorX > 460 && cursorY < 570 && cursorY > 430)Game.ctx.rect(460, 430, 140, 140),Game.ctx.fillText("Empty", 460, 410);
    if (cursorX < 800 && cursorX > 660 && cursorY < 570 && cursorY > 430)Game.ctx.rect(660, 430, 140, 140), Game.ctx.fillText("Sketched outfit", 660, 410);
    Game.ctx.stroke();

    if (use === "slot1") {
        setTimeout(normalize, 2000);
        if (clothes === "main") Game.ctx.fillText("Im already wearing that.", 300, 40)
        if (clothes !== "main") {
            clothes = "main";
        }
    }
    if (use === "slot6") {
        setTimeout(normalize, 2000);
        if (clothes === "sketched") Game.ctx.fillText("Im already wearing that.", 300, 40)
        if (clothes !== "sketched") {
            clothes = "sketched";
        }
    }


    if (use === "slot2") setTimeout(normalize, 2000), Game.ctx.fillText("There´s nothing in the closet...", 300, 40);
    if (use === "slot3") setTimeout(normalize, 2000), Game.ctx.fillText("There´s nothing in the closet...", 300, 40);
    if (use === "slot4") setTimeout(normalize, 2000), Game.ctx.fillText("There´s nothing in the closet...", 300, 40);
    if (use === "slot5") setTimeout(normalize, 2000), Game.ctx.fillText("There´s nothing in the closet...", 300, 40);
}

function home_floor1F() {
    groundlevel = 180;
    scale = 0.9;
    audio.theme1.play();
    background = image.home_floor1;
    Game.ctx.drawImage(image.midori0r, 0, groundlevel, scale * 220, scale * 440);
    if (player1.x < 0) player1.x = 1280, scene = "home_floor2";
    if (player1.x > 260 && player1.x < 410) {
        if (player1.crouch === "false") Game.ctx.fillText("Downstairs(S)", 300, groundlevel);
        if (player1.crouch === "true") scene = "home_floor3", player1.x = 600;
    }
    if (player1.x > 710 && player1.x < 850) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 800, groundlevel);
        if (use === "true") use = "entering";
        if (use === "entering") {
            scene = "kiiros room";
            player1.x = 0;
            player1.y = 220;
            use = "false";
        }
    }
    if (player1.x > 10 && player1.x < 180) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 120, groundlevel);
        if (use === "true") use = "talk";
        if (use === "entering") {
            scene = "midoris room";
            player1.x = 0;
            player1.y = 220;
            use = "false";
        }
        if (use === "abandoned") {
            Game.ctx.fillText("Midori seems to be absent right now...", 100, groundlevel);
            setTimeout(normalize, 1000);
        }
        if (use === "talk") {
            talk("Midori: Hi Sisterheart", 1);
            talk("Kiiro: Hi Midori, im looking for something. May i take a look for it in your room?", 2);
            talk("Midori: No, you dont wanna go in there right now...", 3);
            talk("Kiiro: Why? Whats going on?", 4);
            talk("Midori: Im... busy. You just dont want to be in there right now, trust me!", 5);
        }
    }
    if (player1.x > 990) player1.x = 990;
}

function home_floor2F() {
    background = image.home_floor2;
    scale = 0.9;
    groundlevel = 180;
    audio.theme1.play();
    if (player1.x < 100) player1.x = 100;
    if (player1.x > 500 && player1.x < 650) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 580, groundlevel);
        if (use === "true") use = "entering";
        if (use === "entering") {
            scene = "room1";
            player1.x = 0;
            player1.y = 220;
            use = "false";
        }
    }
    if (player1.x > 1180) player1.x = 0, scene = "home_floor1";
}

function room1F() {
    background = image.room1;
    scale = 1;
    groundlevel = 220;
    audio.theme1.play();
    if (player1.x < 0) player1.x = 0;
    if (player1.x < 20) {
        if (false) Game.ctx.fillText("I dont want to go outside right now.", 100, 220);
        if (use === "false") Game.ctx.fillText("Leave(E)", 84, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            scene = "home_floor2";
            player1.x = 520;
            use = "false";
        }
    }
    if (player1.x > 1080) player1.x = 1080;
}

function home_floor3F() {
    background = image.home_floor3;
    scale = 1;
    groundlevel = 220;
    audio.theme1.play();
    if (player1.x < 0) scene = "home_floor4", player1.x = 100;
    if (player1.x > 460 && player1.x < 640) {
        if (player1.crouch !== "jump") Game.ctx.fillText("Upstairs(W)", 500, 220);
        if (player1.crouch === "jump") use = "stairs";
        if (use === "stairs") scene = "home_floor1", player1.x = 300, use = "false";
    }
    if (player1.x > 720 && player1.x < 800) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 800, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            Game.ctx.fillText("Its locked?...", 800, 220);
            setTimeout(normalize, 1000);
        }
    }
    if (player1.x > 1000) Game.ctx.fillText("I dont want to go outside right now...", 900, 220);
    if (player1.x > 1080) player1.x = 1080;
}

function livingroomF() {
    background = image.livingroom;
    scale = 1.25;
    groundlevel = 160;
    audio.theme1.play();
    Game.ctx.drawImage(image.riyu0r_sketched, 250, 130);
    if (player1.x < 0) player1.x = 0;
    if (player1.x > 250 && player1.x < 470) {
        if (use === "false") Game.ctx.fillText("Talk(E)", 300, 220);
        if (use === "true") use = "talk";
        if (use === "talk") {
            talk("Kiiro: Hi Riyu!", 1);
            talk("Riyu: Hey Kiiro, i was wondering if you would like to come over", 2);
            talk("Kiiro: Of course, but we will have to wait until the outside world is finnished...", 3);
            talk("Riyu: Yeah, they should really hurry up...", 4);
        }
    }
    if (player1.x > 1180) scene = "home_floor4", player1.x = 200;
}
function home_floor4F(){
	background = image.home_floor4;
	scale = 1;
	audio.theme1.play();
	groundlevel = 220;
	if (player1.x<0) scene = "home_floor3", player1.x =200;
	if (player1.x.between(200,400)) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 800, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            player1.x = 1100;
            scene = "livingroom";
			use = "false";
		}
	}
	if (player1.x.between(900,1100)) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 800, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            Game.ctx.fillText("Its locked?...", 800, 220);
            setTimeout(normalize, 1000);
       	}
	}
	if (player1.x>1280) scene = "home_floor5", player1.x =100;
}
function home_floor5F(){
	background = image.home_floor5;
	scale = 1;
	audio.theme1.play();
	groundlevel = 220;
	if (player1.x<0) scene = "home_floor4", player1.x = 1100;
	if (player1.x.between(250,450)) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 800, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            Game.ctx.fillText("Its locked?...", 800, 220);
            setTimeout(normalize, 1000);
        }
	}
	if (player1.x>900 && scene === "home_floor5") scene = "home_floor3", player1.x = 100;
}
function xx1F(){
	background = image.whitescreen;
	player1.skin = image.blank;
	use = "love";
	gravity = "octopode";
	function frame(action){
		if (action === "intro")
		state +=1;
		if (state>10) state = 0;
		setTimeout(frame,100)
	}
	
}
// Scripted by Shamenox with a lot of help by Miterosan