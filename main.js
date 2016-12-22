// Setup
var ctx;
var scene = "loading";
var scale = 1;
var state = 0;
var next = new Array(1);
var background;
var cursorX
var cursorY
var clothes = "main";
var use = "false";
var groundlevel = 220;
var l = 0;
var gravity = "true";
var esc = "false";
var click = false;

steps = new Audio("ress/audio/steps.mp3");
guitar1 = new Audio("ress/audio/guitar1.mp3");
theme1s = new Audio("ress/audio/theme1s.mp3");
theme1 = new Audio("ress/audio/theme1l.mp3");
theme2 = new Audio("ress/audio/theme2.mp3");

var image = {};

function createImage(path) {
    var img = new Image();
    img.src = path;
    state += 1;
    console.log(state);
    return img;
}

Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};

function loadimages() {
    image.menue = createImage("ress/menue.png");
    image.cursor = createImage("ress/cursor.png");
    image.blank = createImage("ress/blank.png");
    image.whitescreen = createImage("ress/whitescreen.png");
    image.blackscreen = createImage("ress/blackscreen.png");
    image.lnk = createImage("ress/lnk.png");
    image.bouttosleep = createImage("ress/bouttosleep.png");
    image.kiiro1r_sketched = createImage("ress/sketched/1r.png");
    image.kiiro2r_sketched = createImage("ress/sketched/2r.png");
    image.kiiro3r_sketched = createImage("ress/sketched/3r.png");
    image.kiiro4r_sketched = createImage("ress/sketched/4r.png");
    image.kiiro5r_sketched = createImage("ress/sketched/5r.png");
    image.kiiro6r_sketched = createImage("ress/sketched/6r.png");
    image.kiiro7r_sketched = createImage("ress/sketched/7r.png");
    image.kiiro8r_sketched = createImage("ress/sketched/8r.png");
    image.kiiro9r_sketched = createImage("ress/sketched/9r.png");
    image.kiiro10r_sketched = createImage("ress/sketched/10r.png");
    image.kiiro1l_sketched = createImage("ress/sketched/1l.png");
    image.kiiro2l_sketched = createImage("ress/sketched/2l.png");
    image.kiiro3l_sketched = createImage("ress/sketched/3l.png");
    image.kiiro4l_sketched = createImage("ress/sketched/4l.png");
    image.kiiro5l_sketched = createImage("ress/sketched/5l.png");
    image.kiiro6l_sketched = createImage("ress/sketched/1l.png");
    image.kiiro7l_sketched = createImage("ress/sketched/2l.png");
    image.kiiro8l_sketched = createImage("ress/sketched/3l.png");
    image.kiiro9l_sketched = createImage("ress/sketched/4l.png");
    image.kiiro10l_sketched = createImage("ress/sketched/5l.png");
    image.kiiro0l_sketched = createImage("ress/sketched/0l.png");
    image.kiiro0r_sketched = createImage("ress/sketched/0r.png");
    image.kiiro0l_cestodian_sketched = createImage("ress/sketched/0l.png");
    image.kiiro0r_cestodian_sketched = createImage("ress/sketched/0r.png");
    image.kiiro1r = createImage("ress/standard/1r.png");
    image.kiiro2r = createImage("ress/standard/2r.png");
    image.kiiro3r = createImage("ress/standard/3r.png");
    image.kiiro4r = createImage("ress/standard/4r.png");
    image.kiiro5r = createImage("ress/standard/5r.png");
    image.kiiro6r = createImage("ress/standard/6r.png");
    image.kiiro7r = createImage("ress/standard/7r.png");
    image.kiiro8r = createImage("ress/standard/8r.png");
    image.kiiro9r = createImage("ress/standard/9r.png");
    image.kiiro10r = createImage("ress/standard/10r.png");
    image.kiiro1l = createImage("ress/standard/1l.png");
    image.kiiro2l = createImage("ress/standard/2l.png");
    image.kiiro3l = createImage("ress/standard/3l.png");
    image.kiiro4l = createImage("ress/standard/4l.png");
    image.kiiro5l = createImage("ress/standard/5l.png");
    image.kiiro6l = createImage("ress/standard/6l.png");
    image.kiiro7l = createImage("ress/standard/7l.png");
    image.kiiro8l = createImage("ress/standard/8l.png");
    image.kiiro9l = createImage("ress/standard/9l.png");
    image.kiiro10l = createImage("ress/standard/10l.png");
    image.kiirocr = createImage("ress/standard/cr.png");
    image.kiirocl = createImage("ress/standard/cl.png");
    image.kiiro0l = createImage("ress/standard/0l.png");
    image.kiiro0r = createImage("ress/standard/0r.png");
    image.kiiro0l_cestodian = createImage("ress/standard/0l.png");
    image.kiiro0r_cestodian = createImage("ress/standard/0r.png");
    image.midori0l = createImage("ress/midori/0l.png");
    image.midori0r = createImage("ress/midori/0r.png");
    image.riyu0r_sketched = createImage("ress/riyu/0r.png");
    image.kiiroguitar = createImage("ress/kiiro guitar sprite.png");
    image.overlay_guitar = createImage("ress/emptyguitar overlay.png");
    image.desktop = createImage("ress/desktop.png");
    image.toolbar = createImage("ress/toolbar.png");
    image.fenster = createImage("ress/fenster.png");
    image.basestar = createImage("ress/sprite_basestar.png");
    image.space1 = createImage("ress/space1.png");
    image.kiirosroom = createImage("ress/kiiros room sketch.png");
    image.closet = createImage("ress/kiiros closet sketch.png");
    image.kiirosroom_door = createImage("ress/kiirosroom door overlay.png");
    image.home_floor1 = createImage("ress/home_ups1.png");
    image.home_floor2 = createImage("ress/home_ups2.png");
    image.room1 = createImage("ress/room1.png");
    image.home_floor3 = createImage("ress/home_dns1.png");
    image.livingroom = createImage("ress/living room.png");

    console.log(image);
}

