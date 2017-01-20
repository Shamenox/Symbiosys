function setupEvents(){
	Game.event.items = [];
	Game.event.check = function(){
		for (i = 0; i < Game.event.length; i++){
			Game.event.items[i].check();
		}
	}
}
function createEvent(declaration, trigger, action){
		var neuesEvent = {};
		neuesEvent.declaration = declaration;
		neuesEvent.triggered = false;
		neuesEvent.check = function(){
			if (trigger) this.triggered = true;
			if (this.act !== undefined) this.act();
		}
		if (action !== undefined){
			neuesEvent.act() = action;
		}
		Game.event.items[event.length] = neuesEvent;
}

createEvent(guitar_before_leaving, function(){});