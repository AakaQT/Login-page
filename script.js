let emailBox = document.querySelector(".email-box");
let emailBoxError = document.querySelector(".email-error-message");
let nameBox = document.querySelector(".name-box");
let nameBoxError = document.querySelector(".name-error-message");
let nameLengthError = document.querySelector(".name-length-error");
let passwordBox = document.querySelector(".password-box");
let passwordLengthError = document.querySelector(".password-length-error");
let passwordBoxError = document.querySelector(".password-error-message");
let signUpButton = document.querySelector(".button");
let LogInButton = document.querySelector(".button");


function changeBorderColor(element) {
    element.classList.add("error");
}

function inputEmail (){
    if(emailBox.value === "") {
        changeBorderColor(emailBox);
        return false;
    }
} 

function inputPassword(){
    if(passwordBox.value === ""){
        changeBorderColor(passwordBox);
        return false;
    }
}

function passwordLength(){
    if(passwordBox.value.length < 8){
        changeBorderColor(passwordBox);
        return false
    }
}

function inputName(){
    if(nameBox.value === ""){
        changeBorderColor(nameBox);
        return false;
    }
}

function emailErrorText(){
    if(inputEmail() == false) {
        emailBoxError.style.display = "block";
    }
}

function passwordErrorText(){
    if(inputPassword() == false) {
        passwordBoxError.style.display = "block";
    }
}

function nameErrorText(){
    if(inputName() == false){
        nameBoxError.style.display = "block";
    }
}

function passwordLengthErrorText(){
    if(passwordLength() == false){
        passwordLengthError.style.display = "block";
    }
}

function nameLengthErrorText(){
    if(nameBox.value.length > 30){
        changeBorderColor(nameBox);
        nameLengthError.style.display = "block";
        return false;
    }
}

signUpButton.addEventListener('click', () => {
    inputName();
    nameLengthErrorText();
    nameErrorText();
    inputPassword();
    passwordErrorText();
    inputEmail();
    emailErrorText();
    passwordLength();
    passwordLengthErrorText();
})

LogInButton.addEventListener('click', () => {
    inputPassword();
    passwordErrorText();
    inputEmail();
    emailErrorText();
})

emailBox.addEventListener('click', () => {
    emailBox.classList.remove("error");
    emailBoxError.style.display = "none";
})
passwordBox.addEventListener('click', () => {
    passwordBox.classList.remove("error");
    passwordBoxError.style.display = "none";
    passwordLengthError.style.display = "none";
})
nameBox.addEventListener('click', () => {
    nameBox.classList.remove("error");
    nameBoxError.style.display = "none";
})

