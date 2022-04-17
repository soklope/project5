//* SØREN JS START *//
const startingMinutes = 0.1;
let time = startingMinutes * 60;

const myLinks = document.getElementById("myLinks");
const countdownEl = document.getElementById("countdown");
const ticketButton = document.getElementById("ticketButton");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (minutes < 10){
    countdownEl.innerHTML = `0${minutes}:${seconds}`
  }
  else { 
    countdownEl.innerHTML = `${minutes}:${seconds}`    
  }

  if (time <= 0){
    addTicket()
    return
  }
  else {
    time--;
  }
}

function addTicket() {
  ticketButton.style.backgroundColor = "black";
}





let i = 0; 			
let images = [];	
let timer = 7000;	

images = [
  "img/pic1.jpg",
  "img/pic2.jpg",
  "img/pic3.jpg"
]

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", timer);
}

window.onload=changeImg;


//* SØREN JS SLUT *//




//* TRINE JS START *//

function myFunction() {
  let x = document.getElementById("myLinks");
 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//* TRINE JS SLUT *//
