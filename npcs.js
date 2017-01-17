var npc = {};
function setupNpcs(){
	npc.scp173 = { setup : false};
	npc.scp173.spawn = function(at){
		if (!npc.scp173.setup) npc.scp173.x = at, npc.scp173.setup = true;
		if (player1.x < npc.scp173.x) npc.scp173.dir = "left";
		if (player1.x > npc.scp173.x) npc.scp173.dir = "right";
		if (npc.scp173.dir === "left"){
			if (player1.dir === "left") npc.scp173.x -=40, audio.concrete.play();
			Game.ctx.drawImage(image.scp1730l, npc.scp173.x, groundlevel - 50*scale, 220*scale, 440*scale);
		}
		if (npc.scp173.dir === "right"){
			if (player1.dir === "right") npc.scp173.x +=40, audio.concrete.play();
			Game.ctx.drawImage(image.scp1730r, npc.scp173.x, groundlevel - 50*scale, 220*scale, 440*scale);
		}
		if (player1.x.between(npc.scp173.x +5 , npc.scp173.x -5)) die(), npc.scp173.setup === false;
	}
	npc.riyu = {};
	npc.riyu.conversation1 = function(){
		talk("Kiiro: Hi Riyu!", 1);
        talk("Riyu: Hey Kiiro, i was wondering if you would like to come over", 2);
        talk("Kiiro: Of course, but we will have to wait until the outside world is finnished...", 3);
        talk("Riyu: Yeah, they should really hurry up...", 4);
	}
	npc.riyu.spawn = function(at, conversation){
		npc.riyu.x = at;
		if (player1.x.between(npc.riyu.x + 100* scale, npc.riyu.x - 100* scale)) {
			if (use === "false") Game.ctx.fillText("Talk(E)", npc.riyu.x + 110*scale, groundlevel);
			if (use === "true") use = "talk";
			if (use === "talk") npc.riyu[conversation]();
		}
		Game.ctx.drawImage(image.riyu0r, npc.riyu.x, groundlevel,220*scale,440*scale);
	}
}