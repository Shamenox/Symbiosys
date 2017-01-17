var audio = {};
function loadAudio(){
    audio.steps = new Audio("ress/audio/steps.mp3");
    audio.guitar1 = new Audio("ress/audio/guitar1.mp3");
    audio.theme1 = new Audio("ress/audio/theme1.mp3");
	audio.snap = new Audio("ress/audio/snap.mp3");
	audio.cloth = new Audio("ress/audio/cloth.mp3");
	audio.concrete = new Audio("ress/audio/concrete.mp3");
	audio.theme2 = new Audio("ress/audio/the_dread.mp3");
}

var image = {
	quantity : 0,
	loaded : 0
};
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
