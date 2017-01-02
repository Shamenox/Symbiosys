// Eingabeverarbeitung
function physik() {
    player1.y -= player1.vy;
    player1.x += player1.vx;
	if (gravity === "true"){
		if (player1.y > groundlevel) {
			if (player1.crouch === "jump") player1.crouch = "false";
			player1.vy = 0;
        if (player1.crouch !== "true") player1.y = groundlevel;
		}
		if (player1.y < groundlevel) player1.vy -= 4, player1.crouch = "jump";
		if (player1.vx > 0)player1.dir = "right";
		if (player1.vx < 0)player1.dir = "left";
		if (player1.vx !== 0 && !next["walking"]) {
			player1.step +=1;
			setTimeout(steppon,100);
			next["walking"] = true;
			}
		if (player1.vx === 0 && player1.crouch === "false") player1.step = 0;
		if (player1.step > 10 && player1.crouch === "false") player1.step = 1;
		if (player1.crouch !== "false" ) player1.step = 11;
		if (player1.crouch === "true") player1.y = groundlevel + 100*scale; 
		if (player1.dir === "right") player1.skin = skin[clothes].r[player1.step];
		if (player1.dir === "left") player1.skin = skin[clothes].l[player1.step];
		
	}
	console.log(use);
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
