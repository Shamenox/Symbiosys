﻿// Eingabeverarbeitung
function physik() {
    player1.y -= player1.vy;
    player1.x += player1.vx;
	if (key.e && use === "false") use = "true";
	if (!key.e && use === "true") use = "false";

	if (mode === "adventure"){
		if (intervalReact(key.w && player1.y === groundlevel)) player1.vy = 30 * scale, player1.y -= 40;
		if (key.s){
			player1.step = 11;
			if (player1.y === groundlevel) player1.y = groundlevel + 100*scale;
		}
		if (key.a) {
			player1.dir = "left";
			if (player1.x > 0){
				player1.vx = -10 * scale;
				audio.steps.play();
			}
		}
		if (key.d) {
			player1.dir = "right"
			if (player1.x < 1280){
				player1.vx = +10 * scale;
				audio.steps.play();
			}
		}
		if (!key.a && !key.d) player1.vx = 0;
		if (player1.y > groundlevel) {
			player1.vy = 0;
			if (!key.s){
				player1.y = groundlevel;
				player1.step -=1;
			}
		}
		if (player1.y < groundlevel) player1.vy -= 4, player1.step = 11;
		if (intervalReact(player1.vx !== 0, 100, "isWalkingOn")) {
			if (player1.step === 10) player1.step = 0;
			if (player1.step < 10) player1.step +=1;
			//var stepID =setInterval(() => player1.step++,100);
		}
		if (player1.vx === 0){
			if (player1.step !== 11) player1.step = 0;
		}
		if (player1.dir === "right") player1.skin = skin[clothes].r[player1.step];
		if (player1.dir === "left") player1.skin = skin[clothes].l[player1.step];

	}
	if (mode === "space"){
			if (key.w) player1.vy += 0.05;
			if (key.s) player1.vy -= 0.05;
			if (key.a) player1.vx -= 0.05;
			if (key.d) player1.vx += 0.05;
			if (player1.vx > 400) player1.vx = 400;
			if (player1.vy > 400) player1.vy = 400;
		}
    if (use === "black") background = image.blackscreen;
	if (mode === "interface") player1.skin = image.blank;
}

function normalize(target) {
    use = "false";
    state = 0;
	if (target === "skin") clothes = next["clothes"];
    for (var i = 0; i < next.length; i++) {
        next[i] = false;
    }
}

function fadeout() {
    use = "black";
    changeSkin("blank");
    setTimeout(normalize, 1000,"skin");
}

function changeSkin(to){
	if (!next["saveclothes"]) next["clothes"] = clothes, next["saveclothes"] = true;
	clothes = to;
	console.log(clothes);
}

function changeClothes(to){
        setTimeout(normalize, 2000);
        if (clothes === to){
			if (!next[1])Game.ctx.fillText("Im already wearing that.", 300, 40);
		}
        if (clothes !== to) {
            clothes = to;
			next[1] = true;
			audio.cloth.play();
        }
    }



function talk(text, turn) {
	function delay() {
    state += 1;
    if (!next[state]) normalize();
	}
    if (turn === 1 && state === 0) state = 1;
    if (state === turn)Game.ctx.fillText(text, player1.x, groundlevel);
    if (next[turn] !== true) setTimeout(delay, 2000 * turn), next[turn] = true;
}
	
function door(pos,to,at,tag,trigger,alt1,alt2,alt3){
    if (player1.x.between(pos - 80*scale,pos + 80*scale)) {
        if (use === "false") Game.ctx.fillText(tag+"(E)", pos, groundlevel);
        if (intervalReact(use === "true", 500, "transitDelay")){
			if (at === "locked") use = "locked";
			if (trigger === undefined && alt1 === undefined || trigger) use = "enter";
			if (trigger !== true && alt1 !== undefined) use = "failed";
		}
        if (use === "enter") {
			use = "false";
            scene.at = to;
            player1.x = at;
			player1.y = groundlevel;
        }
		if (use === "locked"){
		Game.ctx.fillText("Its locked?...", pos, groundlevel);
        setTimeout(normalize, 1500);
		}
		if (use === "failed"){
		Game.ctx.fillText(alt1, pos, groundlevel - 40);
		if (alt2 !== undefined)Game.ctx.fillText(alt2, pos, groundlevel - 20);
		if (alt3 !== undefined)Game.ctx.fillText(alt3, pos, groundlevel);
        setTimeout(normalize, 3000);
		}
    }
}

function stairs(pos, direction, to, at, trigger, alt1, alt2, alt3){
    if (player1.x.between(pos - 80*scale,pos + 80*scale)) {
        if (use === "false" && direction === "down")Game.ctx.fillText("Downstairs(S)", pos, groundlevel);
		if (use === "false" && direction === "up")Game.ctx.fillText("Upstairs(W)", pos, groundlevel);
        if (direction === "down" && key.s || direction === "up" && key.w){
			if (trigger === null || trigger === undefined || trigger === true) use = "stairs";
			if (trigger === false) use = "failed";
		}
        if (use === "stairs" && !next[1]) {
            scene.at = to;
            player1.x = at;
			player1.y = groundlevel;
			next[1] = true;
            setTimeout(normalize,500);
        }
		if (use === "failed"){
		Game.ctx.fillText(alt1, pos, groundlevel - 40);
		if (alt2 !== undefined)Game.ctx.fillText(alt2, pos, groundlevel - 20);
		if (alt3 !== undefined)Game.ctx.fillText(alt3, pos, groundlevel);
        setTimeout(normalize, 1000);
		}
		if (use === "true") use = "false";
    }
}

function portal(pos, to, at, trigger){
	if (player1.x.between(pos - 5, pos + 5)) {
        if (trigger === true || trigger === undefined) {
            scene.at = to;
            player1.x = at;
			player1.y = groundlevel;
			next[1] = true;
            setTimeout(normalize,500);
        }
    }
}

function die(){
	normalize();
	fadeout();
	audio.snap.play();
	player1.x = 740;
	scene.at = "kiirosroom";
}