var player1 = {};

function setup_player1() {
    player1.skin = image.kiiro0l;
    player1.right = image.kiiro0r;
    player1.left = image.kiiro0l;
    player1.dir = "left";
    player1.step = 1;
    player1.step1r = image.kiiro1r;
    player1.step2r = image.kiiro2r;
    player1.step3r = image.kiiro3r;
    player1.step4r = image.kiiro4r;
    player1.step5r = image.kiiro5r;
    player1.step6r = image.kiiro6r;
    player1.step7r = image.kiiro7r;
    player1.step8r = image.kiiro8r;
    player1.step9r = image.kiiro9r;
    player1.step10r = image.kiiro10r;
    player1.step1l = image.kiiro1l;
    player1.step2l = image.kiiro2l;
    player1.step3l = image.kiiro3l;
    player1.step4l = image.kiiro4l;
    player1.step5l = image.kiiro5l;
    player1.step6l = image.kiiro6l;
    player1.step7l = image.kiiro7l;
    player1.step8l = image.kiiro8l;
    player1.step9l = image.kiiro9l;
    player1.step10l = image.kiiro10l;
    player1.crouchr = image.kiirocr;
    player1.crouchl = image.kiirocl;
    player1.crouch = "false";
    player1.y = 200;
    player1.x = 400;
    player1.vy = 0;
    player1.vx = 0;
}


