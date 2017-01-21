function setupEvents(){
	Game.event.items = [];
	Game.event.irr = false;
	Game.event.check = function(nach){
		if (Game.event.irr) return true;
		for (i = 0; i < Game.event.length; i++){
			if (Game.event.items[i].declaration === nach){
				if (Game.event.items[i].check()) return true;
			}
		}
		return false;
	}
}
function createEvent(declaration, trigger){
		var neuesEvent = {};
		neuesEvent.declaration = declaration;
		neuesEvent.triggered = false;
		neuesEvent.check = function(){
			if (trigger) this.triggered = true;
			if (this.triggered) return tru;
			return false;
		}
		Game.event.items[event.length] = neuesEvent;
}
function triggerEvent(declaration){
	createEvent(declaration, true);
}