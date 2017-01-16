function createScene (options) {
	//declaration, bg, theme, font, edgeL, edgeR, ground, scaling, gamemode
	var neueszene = {};
	neueszene.background = image[options.bg];
	if (options.theme !== "none") neueszene.theme = audio[options.theme];
	if (options.theme === "none") neueszene.theme = "none";
	neueszene.font = options.font;
	neueszene.edgeL = options.edgeL;
	neueszene.edgeR = options.edgeR;
	neueszene.groundlevel = options.ground;
	neueszene.scale = options.scaling;
	neueszene.mode = options.gamemode;
	scene[options.name] = neueszene;
}

function setupScenes () {
scene.act = function(){
	scene[scene.at].font();
	mode = scene[scene.at].mode;
	background = scene[scene.at].background;
	if (scene[scene.at].theme !== "none") scene[scene.at].theme.play();
	groundlevel = scene[scene.at].groundlevel;
	scale = scene[scene.at].scale;
	if (!Number.isInteger(scene[scene.at].edgeL) && player1.x < 0) player1.x = 1100, scene.at = scene[scene.at].edgeL;
	if (!Number.isInteger(scene[scene.at].edgeR) && player1.x > 1280) player1.x = 0, scene.at = scene[scene.at].edgeR;
	if (Number.isInteger(scene[scene.at].edgeL) && player1.x < scene[scene.at].edgeL) player1.x = scene[scene.at].edgeL;
	if (Number.isInteger(scene[scene.at].edgeR) && player1.x > scene[scene.at].edgeR) player1.x = scene[scene.at].edgeR;
	if (scene[scene.at].events !== undefined) scene[scene.at].events();
}

createScene({ name: "loading",
	bg: "whitescreen",
	theme: "none",
	font: labelFont,
	edgeL: 0,
	edgeR: 1280,
	ground: 220,
	scaling: 1,
	gamemode: "interface"});
scene.loading.events = function() {
	Game.ctx.fillText("Loading... please wait", 200, 200);
	Game.ctx.rect(40,400,1200,100);
	Game.ctx.fillStyle = "yellow";
	Game.ctx.fillRect(50,410,1180*(image.loaded/image.quantity),80);
	Game.ctx.rect(50,410,1180*(image.loaded/image.quantity),80);
	Game.ctx.stroke();
}

createScene({ name: "whitescreen",
	bg: "whitescreen",
	theme: "none",
	font: labelFont,
	edgeL: 0,
	edgeR: 1280,
	ground: 220,
	scaling: 1,
	gamemode: "adventure"});

createScene({ name: "menue",
		bg: "whitescreen",
		theme: "none",
		font: labelFont,
		edgeL: 0,
		edgeR: 1280,
		ground: 220,
		scaling: 1,
		gamemode: "interface"});
scene.menue.events = function() {
    button(400, 100, 480, 200, "Start", "yellow", function(){scene.at = "kiirosroom"})
}

createScene({ name: "kiirosroom",
		bg: "kiirosroom",
		theme: "theme1",
		font: standartFont,
		edgeL: 0,
		edgeR: 1080,
		ground: 220,
		scaling: 1,
		gamemode: "adventure"});
scene.kiirosroom.events = function() {
	door(0,"home_upstairs1",700,"Leave",event.MopBeforeLeaving,"Wait! I wanted to try out that cool song on guitar.");
	door(300,"desktop",-200,"Use");
	door(580,"closet",-200,"Closet");
    if (player1.x > 640 && player1.x < 840) {
        if (use === "false")Game.ctx.fillText("Rest(E)", 840, 220);
        if (use === "true") {
            use = "sleep";
            setTimeout(fadeout, 2000);
        }
        if (use === "sleep") {
			changeSkin("blank");
            Game.ctx.drawImage(image.bouttosleep, 0, 0);
            Game.ctx.fillText("Im so tired... Time to get some sleep.", 880, 220);
        }
    }
    if (player1.x > 940 && player1.x < 1050) {
        if (use === "false")Game.ctx.fillText("Play(E)", 1050, 220);
        if (use === "true") {
            use = "guitar";
            audio.guitar1.play();
            setTimeout(normalize, 17000,"skin");
        }
    }
	if (use === "guitar") {
		event.MopBeforeLeaving = true;
		changeSkin("kiiro_guitar");
		Game.ctx.drawImage(image.overlay_guitar, 1092, 75);
	}
    if (player1.x > 1050)Game.ctx.fillText("Maybe I could go to the park...", 900, 220);
}

createScene({ name: "desktop",
		bg: "desktop",
		theme: "theme1",
		font: standartFont,
		edgeL: 0,
		edgeR: 1280,
		ground: 220,
		scaling: 1,
		gamemode: "interface"});
scene.desktop.events = function() {
    Game.ctx.drawImage(image.toolbar, 0, 0);
    Game.ctx.drawImage(image.basestar, 100, 100);
    Game.ctx.drawImage(image.lnk, 100, 100);
	Game.ctx.fillText("Basestar", 100, 224);
	Game.ctx.drawImage(image.trollface,300,100)
	Game.ctx.drawImage(image.lnk, 300, 100);
    Game.ctx.fillText("Unlock Everything", 300, 224);
    if (key.back) scene.at = "kiirosroom";
    if (click === true) {
        if (cursor.x > 30 && cursor.x < 90 && cursor.y > 660 && cursor.y < 710) scene.at = "kiirosroom", player1.x = 350;
        if (cursor.x > 100 && cursor.x < 200 && cursor.y > 100 && cursor.y < 200) scene.at = "basestar", player1.x = 600;
		if (cursorX.between(300,400) && cursorY.between(100,200)) unlock();
    }
}

createScene({ name: "basestar",
		bg: "space1",
		theme: "none",
		font: standartFont,
		edgeL: 0,
		edgeR: 1280,
		ground: 2000,
		scaling: 0.75,
		gamemode: "space"});
scene.basestar.events = function() {
    player1.skin = image.basestar;
    if (player1.x > 1280) player1.x = 0;
    if (player1.x < 0) player1.x = 1280;
    if (player1.y > 720) player1.y = 0;
    if (player1.y < 0) player1.y = 720;
    Game.ctx.drawImage(image.fenster, 0, 0);
    Game.ctx.fillText("Basestar Simulator.exe", 10, 28);
    if (click === true) {
        if (cursor.x.between(30,90) && cursor.y.between(660,710)) scene.at = "kiirosroom", player1.x = 350, player1.vx = 0;
        if (cursor.x.between(1250,1280)&& cursor.y.between(0,30)) scene.at = "desktop", player1.x = -200, player1.vx = 0;
    }
    if (key.back === "true") scene.at = "desktop";
}

createScene({ name: "closet",
		bg: "closet",
		theme: "theme1",
		font: standartFont,
		edgeL: 0,
		edgeR: 1280,
		ground: 220,
		scaling: 1,
		gamemode: "interface"});
scene.closet.events = function() {
    Game.ctx.beginPath();
    if (use === "intro")Game.ctx.fillText("Hmmm, I wish I had more outfits...", 300, 40), setTimeout(normalize, 2000);
    if (cursorX < 400 || cursorX > 900)Game.ctx.drawImage(image.lnk, cursorX - 100, cursorY - 110),Game.ctx.fillText("Return", cursorX - 100, cursorY - 46);
    if (click) {
        if (cursor.x < 400 || cursor.x > 900) scene.at = "kiirosroom", player1.x = 580;
        if (cursor.x.between(460, 600) && cursor.y.between(220, 80)) use = "slot1";
		if (cursor.x.between(660, 800) && cursor.y.between(220, 80)) use = "slot2";
		if (cursor.x.between(460, 600) && cursor.y.between(390, 250)) use = "slot3";
		if (cursor.x.between(660, 800) && cursor.y.between(390, 250)) use = "slot4";
		if (cursor.x.between(460, 600) && cursor.y.between(570, 430)) use = "slot5";
		if (cursor.x.between(660, 800) && cursor.y.between(570, 430)) use = "slot6";
    }
    if (cursor.x.between(460, 600) && cursor.y.between(220, 80)) Game.ctx.rect(460, 80, 140, 140),Game.ctx.fillText("Everyday wear", 460, 60);
	if (cursor.x.between(660, 800) && cursor.y.between(220, 80)) Game.ctx.rect(660, 80, 140, 140),Game.ctx.fillText("Empty", 660, 60);
	if (cursor.x.between(460, 600) && cursor.y.between(390, 250)) Game.ctx.rect(460, 250, 140, 140), Game.ctx.fillText("Empty", 460, 120);
	if (cursor.x.between(660, 800) && cursor.y.between(390, 250)) Game.ctx.rect(660, 250, 140, 140), Game.ctx.fillText("Empty", 660, 120);
	if (cursor.x.between(460, 600) && cursor.y.between(570, 430)) Game.ctx.rect(460, 430, 140, 140),Game.ctx.fillText("Empty", 460, 410);
	if (cursor.x.between(660, 800) && cursor.y.between(570, 430)) Game.ctx.rect(660, 430, 140, 140), Game.ctx.fillText("Sketched outfit", 660, 410);
    Game.ctx.stroke();

    if (use === "slot1") changeClothes("kiiro_main");
    if (use === "slot6") changeClothes("kiiro_sketched");
    if (use === "slot2") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
    if (use === "slot3") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
    if (use === "slot4") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
    if (use === "slot5") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
}

createScene({ name: "home_upstairs1",
		bg: "home_upstairs1",
		theme: "theme1",
		font: standartFont,
		edgeL: "home_upstairs2",
		edgeR: 990,
		ground: 180,
		scaling: 0.9,
		gamemode: "adventure"});
scene.home_upstairs1.events = function() {
    Game.ctx.drawImage(image.midori0r, 0, groundlevel, scale * 220, scale * 440);
	stairs(400, "down", "home_downstairs1", 600)
	door(790,"kiirosroom",0,"Enter");
    if (player1.x > 10 && player1.x < 180) {
        if (use === "false") Game.ctx.fillText("Enter(E)", 120, groundlevel);
        if (use === "true") use = "talk";
        if (use === "talk") {
            talk("Midori: Hey Kiiro.", 1);
            talk("Kiiro: Hi Midori, im looking for something. May i take a look for it in your room?", 2);
            talk("Midori: No, you dont wanna go in there right now...", 3);
            talk("Kiiro: Why? Whats going on?", 4);
            talk("Midori: Im... busy. You just dont want to be in there right now, trust me!", 5);
			talk("lol",6);
        }
    }
    if (player1.x > 990) player1.x = 990;
}

createScene({ name: "home_upstairs2",
		bg: "home_upstairs2",
		theme: "theme1",
		font: standartFont,
		edgeL: 100,
		edgeR: "home_upstairs1",
		ground: 180,
		scaling: 0.9,
		gamemode: "adventure"});
scene.home_upstairs2.events = function() {
	door(575,"home_room1",0,"Enter");
}

createScene({ name: "home_room1",
		bg: "room1",
		theme: "theme1",
		font: standartFont,
		edgeL: 0,
		edgeR: 1080,
		ground: 220,
		scaling: 1,
		gamemode: "adventure"});
scene.home_room1.events = function() {
	door(0,"home_upstairs2",575,"Leave");
}

createScene({ name: "home_downstairs1",
		bg: "home_downstairs1",
		theme: "theme1",
		font: standartFont,
		edgeL: "home_downstairs2",
		edgeR: 1080,
		ground: 200,
		scaling: 1.05,
		gamemode: "adventure"});
scene.home_downstairs1.events = function() {
    stairs(560, "up", "home_upstairs1", 400);
	npc.riyu.spawn(300, "conversation1");
	door(800,"home_kitchen","locked","Kitchen");
	door(1040,"frontyard",0,"Leave",event.getBirdfood,"I first need to gather", "something to feed to", "beloved crow friends.");
}

createScene({ name: "home_downstairs2",
		bg: "home_downstairs2",
		theme: "theme1",
		font: standartFont,
		edgeL: "home_downstairs3",
		edgeR: "home_downstairs1",
		ground: 200,
		scaling: 1.05,
		gamemode: "adventure"});
scene.home_downstairs2.events = function(){
	door(980,"home_basement", 100,"Basement");
	door(750,"livingroom",700,"Livingroom");
	door(0,"parentsroom","locked","Parents Room");
}

createScene({ name: "home_downstairs3",
		bg: "home_downstairs3",
		theme: "theme1",
		font: standartFont,
		edgeL: 300,
		edgeR: "home_downstairs2",
		ground: 200,
		scaling: 1.05,
		gamemode: "adventure"});
scene.home_downstairs3.events = function(){
	door(600,"home_bath","locked","Bathroom");
}

createScene({ name: "livingroom",
		bg: "livingroom",
		theme: "theme1",
		font: standartFont,
		edgeL: 400,
		edgeR: 750,
		ground: 160,
		scaling: 1.25,
		gamemode: "adventure"});
scene.livingroom.events = function() {
	door(700,"home_downstairs2",750,"Leave");
}

createScene({ name: "home_basement",
		bg: "home_basement",
		theme: "theme2",
		font: standartFont,
		edgeL: "home_downstairs2",
		edgeR: 1050,
		ground: 350,
		scaling: 0.8,
		gamemode: "adventure"});
scene.home_basement.events = function(){
	portal(45, "home_downstairs2", 980);
	npc.scp173.spawn(1000);
	console.log(player1.x);
}


}// No touchy!
// :p hehe ~miterosan
