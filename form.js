//* Annica JS Start*//

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

let navne = ['Tak for din besked', 'Din besked er sendt! ', 'Vi vil svare tilbage'];

function validateForm(){

clearMessages();
let errorFlag = false;

if(nameInput.value.length < 1){
  errorNodes[0].innerText = "Navn skal udfyldes";
  nameInput.classList.add("error-border");
  errorFlag = true;
}
if(!emailIsValid(email.value)){
  errorNodes[1].innerText = "Ugyldig email";
  email.classList.add("error-border");
  errorFlag = true;
}

if(message.value.length < 1){
  errorNodes[2].innerText = "Indtast din besked";
  message.classList.add("error-border");
  errorFlag = true;
}
if(!errorFlag){
document.getElementById('success').innerText = navne[1];
}

}

function clearMessages(){
  for(let i = 0; i < errorNodes.length; i++){
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email){
  let pattern = /\S+@\S+/;
  return pattern.test(email);
}


  document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
  });
  
  document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
  });