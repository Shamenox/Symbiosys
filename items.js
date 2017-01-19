var item = {};
function setupItems(){
	item.bar = {};
	item.bar.extended = false;
	item.bar.slot = [];
	item.bar.act = function(){
		if (triggerReact(key.i && !item.bar.extended)) item.bar.extended = true;
		if (triggerReact(key.i && item.bar.extended)) item.bar.extended = false;
		if (mode === "adventure"){
			if (!item.bar.extended) {
				Game.ctx.drawImage(image.inventory,0,660);
				if (cursor.x.between(10,250) && cursor.y.between(665,720)){
					Game.ctx.drawImage(image.inventory_arrow,15,665);
					if (click) item.bar.extended = true;
				}
			}
			if (item.bar.extended){
				Game.ctx.drawImage(image.inventory_blank,0,550);
				for (i = 0; i<8; i++){
					if (cursor.x.between(40+155*i,160+155*i) && cursor.y.between(550,710)) Game.ctx.drawImage(image.inventory_selected,40+155*i,550);
					if (item.bar.slot[i] !== undefined) Game.ctx.drawImage(item.bar.slot[i].skin,40+110*i,575, 120, 120);
					if (item.bar.slot[i] !== undefined && cursor.x.between(40+155*i,160+155*i) && cursor.y.between(550,710)) Game.ctx.fillText(item.bar.slot[i].declaration, cursor.x, cursor.y - 20);
				}
				Game.ctx.drawImage(image.inventory,0,465);
				if (cursor.x.between(10,250) && cursor.y.between(470,535)){
					Game.ctx.drawImage(image.inventory_arrow,15,470);
					if (click) item.bar.extended = false;
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
					Game.ctx.fillText("Pick up " + this.declaration +"(E)", x, groundlevel);
					if (key.e) {
						audio.cloth.play();
						this.quantity += 1;
						item.bar.slot[item.bar.slot.length] = this;
						this.pickedup[scene.at] = true;
					}
				}
			}
		}
	item[declaration] = neuesItem;
	}
	createItem("chips", "chips");
}