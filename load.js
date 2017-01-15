function loadAudio(){
    audio.steps = new Audio("ress/audio/steps.mp3");
    audio.guitar1 = new Audio("ress/audio/guitar1.mp3");
    audio.theme1 = new Audio("ress/audio/theme1.mp3");
	audio.snap = new Audio("ress/audio/snap.mp3");
	audio.cloth = new Audio("ress/audio/cloth.mp3");
	audio.concrete = new Audio("ress/audio/concrete.mp3");
	audio.theme2 = new Audio("ress/audio/the_dread.mp3");
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

    for (var res in resources) {
        if (resources.hasOwnProperty(res)) {
            image[res] = createImage(resources[res]);
        }
    }

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
    //hier passiert nichts mehr mit xx1 TODO
}
