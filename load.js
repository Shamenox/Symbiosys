function loadAudio(){
    audio.steps = new Audio("ress/audio/steps.mp3");
    audio.guitar1 = new Audio("ress/audio/guitar1.mp3");
    audio.theme1 = new Audio("ress/audio/theme1.mp3");
}
function createImage(path) {
	image.quantity += 1;
    var img = new Image();
    img.src = path;
	img.addEventListener("load",function(e){
	    image.loaded +=1;
	    if (image.loaded === image.quantity) {
			scene.at = "menue";
			console.log(image.quantity,image.loaded);
		}
	})
    return img;
}
function loadImages() {
    image.menue = createImage("ress/menue.png");
    image.cursor = createImage("ress/cursor.png");
    image.blank = createImage("ress/blank.png");
    image.whitescreen = createImage("ress/whitescreen.png");
    image.blackscreen = createImage("ress/blackscreen.png");
    image.lnk = createImage("ress/lnk.png");
    image.bouttosleep = createImage("ress/bouttosleep.png");
  	image.kiiro_main0l = createImage("ress/kiiro_main/0l.png");
    image.kiiro_main0r = createImage("ress/kiiro_main/0r.png");
    image.kiiro_main1r = createImage("ress/kiiro_main/1r.png");
    image.kiiro_main2r = createImage("ress/kiiro_main/2r.png");
    image.kiiro_main3r = createImage("ress/kiiro_main/3r.png");
    image.kiiro_main4r = createImage("ress/kiiro_main/4r.png");
    image.kiiro_main5r = createImage("ress/kiiro_main/5r.png");
    image.kiiro_main6r = createImage("ress/kiiro_main/6r.png");
    image.kiiro_main7r = createImage("ress/kiiro_main/7r.png");
    image.kiiro_main8r = createImage("ress/kiiro_main/8r.png");
    image.kiiro_main9r = createImage("ress/kiiro_main/9r.png");
    image.kiiro_main10r = createImage("ress/kiiro_main/10r.png");
    image.kiiro_main1l = createImage("ress/kiiro_main/1l.png");
    image.kiiro_main2l = createImage("ress/kiiro_main/2l.png");
    image.kiiro_main3l = createImage("ress/kiiro_main/3l.png");
    image.kiiro_main4l = createImage("ress/kiiro_main/4l.png");
    image.kiiro_main5l = createImage("ress/kiiro_main/5l.png");
    image.kiiro_main6l = createImage("ress/kiiro_main/6l.png");
    image.kiiro_main7l = createImage("ress/kiiro_main/7l.png");
    image.kiiro_main8l = createImage("ress/kiiro_main/8l.png");
    image.kiiro_main9l = createImage("ress/kiiro_main/9l.png");
    image.kiiro_main10l = createImage("ress/kiiro_main/10l.png");
    image.kiiro_maincl = createImage("ress/kiiro_main/cl.png");
    image.kiiro_maincr = createImage("ress/kiiro_main/cr.png");
  	image.kiiro_sketched0l = createImage("ress/kiiro_sketched/0l.png");
    image.kiiro_sketched0r = createImage("ress/kiiro_sketched/0r.png");
    image.kiiro_sketched1r = createImage("ress/kiiro_sketched/1r.png");
    image.kiiro_sketched2r = createImage("ress/kiiro_sketched/2r.png");
    image.kiiro_sketched3r = createImage("ress/kiiro_sketched/3r.png");
    image.kiiro_sketched4r = createImage("ress/kiiro_sketched/4r.png");
    image.kiiro_sketched5r = createImage("ress/kiiro_sketched/5r.png");
    image.kiiro_sketched6r = createImage("ress/kiiro_sketched/1r.png");
    image.kiiro_sketched7r = createImage("ress/kiiro_sketched/2r.png");
    image.kiiro_sketched8r = createImage("ress/kiiro_sketched/3r.png");
    image.kiiro_sketched9r = createImage("ress/kiiro_sketched/4r.png");
    image.kiiro_sketched10r = createImage("ress/kiiro_sketched/5r.png");
    image.kiiro_sketched1l = createImage("ress/kiiro_sketched/1l.png");
    image.kiiro_sketched2l = createImage("ress/kiiro_sketched/2l.png");
    image.kiiro_sketched3l = createImage("ress/kiiro_sketched/3l.png");
    image.kiiro_sketched4l = createImage("ress/kiiro_sketched/4l.png");
    image.kiiro_sketched5l = createImage("ress/kiiro_sketched/5l.png");
    image.kiiro_sketched6l = createImage("ress/kiiro_sketched/1l.png");
    image.kiiro_sketched7l = createImage("ress/kiiro_sketched/2l.png");
    image.kiiro_sketched8l = createImage("ress/kiiro_sketched/3l.png");
    image.kiiro_sketched9l = createImage("ress/kiiro_sketched/4l.png");
    image.kiiro_sketched10l = createImage("ress/kiiro_sketched/5l.png");
    image.kiiro_sketchedcl = createImage("ress/kiiro_sketched/1l.png");
    image.kiiro_sketchedcr = createImage("ress/kiiro_sketched/1r.png");
  	image.kiiro_guitar0l = createImage("ress/kiiro_guitar/0l.png");
    image.kiiro_guitar0r = createImage("ress/kiiro_guitar/0r.png");
    image.kiiro_guitar1r = createImage("ress/kiiro_main/1r.png");
    image.kiiro_guitar2r = createImage("ress/kiiro_main/2r.png");
    image.kiiro_guitar3r = createImage("ress/kiiro_main/3r.png");
    image.kiiro_guitar4r = createImage("ress/kiiro_main/4r.png");
    image.kiiro_guitar5r = createImage("ress/kiiro_main/5r.png");
    image.kiiro_guitar6r = createImage("ress/kiiro_main/6r.png");
    image.kiiro_guitar7r = createImage("ress/kiiro_main/7r.png");
    image.kiiro_guitar8r = createImage("ress/kiiro_main/8r.png");
    image.kiiro_guitar9r = createImage("ress/kiiro_main/9r.png");
    image.kiiro_guitar10r = createImage("ress/kiiro_main/10r.png");
    image.kiiro_guitar1l = createImage("ress/kiiro_main/1l.png");
    image.kiiro_guitar2l = createImage("ress/kiiro_main/2l.png");
    image.kiiro_guitar3l = createImage("ress/kiiro_main/3l.png");
    image.kiiro_guitar4l = createImage("ress/kiiro_main/4l.png");
    image.kiiro_guitar5l = createImage("ress/kiiro_main/5l.png");
    image.kiiro_guitar6l = createImage("ress/kiiro_main/6l.png");
    image.kiiro_guitar7l = createImage("ress/kiiro_main/7l.png");
    image.kiiro_guitar8l = createImage("ress/kiiro_main/8l.png");
    image.kiiro_guitar9l = createImage("ress/kiiro_main/9l.png");
    image.kiiro_guitar10l = createImage("ress/kiiro_main/10l.png");
    image.kiiro_guitarcl = createImage("ress/kiiro_main/cl.png");
    image.kiiro_guitarcr = createImage("ress/kiiro_main/cr.png");
    image.midori0l = createImage("ress/midori/0l.png");
    image.midori0r = createImage("ress/midori/0r.png");
    image.riyu0r_sketched = createImage("ress/riyu/0r.png");
    image.overlay_guitar = createImage("ress/emptyguitar overlay.png");
    image.desktop = createImage("ress/desktop.png");
    image.toolbar = createImage("ress/toolbar.png");
    image.fenster = createImage("ress/fenster.png");
    image.basestar = createImage("ress/sprite_basestar.png");
    image.space1 = createImage("ress/space1.png");
    image.kiirosroom = createImage("ress/kiiros room sketch.png");
    image.closet = createImage("ress/kiiros closet sketch.png");
    image.kiirosroom_door = createImage("ress/kiirosroom door overlay.png");
    image.home_floor1 = createImage("ress/home_ups1.png");
    image.home_floor2 = createImage("ress/home_ups2.png");
    image.room1 = createImage("ress/room1.png");
    image.home_floor3 = createImage("ress/home_dns1.png");
    image.home_floor4 = createImage("ress/home_dns2.png");
    image.home_floor5 = createImage("ress/home_dns3.png");
    image.livingroom = createImage("ress/living room.png");
	image.trollface = createImage("ress/trollface.png");

    console.log(image);
}
function loadSprites(){
    var xx1 = {};
    xx1.head = createSprite("ress/nsfw/head.png",600,150);
    xx1.body = createSprite("ress/nsfw/body.png",600,250);
    xx1.breats = createSprite("ress/nsfw/breats.png",500,280);
    xx1.leg_upper_l = createSprite("ress/upper leg l.png",500,500);
    xx1.leg_upper_r = createSprite("ress/upper leg r.png",700,500);
    xx1.leg_lower_l = createSprite("ress/lower leg l.png",400,600);
    xx1.leg_lower_r = createSprite("ress/lower leg r.png",800,600);
}
