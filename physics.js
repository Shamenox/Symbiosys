// Eingabeverarbeitung
function physik() {
    player1.y -= player1.vy;
    player1.x += player1.vx;
	if (key.e) use = "true";
	if (!key.e && use === "true") use = "false"; 
	
	if (mode === "adventure"){
		if (key.w && player1.y === groundlevel) player1.vy = 30 * scale, player1.y -= 40;
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
		if (player1.vx !== 0 && !next["walking"]) {
			if (player1.step < 10) player1.step +=1;
			if (player1.step === 10) player1.step = 1;
			setTimeout(steppon,100);
			next["walking"] = true;
		}
		if (player1.vx === 0 && player1.step !== 11) player1.step = 0;
		if (player1.dir === "right") player1.skin = skin[clothes].r[player1.step];
		if (player1.dir === "left") player1.skin = skin[clothes].l[player1.step];
		
	}
	if (mode === "space"){
			if (key.w) player1.vy += 2;
			if (key.s) player1.vy -= 2;
			if (key.a) player1.vx -= 2;
			if (key.d) player1.vx += 2;
		}
    if (use === "black") background = image.blackscreen;
}
	
function steppon(){
	next["walking"] = false;
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
	console.log(use);
    changeSkin("blank");
    setTimeout(normalize, 500,"skin");
}

function changeSkin(to){
	if (!next["saveclothes"]) next["clothes"] = clothes, next["saveclothes"] = true; 
	clothes = to;
	console.log(clothes);
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
function door(pos,to,at,tag){
    if (player1.x.between(pos - 60*scale,pos + 60*scale)) {
        if (use === "false")Game.ctx.fillText(tag+"(E)", pos, groundlevel);
        if (use === "true") use = "enter";
        if (use === "enter") {
            scene.at = to;
            player1.x = at;
            setTimeout(normalize,200);
        }
    }
}

