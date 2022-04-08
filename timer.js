//* SØREN JS START *//
const startingMinutes = 60;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`
  time--;
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
