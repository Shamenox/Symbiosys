var npc = {};
function setupNpcs(){
	function createNpc(declaration, texture){
		neuerNpc = {};
		neuerNpc.skin = texture;
		neuerNpc.spawned = [];
		neuerNpc.dir = "right";
		if (skin[texture] !== undefined) neuerNpc.framed = true;
		if (skin[texture] === undefined) neuerNpc.framed = false;
		neuerNpc.spawn = function(at){
			if (this.spawned[scene.at] === undefined) this.x = at, this.spawned[scene.at] = true;
			if (!this.framed){
				console.log(this.skin, image[this.skin+"0l"]);
				if (this.dir === "left") Game.ctx.drawImage(image[this.skin+"0l"], this.x, groundlevel - (image[this.skin+"0l"].naturalHeight * scale -440), image[this.skin+"l"].naturalWidth * scale, image[this.skin+"0l"].naturalHeight * scale);
				if (this.dir === "right") Game.ctx.drawImage(image[this.skin+"0r"], this.x, groundlevel - (image[this.skin+"0r"].naturalHeight * scale -440), image[this.skin+"r"].naturalWidth * scale, image[this.skin+"0r"].naturalHeight * scale);
			}
			if (this.behaviour !== undefined) this.behaviour();
		}
		npc[declaration] = neuerNpc;
	}
	
	createNpc("scp173", "scp173");
	npc.scp173.behaviour = function(){
		if (player1.x < npc.scp173.x) npc.scp173.dir = "left";
		if (player1.x > npc.scp173.x) npc.scp173.dir = "right";
		if (npc.scp173.dir === "left"){
			if (player1.dir === "left") npc.scp173.x -=40, audio.concrete.play();
		}
		if (npc.scp173.dir === "right"){
			if (player1.dir === "right") npc.scp173.x +=40, audio.concrete.play();
		}
		if (player1.x.between(npc.scp173.x +5 , npc.scp173.x -5)) die(), npc.scp173.setup === false;
	}
	
	createNpc("riyu", "riyu");
	npc.riyu.conversation1 = function(){
		talk("Kiiro: Hi Riyu!", 1);
        talk("Riyu: Hey Kiiro, i was wondering if you would like to come over", 2);
        talk("Kiiro: Of course, but we will have to wait until the outside world is finnished...", 3);
        talk("Riyu: Yeah, they should really hurry up...", 4);
	}
	npc.riyu.behaviour = function(){
		if (player1.x.between(npc.riyu.x + 100* scale, npc.riyu.x - 100* scale)) {
			if (use === "false") Game.ctx.fillText("Talk(E)", npc.riyu.x + 110*scale, groundlevel);
			if (use === "true") use = "talk";
			if (use === "talk") npc.riyu.conversation1();
		}
	}
}