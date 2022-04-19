//* Annica JS Start*//
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#sucess");
const errorNodes = document.querySelectorAll("#error");

function validateForm(){

clearMessages();

if(nameInput.value.length < 1){
  errorNodes[0].innerText = "Navn skal udfyldes";
  nameInput.classList.add("error-border");
}
if(!emailIsValid(email.value)){
  errorNodes[1].innerText = "Ugyldig email";
  email.classList.add("error-border");
}

if(message.value.length < 1){
  errorNodes[2].innerText = "Indtast din besked";
  message.classList.add("error-border");
}

}

function clearMessages(){
  for(let i = 0; i < errorNodes.length; i++){
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email){
  let pattern = /\S+@\S+/;
  return pattern.test(email);

}
