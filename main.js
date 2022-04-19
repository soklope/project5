
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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#00000090";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#00000000";
  }
//* ANNICA JS START *//




//* ANNICA JS SLUT *//
