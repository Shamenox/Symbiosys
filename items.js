var item = {};
function setupItems(){
	item.bar = {};
	item.bar.extended = false;
	item.bar.slot = [];
	for (i = 0; i<9; i++){
		item.bar.slot[i] = "empty";
	}
	item.bar.act = function(){
	console.log(item.bar.extended);
		if (triggerReact(key.i && !item.bar.extended)) item.bar.extended = true;
		if (triggerReact(key.i && item.bar.extended)) item.bar.extended = false;
		console.log(item.bar.extended);
		if (mode === "adventure"){
			if (!item.bar.extended) {
				Game.ctx.drawImage(image.inventory,0,660);
			}
			if (item.bar.extended){
				Game.ctx.drawImage(image.inventory,0,465);
				for (i = 0; i<9; i++){
				if (item.bar.slot[i] !== "empty") Game.ctx.drawImage(item.bar.slot[i].skin,40+110*i,575); ;
				}
			}
		}
	}
	
	function createItem(declaration, texture){
		neuesItem = {};
		neuesItem.skin = image[texture];
		neuesItem.declaration = declaration;
		neuesItem.quantity = 0;
		neuesItem.pickedup = {};
		neuesItem.place = function(x,y){
			if (this.pickedup[scene.at] === undefined) {
				Game.ctx.drawImage(this.skin, x, y);
				if (player1.x.between(x + 50*scale, x - 50*scale)) {
					Game.ctx.fillText("Pick up" + this.declaration, x, groundlevel);
					if (key.e) {
						audio.cloth.play();
						this.quantity = 1;
						item.bar.slot[item.bar.slot.length()] = this;
						this.pickedup[scene.at] = true;
					}
				}
			}
		}
	item[declaration] = neuesItem;
	}
}