var item = {};
function setupItems(){
	item.bar = {};
	item.bar.extended = false;
	item.bar.slot = [];
	item.bar.act = function(){
		if (!item.bar.extended) ;//draw ausklappenbutton
		if (item.bar.extended){
			// zeichne Inventory
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