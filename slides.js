//* TRINE JS START *//

let k = 0; 			
let images = [];	
let time = 10000;	

images[0] = "img/pic1.jpg";
images[1] = "img/pic2.jpg";
images[2] = "img/pic3.jpg";

function changeImg(){
	document.getElementById("slide").src = images[k];

	if(k < images.length - 1){
	  k++; 
	} else { 
		k = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;

//* TRINE JS SLUT *//