// Canvas-Initialisierung
window.onload = function() {
    var canvas = document.getElementById("Canvas");
    ctx = canvas.getContext("2d");
    loadimages();
    setup_player1();
    background = new Image();
    background.src = "ress/whitescreen.png";
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(player1.skin, player1.x, player1.y);
    ctx.drawImage(image.cursor, cursorX, cursorY);


    // Tatsächliche Abbildung
    function draw() {
        ctx.drawImage(background, 0, 0);
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
        if (scene === "livingroom") livingroomF();
        physik();
        if (scene !== "menue") ctx.fillText("Version 0.241", 1140, 710);
        ctx.drawImage(player1.skin, player1.x, player1.y, 220 * scale, 440 * scale)
        ctx.drawImage(image.cursor, cursorX - 8, cursorY - 36);
        console.log(click);
        requestAnimationFrame(draw);
    }

    draw();


    // Eingabeverwaltung
    addEventListener("keydown", function(w) {
        if (w.keyCode === 87 && player1.y === groundlevel && gravity === "true") player1.vy = 30 * scale, player1.y -= 40;
        if (w.keyCode === 83 && gravity === "true") player1.y = groundlevel + 100, player1.crouch = "true";
        if (w.keyCode === 65 && gravity === "true") {
            player1.vx = -10 * scale;
            if (player1.x > 0) steps.play();
        }
        if (w.keyCode === 68 && gravity === "true") {
            player1.vx = +10 * scale;
            if (player1.x > 0) steps.play();
        }
        if (w.keyCode === 87 && gravity === "space") player1.vy += 2;
        if (w.keyCode === 83 && gravity === "space") player1.vy -= 2;
        if (w.keyCode === 65 && gravity === "space") player1.vx -= 2;
        if (w.keyCode === 68 && gravity === "space") player1.vx += 2;
        if (w.keyCode === 69) use = "true";
        if (w.keycode === 27) esc = "true";
    }, false);
    addEventListener("keyup", function(w) {
        if (w.keyCode === 83 && gravity === "true") player1.crouch = "false";
        if (w.keyCode === 65 && gravity === "true") player1.vx = 0;
        if (w.keyCode === 68 && gravity === "true") player1.vx = 0;
        if (w.keyCode === 69 && use === "true") use = "false";
        if (w.keycode === 27) esc = "false";
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
    if (player1.y < groundlevel && gravity === "true") player1.vy -= 4, player1.crouch = "jump";
    if (player1.y > groundlevel && gravity === "true") {
        if (player1.crouch === "jump") player1.crouch = "false";
        player1.vy = 0;
        if (player1.crouch !== "true") player1.y = groundlevel;
    }
    player1.y -= player1.vy;
    player1.x += player1.vx;
    if (player1.vx === 0 && gravity === "true" && use === "false" || player1.vx === 0 && gravity === "true" && use === "talk") {
        if (player1.dir === "right") player1.skin = player1.right;
        if (player1.dir === "left") player1.skin = player1.left;
    }
	if (gravity === "true"){
		if (player1.vx > 0) player1.dir = "right", player1.step += 1;
		if (player1.vx < 0) player1.dir = "left", player1.step += 1;
		if (player1.step > 50) player1.step = 1;
		//Laufanimation
		if (player1.vx > 0 && player1.step < 6) player1.skin = player1.step1r;
		if (player1.vx > 0 && player1.step.between(5,10)) player1.skin = player1.step2r;
		if (player1.vx > 0 && player1.step.between(10,15)) player1.skin = player1.step3r;
		if (player1.vx > 0 && player1.step.between(15,20)) player1.skin = player1.step4r;
		if (player1.vx > 0 && player1.step.between(20,25)) player1.skin = player1.step5r;
		if (player1.vx > 0 && player1.step.between(25,30)) player1.skin = player1.step6r;
		if (player1.vx > 0 && player1.step.between(30,35)) player1.skin = player1.step7r;
		if (player1.vx > 0 && player1.step.between(35,40)) player1.skin = player1.step8r;
		if (player1.vx > 0 && player1.step.between(40,45)) player1.skin = player1.step9r;
		if (player1.vx > 0 && player1.step.between(50,51)) player1.skin = player1.step10r;
		if (player1.vx < 0 && player1.step < 6) player1.skin = player1.step1l;
		if (player1.vx < 0 && player1.step.between(5,10)) player1.skin = player1.step2l;
		if (player1.vx < 0 && player1.step.between(10,15)) player1.skin = player1.step3l;
		if (player1.vx < 0 && player1.step.between(15,20)) player1.skin = player1.step4l;
		if (player1.vx < 0 && player1.step.between(20,25)) player1.skin = player1.step5l;
		if (player1.vx < 0 && player1.step.between(25,30)) player1.skin = player1.step6l;
		if (player1.vx < 0 && player1.step.between(30,35)) player1.skin = player1.step7l;
		if (player1.vx < 0 && player1.step.between(35,40)) player1.skin = player1.step8l;
		if (player1.vx < 0 && player1.step.between(40,45)) player1.skin = player1.step9l;
		if (player1.vx < 0 && player1.step.between(50,51)) player1.skin = player1.step10l;
		//Sprung/Hockepose
		if (player1.crouch === "true" && player1.dir === "right" || player1.crouch === "jump" && player1.dir === "right") player1.skin = player1.crouchr;
		if (player1.crouch === "true" && player1.dir === "left" || player1.crouch === "jump" && player1.dir === "left") player1.skin = player1.crouchl;
		//Bildverhalten
	}
    if (use === "black") background = image.blackscreen;

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
    if (state === turn) ctx.fillText(text, player1.x, groundlevel);
    if (next[turn] !== true) setTimeout(delay, 2000 * turn), next[turn] = true;
}

// Raumdaten

function loadingF() {
    background = image.whitescreen;
    if (player1.x > 1280) player1.x = 0;
    if (player1.x < 0) player1.x = 1280;
    ctx.font = "80px Calibri";
    ctx.fillText("Loading... please wait", 300, 200);
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
    ctx.font = "240px Calibri";
    ctx.beginPath();
    ctx.rect(20, 20, 1240, 680);
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillText("Start", 440, 200);
    if (click === true) scene = "kiiros room"
}

function kiirosroomF() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.font = "24px Calibri";
    scale = 1;
    groundlevel = 220;
    if (player1.x > 1080) player1.x = 1080;
    if (player1.x < 0) player1.x = 0;
    if (use !== "black" || use !== "aboutToSleep") background = image.kiirosroom;
    if (use !== "guitar") theme2.play();

    if (player1.x < 20) {
        if (false) ctx.fillText("I dont want to go outside right now.", 100, 220);
        if (use === "false") ctx.fillText("Leave(E)", 84, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            scene = "home_floor1";
            player1.x = 700;
            use = "false";
        }
    }
    if (player1.x > 200 && player1.x < 400) {
        if (use === "false") ctx.fillText("Use(E)", 350, 220);
        if (use === "true") scene = "desktop";
    }
    if (480 < player1.x && player1.x < 680) {
        if (use === "false") ctx.fillText("Open(E)", 580, 220);
        if (use === "true") use = "intro", scene = "closet";
    }
    if (player1.x > 640 && player1.x < 840) {
        if (use === "false") ctx.fillText("Rest(E)", 840, 220);
        if (use === "true") {
            use = "sleep";
            setTimeout(fadeout, 2000);
        }
        if (use === "sleep") {
            background = image.bouttosleep;
            ctx.fillText("Im so tired... Time to get some sleep.", 880, 220);
            player1.skin = image.blank;
        }
    }
    if (use === "guitar") player1.skin = image.kiiroguitar, ctx.drawImage(image.overlay_guitar, 1092, 75);
    if (player1.x > 940 && player1.x < 1050) {
        if (use === "false") ctx.fillText("Play(E)", 1050, 220);
        if (use === "true") {
            use = "guitar";
            guitar1.play();
            setTimeout(normalize, 17000);
        }
    }
    if (player1.x > 1050) ctx.fillText("Maybe I could go to the park...", 900, 220);
}

function desktopF() {
    theme2.play();
    background = image.desktop;
    ctx.drawImage(image.toolbar, 0, 0);
    player1.x = -200;
    ctx.drawImage(image.basestar, 100, 100);
    ctx.drawImage(image.lnk, 100, 100);
    ctx.fillText("Basestar", 100, 224);
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
    ctx.drawImage(image.fenster, 0, 0);
    ctx.fillText("Basestar Simulator.exe", 10, 28);
    if (click === true) {
        if (cursorX > 30 && cursorX < 90 && cursorY > 660 && cursorY < 710) scene = "kiiros room", player1x = 350, gravity = "true";
        if (cursorX > 1250 && cursorX < 1280 && cursorY > 0 && cursorY < 30) scene = "desktop", player1x = -200, gravity = "true";
    }
    if (esc === "true") scene = "desktop";
}

function closetF() {
    theme2.play();
    player1.x = -200;
    background = image.closet;
    ctx.lineWidth = 4;
    ctx.beginPath();
    if (use === "intro") ctx.fillText("Hmmm, I wish I had more outfits...", 300, 40), setTimeout(normalize, 2000);
    if (cursorX < 400 || cursorX > 900) ctx.drawImage(image.lnk, cursorX - 100, cursorY - 110), ctx.fillText("Return", cursorX - 100, cursorY - 46);
    if (click === true) {
        if (cursorX < 400 || cursorX > 900) scene = "kiiros room", player1.x = 580;
        if (cursorX < 600 && cursorX > 460 && cursorY < 220 && cursorY > 80) use = "slot1";
        if (cursorX < 800 && cursorX > 660 && cursorY < 220 && cursorY > 80) use = "slot2";
        if (cursorX < 600 && cursorX > 460 && cursorY < 390 && cursorY > 250) use = "slot3";
        if (cursorX < 800 && cursorX > 660 && cursorY < 390 && cursorY > 250) use = "slot4";
        if (cursorX < 600 && cursorX > 460 && cursorY < 570 && cursorY > 430) use = "slot5";
        if (cursorX < 800 && cursorX > 660 && cursorY < 570 && cursorY > 430) use = "slot6";
    }
    if (cursorX < 600 && cursorX > 460 && cursorY < 220 && cursorY > 80) ctx.rect(460, 80, 140, 140), ctx.fillText("Everyday wear", 460, 60);
    if (cursorX < 800 && cursorX > 660 && cursorY < 220 && cursorY > 80) ctx.rect(660, 80, 140, 140), ctx.fillText("Empty", 660, 60);
    if (cursorX < 600 && cursorX > 460 && cursorY < 390 && cursorY > 250) ctx.rect(460, 250, 140, 140), ctx.fillText("Empty", 460, 120);
    if (cursorX < 800 && cursorX > 660 && cursorY < 390 && cursorY > 250) ctx.rect(660, 250, 140, 140), ctx.fillText("Empty", 660, 120);
    if (cursorX < 600 && cursorX > 460 && cursorY < 570 && cursorY > 430) ctx.rect(460, 430, 140, 140), ctx.fillText("Empty", 460, 410);
    if (cursorX < 800 && cursorX > 660 && cursorY < 570 && cursorY > 430) ctx.rect(660, 430, 140, 140), ctx.fillText("Sketched outfit", 660, 410);
    ctx.stroke();

    if (use === "slot1") {
        setTimeout(normalize, 2000);
        if (clothes === "main") ctx.fillText("Im already wearing that.", 300, 40)
        if (clothes !== "main") {
            player1.skin = image.kiiro0r;
            player1.right = image.kiiro0r;
            player1.left = image.kiiro0l;
            player1.step1r = image.kiiro1r;
            player1.step2r = image.kiiro2r;
            player1.step3r = image.kiiro3r;
            player1.step4r = image.kiiro4r;
            player1.step5r = image.kiiro5r;
            player1.step6r = image.kiiro6r;
            player1.step7r = image.kiiro7r;
            player1.step8r = image.kiiro8r;
            player1.step9r = image.kiiro9r;
            player1.step10r = image.kiiro10r;
            player1.step1l = image.kiiro1l;
            player1.step2l = image.kiiro2l;
            player1.step3l = image.kiiro3l;
            player1.step4l = image.kiiro4l;
            player1.step5l = image.kiiro5l;
            player1.step6l = image.kiiro6l;
            player1.step7l = image.kiiro7l;
            player1.step8l = image.kiiro8l;
            player1.step9l = image.kiiro9l;
            player1.step10l = image.kiiro10l;
            player1.crouchr = image.kiirocr;
            player1.crouchl = image.kiirocl;
            clothes = "main";
        }
    }
    if (use === "slot6") {
        setTimeout(normalize, 2000);
        if (clothes === "sketched") ctx.fillText("Im already wearing that.", 300, 40)
        if (clothes !== "sketched") {
            player1.skin = image.kiiro0r_sketched;
            player1.right = image.kiiro0r_sketched;
            player1.left = image.kiiro0l_sketched;
            player1.step1r = image.kiiro1r_sketched;
            player1.step2r = image.kiiro2r_sketched;
            player1.step3r = image.kiiro3r_sketched;
            player1.step4r = image.kiiro4r_sketched;
            player1.step5r = image.kiiro5r_sketched;
            player1.step6r = image.kiiro6r_sketched;
            player1.step7r = image.kiiro7r_sketched;
            player1.step8r = image.kiiro8r_sketched;
            player1.step9r = image.kiiro9r_sketched;
            player1.step10r = image.kiiro10r_sketched;
            player1.step1l = image.kiiro1l_sketched;
            player1.step2l = image.kiiro2l_sketched;
            player1.step3l = image.kiiro3l_sketched;
            player1.step4l = image.kiiro4l_sketched;
            player1.step5l = image.kiiro5l_sketched;
            player1.step6l = image.kiiro6l_sketched;
            player1.step7l = image.kiiro7l_sketched;
            player1.step8l = image.kiiro8l_sketched;
            player1.step9l = image.kiiro9l_sketched;
            player1.step10l = image.kiiro10l_sketched;
            player1.crouchr = image.kiiro1r_sketched;
            player1.crouchl = image.kiiro1l_sketched;
            clothes = "sketched";
        }
    }


    if (use === "slot2") setTimeout(normalize, 2000), ctx.fillText("There´s nothing in the closet...", 300, 40);
    if (use === "slot3") setTimeout(normalize, 2000), ctx.fillText("There´s nothing in the closet...", 300, 40);
    if (use === "slot4") setTimeout(normalize, 2000), ctx.fillText("There´s nothing in the closet...", 300, 40);
    if (use === "slot5") setTimeout(normalize, 2000), ctx.fillText("There´s nothing in the closet...", 300, 40);
}

function home_floor1F() {
    groundlevel = 180;
    scale = 0.9;
    theme2.play();
    background = image.home_floor1;
    ctx.drawImage(image.midori0r, 0, groundlevel, scale * 220, scale * 440);
    if (player1.x < 0) player1.x = 1280, scene = "home_floor2";
    if (player1.x > 260 && player1.x < 410) {
        if (player1.crouch === "false") ctx.fillText("Downstairs(S)", 300, groundlevel);
        if (player1.crouch === "true") scene = "home_floor3", player1.x = 600;
    }
    if (player1.x > 710 && player1.x < 850) {
        if (use === "false") ctx.fillText("Enter(E)", 800, groundlevel);
        if (use === "true") use = "entering";
        if (use === "entering") {
            scene = "kiiros room";
            player1.x = 0;
            player1.y = 220;
            use = "false";
        }
    }
    if (player1.x > 10 && player1.x < 180) {
        if (use === "false") ctx.fillText("Enter(E)", 120, groundlevel);
        if (use === "true") use = "talk";
        if (use === "entering") {
            scene = "midoris room";
            player1.x = 0;
            player1.y = 220;
            use = "false";
        }
        if (use === "abandoned") {
            ctx.fillText("Midori seems to be absent right now...", 100, groundlevel);
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
    theme2.play();
    if (player1.x < 100) player1.x = 100;
    if (player1.x > 500 && player1.x < 650) {
        if (use === "false") ctx.fillText("Enter(E)", 580, groundlevel);
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
    theme2.play();
    if (player1.x < 0) player1.x = 0;
    if (player1.x < 20) {
        if (false) ctx.fillText("I dont want to go outside right now.", 100, 220);
        if (use === "false") ctx.fillText("Leave(E)", 84, 220);
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
    theme2.play();
    if (player1.x < 0) scene = "livingroom", player1.x = 1100;
    if (player1.x > 460 && player1.x < 640) {
        if (player1.crouch !== "jump") ctx.fillText("Upstairs(W)", 500, 220);
        if (player1.crouch === "jump") use = "stairs";
        if (use === "stairs") scene = "home_floor1", player1.x = 300, use = "false";
    }
    if (player1.x > 720 && player1.x < 800) {
        if (use === "false") ctx.fillText("Enter(E)", 800, 220);
        if (use === "true") use = "leaving";
        if (use === "leaving") {
            ctx.fillText("Its locked?...", 800, 220);
            setTimeout(normalize, 1000);
        }
    }
    if (player1.x > 1000) ctx.fillText("I dont want to go outside right now...", 900, 220);
    if (player1.x > 1080) player1.x = 1080;
}

function livingroomF() {
    background = image.livingroom;
    scale = 1.25;
    groundlevel = 160;
    theme2.play();
    ctx.drawImage(image.riyu0r_sketched, 250, 130);
    if (player1.x < 0) player1.x = 0;
    if (player1.x > 250 && player1.x < 470) {
        if (use === "false") ctx.fillText("Talk(E)", 300, 220);
        if (use === "true") use = "talk";
        if (use === "talk") {
            talk("Kiiro: Hi Riyu!", 1);
            talk("Riyu: Hey Kiiro, i was wondering if you would like to come over", 2);
            talk("Kiiro: Of course, but we will have to wait until the outside world is finnished...", 3);
            talk("Riyu: Yeah, they should really hurry up...", 4);
        }
    }
    if (player1.x > 1180) scene = "home_floor3", player1.x = 0;
}
// Scripted by Shamenox with a lot of help by Miterosan