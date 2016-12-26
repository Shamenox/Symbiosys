
function loadMusic(){
    music.teps = new Audio("ress/audio/steps.mp3");
    music.guitar1 = new Audio("ress/audio/guitar1.mp3");
    music.theme1 = new Audio("ress/audio/theme1.mp3");
}

function createImage(path) {
    var img = new Image();
    img.src = path;
    return img;
}

function createSprite(path,x,y){
    var content = {
        x: x,
        y: y,
    };
    return content;
}

function loadimages() {
    image.menue = createImage("ress/menue.png");
    image.cursor = createImage("ress/cursor.png");
    image.blank = createImage("ress/blank.png");
    image.whitescreen = createImage("ress/whitescreen.png");
    image.blackscreen = createImage("ress/blackscreen.png");
    image.lnk = createImage("ress/lnk.png");
    image.bouttosleep = createImage("ress/bouttosleep.png");
    image.kiiro1r_sketched = createImage("ress/sketched/1r.png");
    image.kiiro2r_sketched = createImage("ress/sketched/2r.png");
    image.kiiro3r_sketched = createImage("ress/sketched/3r.png");
    image.kiiro4r_sketched = createImage("ress/sketched/4r.png");
    image.kiiro5r_sketched = createImage("ress/sketched/5r.png");
    image.kiiro6r_sketched = createImage("ress/sketched/6r.png");
    image.kiiro7r_sketched = createImage("ress/sketched/7r.png");
    image.kiiro8r_sketched = createImage("ress/sketched/8r.png");
    image.kiiro9r_sketched = createImage("ress/sketched/9r.png");
    image.kiiro10r_sketched = createImage("ress/sketched/10r.png");
    image.kiiro1l_sketched = createImage("ress/sketched/1l.png");
    image.kiiro2l_sketched = createImage("ress/sketched/2l.png");
    image.kiiro3l_sketched = createImage("ress/sketched/3l.png");
    image.kiiro4l_sketched = createImage("ress/sketched/4l.png");
    image.kiiro5l_sketched = createImage("ress/sketched/5l.png");
    image.kiiro6l_sketched = createImage("ress/sketched/1l.png");
    image.kiiro7l_sketched = createImage("ress/sketched/2l.png");
    image.kiiro8l_sketched = createImage("ress/sketched/3l.png");
    image.kiiro9l_sketched = createImage("ress/sketched/4l.png");
    image.kiiro10l_sketched = createImage("ress/sketched/5l.png");
    image.kiiro0l_sketched = createImage("ress/sketched/0l.png");
    image.kiiro0r_sketched = createImage("ress/sketched/0r.png");
    image.kiiro0l_cestodian_sketched = createImage("ress/sketched/0l.png");
    image.kiiro0r_cestodian_sketched = createImage("ress/sketched/0r.png");
    image.kiiro1r = createImage("ress/standard/1r.png");
    image.kiiro2r = createImage("ress/standard/2r.png");
    image.kiiro3r = createImage("ress/standard/3r.png");
    image.kiiro4r = createImage("ress/standard/4r.png");
    image.kiiro5r = createImage("ress/standard/5r.png");
    image.kiiro6r = createImage("ress/standard/6r.png");
    image.kiiro7r = createImage("ress/standard/7r.png");
    image.kiiro8r = createImage("ress/standard/8r.png");
    image.kiiro9r = createImage("ress/standard/9r.png");
    image.kiiro10r = createImage("ress/standard/10r.png");
    image.kiiro1l = createImage("ress/standard/1l.png");
    image.kiiro2l = createImage("ress/standard/2l.png");
    image.kiiro3l = createImage("ress/standard/3l.png");
    image.kiiro4l = createImage("ress/standard/4l.png");
    image.kiiro5l = createImage("ress/standard/5l.png");
    image.kiiro6l = createImage("ress/standard/6l.png");
    image.kiiro7l = createImage("ress/standard/7l.png");
    image.kiiro8l = createImage("ress/standard/8l.png");
    image.kiiro9l = createImage("ress/standard/9l.png");
    image.kiiro10l = createImage("ress/standard/10l.png");
    image.kiirocr = createImage("ress/standard/cr.png");
    image.kiirocl = createImage("ress/standard/cl.png");
    image.kiiro0l = createImage("ress/standard/0l.png");
    image.kiiro0r = createImage("ress/standard/0r.png");
    image.kiiro0l_cestodian = createImage("ress/standard/0l.png");
    image.kiiro0r_cestodian = createImage("ress/standard/0r.png");
    image.midori0l = createImage("ress/midori/0l.png");
    image.midori0r = createImage("ress/midori/0r.png");
    image.riyu0r_sketched = createImage("ress/riyu/0r.png");
    image.kiiroguitar = createImage("ress/kiiro guitar sprite.png");
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