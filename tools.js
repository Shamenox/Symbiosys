Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
function createImage(path) {
    var img = new Image();
    img.src = path;
		state +=1;
		console.log(state);
    return img;
}

function createSprite(path,x,y){
    var content = {
        x: x,
        y: y,
    };
    return content;
}
function createSkin(){
	var neuerskin = {
		r : [],
		l : []
	}
	return neuerskin;
}
//this is objeckt stufffff
var Animation = function(){
  this.isRunning = false;
  this.frames = [];
  this.speedMs = 30; //speed of the animation in milliseconds
  this.step = -1; //current displayed frame
  this.addFrame = (function(picture) { //adds a frame
    this.frames.push(picture);
  }).bind(this);

  this.updateLoop = (function() {
    if (this.isRunning === false) return; //if not running, then stop loop
    this.step++;
    if (this.step > this.frames.length-1) this.step = 0;
    setTimeout(this.updateLoop, this.speedMs);
  }).bind(this);

  this.getCurrentFrame = (function() {
    return this.frames[this.step];
  }).bind(this);

  this.stop = (function() {
    this.isRunning = false;
  }).bind(this);

  this.start = (function() {
    this.isRunning = true;
    this.updateLoop();
  }).bind(this);

  this.reset = (function() { //does not stop the animation
    this.step = 0;
  }).bind(this);
};



/*

Beispiel

var geileAnimation = new Animation();

geileAnimation.addFrame(pic1);
geileAnimation.addFrame(pic2);
geileAnimation.addFrame(pic3);

geileAnimation.start();

das Aktikuelle frame bekommst du mit 
geileAnimation.getCurrentFrame();

//das kannst du dann bei drawImage benutzen

ctx.drawImage(geileAnimation.getCurrentFrame(), 250, 130);

*/