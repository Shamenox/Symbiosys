function createScene(declaration, bg, theme, font, edgeL, edgeR, ground, scaling, gamemode){
	var neueszene = {};
	neueszene.background = image[bg];
	if (theme !== "none") neueszene.theme = audio[theme];
	if (theme === "none") neueszene.theme = "none";
	neueszene.font = font;
	neueszene.edgeL = edgeL;
	neueszene.edgeR = edgeR;
	neueszene.groundlevel = ground;
	neueszene.scale = scaling;
	neueszene.mode = gamemode;
	scene[declaration] = neueszene;
}

function setupScenes(){
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

createScene("loading", "whitescreen", "none", labelFont, 0, 1280, 220, 1,"interface");	
scene.loading.events = function() {
	Game.ctx.fillText("Loading... please wait", 200, 200);
	Game.ctx.rect(40,400,1200,100);
	Game.ctx.fillStyle = "yellow";
	Game.ctx.fillRect(50,410,1180*(image.loaded/image.quantity),80);
	Game.ctx.rect(50,410,1180*(image.loaded/image.quantity),80);
	Game.ctx.stroke();
}

createScene("whitescreen", "whitescreen", "none", labelFont, 0, 1280, 220, 1,"adventure");	

createScene("menue", "whitescreen", "none", labelFont, 0, 1280, 220, 1, "interface");	
scene.menue.events = function() {
    Game.ctx.rect(20, 20, 1240, 680);
    Game.ctx.stroke();
    Game.ctx.fillText("Start", 440, 200);
    if (click === true) scene.at = "kiirosroom"
}

createScene("kiirosroom", "kiirosroom", "theme1", standartFont, 0, 1080, 220, 1,"adventure");
scene.kiirosroom.events = function() {
    if (use !== "aboutToSleep") background = image.kiirosroom;
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
            background = image.bouttosleep;
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

createScene("desktop", "desktop", "theme1", standartFont, 0, 1280, 220, 1,"interface");
scene.desktop.events = function() {
    Game.ctx.drawImage(image.toolbar, 0, 0);
    Game.ctx.drawImage(image.basestar, 100, 100);
    Game.ctx.drawImage(image.lnk, 100, 100);
	Game.ctx.fillText("Basestar", 100, 224);
	Game.ctx.drawImage(image.trollface,300,100)
	Game.ctx.drawImage(image.lnk, 300, 100);
    Game.ctx.fillText("Unlock Everything", 300, 224);
    if (key.esc) scene.at = "kiirosroom";
    if (click === true) {
        if (cursorX > 30 && cursorX < 90 && cursorY > 660 && cursorY < 710) scene.at = "kiirosroom", player1.x = 350;
        if (cursorX > 100 && cursorX < 200 && cursorY > 100 && cursorY < 200) scene.at = "basestar", player1.x = 600;
		if (cursorX.between(300,400) && cursorY.between(100,200)) unlock();
    }
}

createScene("basestar", "space1", "none", standartFont, 0, 1280, 2000, 0.75,"space");
scene.basestar.events = function() {
    player1.skin = image.basestar;
    if (player1.x > 1280) player1.x = 0;
    if (player1.x < 0) player1.x = 1280;
    if (player1.y > 720) player1.y = 0;
    if (player1.y < 0) player1.y = 720;
    Game.ctx.drawImage(image.fenster, 0, 0);
    Game.ctx.fillText("Basestar Simulator.exe", 10, 28);
    if (click === true) {
        if (cursorX.between(30,90) && cursorY.between(660,710)) scene.at = "kiirosroom", player1.x = 350, player1.vx = 0;
        if (cursorX.between(1250,1280)&& cursorY.between(0,30)) scene.at = "desktop", player1.x = -200, player1.vx = 0;
    }
    if (key.esc === "true") scene.at = "desktop";
}

createScene("closet", "closet", "theme1", standartFont, 0, 1280, 220, 1,"interface");
scene.closet.events = function() {
    Game.ctx.beginPath();
    if (use === "intro")Game.ctx.fillText("Hmmm, I wish I had more outfits...", 300, 40), setTimeout(normalize, 2000);
    if (cursorX < 400 || cursorX > 900)Game.ctx.drawImage(image.lnk, cursorX - 100, cursorY - 110),Game.ctx.fillText("Return", cursorX - 100, cursorY - 46);
    if (click) {
        if (cursorX < 400 || cursorX > 900) scene.at = "kiirosroom", player1.x = 580;
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

    if (use === "slot1") changeClothes("kiiro_main");
    if (use === "slot6") changeClothes("kiiro_sketched");
    if (use === "slot2") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
    if (use === "slot3") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
    if (use === "slot4") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
    if (use === "slot5") setTimeout(normalize, 2000), Game.ctx.fillText("There's nothing in the closet...", 300, 40);
}

createScene("home_upstairs1", "home_upstairs1", "theme1", standartFont, "home_upstairs2", 990, 180, 0.9, "adventure");
scene.home_upstairs1.events = function() {
    Game.ctx.drawImage(image.midori0r, 0, groundlevel, scale * 220, scale * 440);
    if (player1.x > 260 && player1.x < 410) {
		Game.ctx.fillText("Downstairs(S)", 300, groundlevel);
        if (key.s) scene.at = "home_downstairs1", player1.x = 600;
    }
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

createScene("home_upstairs2", "home_upstairs2", "theme1", standartFont, 100, "home_upstairs1", 180, 0.9, "adventure");
scene.home_upstairs2.events = function() {
	door(575,"home_room1",0,"Enter");
}

createScene("home_room1", "room1", "theme1", standartFont, 0, 1080, 220, 1,"adventure");
scene.home_room1.events = function() {
	door(0,"home_upstairs2",575,"Leave");
	npc.scp173.spawn(900);
}

createScene("home_downstairs1", "home_downstairs1", "theme1", standartFont, "home_downstairs2", 1080, 200, 1, "adventure");
scene.home_downstairs1.events = function() {
    if (player1.x > 460 && player1.x < 640) {
		Game.ctx.fillText("Upstairs(W)", 500, 220);
        if (key.w) use = "stairs";
        if (use === "stairs") scene.at = "home_upstairs1", player1.x = 300, use = "false";
    }
	door(800,"home_kitchen","locked","Kitchen");
	door(1040,"frontyard",0,"Leave",event.getBirdfood,"I first need to gather", "something to feed to", "beloved crow friends.");
}

createScene("livingroom", "livingroom", "theme1", standartFont, 400, 750, 160, 1.25,"adventure");
scene.livingroom.events = function() {
    Game.ctx.drawImage(image.riyu0r_sketched, 250, 130);
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
	door(700,"home_downstairs2",750,"Leave");
}

createScene("home_downstairs2", "home_downstairs2", "theme1", standartFont, 0, "home_downstairs1", 220, 1, "adventure");
scene.home_downstairs2.events = function(){
console.log(player1.x);
	door(980,"basement","locked","Basement");
	door(750,"livingroom",700,"Livingroom");
	door(0,"parentsroom","locked","Parents Room");
}

createScene("home_downstairs3", "home_downstairs3", "theme1", standartFont, 200, "home_downstairs2", 220, 1, "adventure");
scene.home_downstairs3.events = function(){
	door(350,"home_kitchen","locked","Kitchen");
}
}