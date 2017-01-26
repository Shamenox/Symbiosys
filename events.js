function setupEvents(){
	Game.event.irr = false;
	Game.event.check = function(nach){
		if (Game.event.irr) return true;
		if (Game.event[nach] === undefined) return false;
		if (Game.event[nach].conditions()) Game.event[nach].triggered = true;
		if (Game.event[nach].triggered) return true;
		return false;
	}
createEvent("crowfood", function(){
	if (item.chips.quantity > 0) return true;
	return false;
	});
}
function createEvent(declaration, trigger){
		var neuesEvent = {};
		neuesEvent.triggered = false;
		neuesEvent.conditions = trigger;
		Game.event[declaration] = neuesEvent;
}
function triggerEvent(declaration){
	createEvent(declaration, function(){return true});
}