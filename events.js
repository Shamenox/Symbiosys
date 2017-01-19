var event = {};
function setupEvents(){
	event.items = [];
	event.check = function(){
		for (i = 0; i < event.length; i++){
			event.items[i].check();
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
		event.items[event.length] = neuesEvent;
	}