//* SØREN JS START *//
const startingMinutes = 0.1;
let time = startingMinutes * 60;

let links = [
  "Forside",
  "Historie",
  "Forestillingen",
  "Biletter"
]

const myLinks = document.getElementById("myLinks");
const countdownEl = document.getElementById("countdown");
const ticketButton = document.getElementById("ticketButton");

// for (let index = 0; index < links.length; index++) {
//   const element = links[index];
//   myLinks.append("<a href="+element+">"+element+"</a>")
// }

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
