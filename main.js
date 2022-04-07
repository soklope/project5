
//* TRINE JS START *//
function myFunction() {
    let x = document.getElementById("myLinks");
   
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let i = 0;
const images = [
    'pictures/pic1.png',
    'pictures/pic2.png',
    'pictures/pic3.png' 
    ];

function forward(){

      document.getElementById("slideshow").src = images[i];

    if(i < images.length - 1){
      i++;
    }
}

//* TRINE JS SLUT *//
