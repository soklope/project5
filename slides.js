//* TRINE JS START *//

let i = 0; 			
let images = [];	
let time = 10000;	

images[0] = "img/pic1.png";
images[1] = "img/pic2.png";
images[2] = "img/pic3.png";

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;

//* TRINE JS SLUT *//