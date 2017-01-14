function setupNpcs(){
	npc.scp173 = { setup : false};
	npc.scp173.spawn = function(at){
		if (!npc.scp173.setup) npc.scp173.x = at, npc.scp173.setup = true;
		if (player1.x < npc.scp173.x) npc.scp173.dir = "left";
		if (player1.x > npc.scp173.x) npc.scp173.dir = "right";
		if (npc.scp173.dir === "left"){
			if (player1.dir === "left") npc.scp173.x -=40;
			Game.ctx.drawImage(image.scp1730l, npc.scp173.x, 120, 220*scale, 440*scale);
		}
		if (npc.scp173.dir === "right"){
			if (player1.dir === "right") npc.scp173.x +=40;
			Game.ctx.drawImage(image.scp1730r, npc.scp173.x, 120, 220*scale, 440*scale);
		}
		if (player1.x === npc.scp173.x) die(), npc.scp173.setup === false;
	}
}