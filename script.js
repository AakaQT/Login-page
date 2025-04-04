let emailBox = document.querySelector(".email-box");
let emailBoxError = document.querySelector(".email-error-message");
let nameBox = document.querySelector(".name-box");
let nameBoxError = document.querySelector(".name-error-message");
let nameLengthError = document.querySelector(".name-length-error");
let passwordBox = document.querySelector(".password-box");
let passwordLengthError = document.querySelector(".password-length-error");
let passwordBoxError = document.querySelector(".password-error-message");
let signUpButton = document.querySelector(".button");
let logInButton = document.querySelector(".button-links");
let logOutButton = document.querySelector(".log-out-button");


function changeBorderColor(element) {
    element.classList.add("error");
}

function inputEmail (){
    if(emailBox.value === "") {
        changeBorderColor(emailBox);
        return false;
    }
    else{
        return true;
    }
} 

function inputPassword(){
    if(passwordBox.value === ""){
        changeBorderColor(passwordBox);
        return false;
    }
    else{
        return true;
    }
}

function passwordLength(){
    if(passwordBox.value.length < 8){
        changeBorderColor(passwordBox);
        return false
    }
    else{
        return true;
    }
}

function inputName(){
    if(nameBox.value === ""){
        changeBorderColor(nameBox);
        return false;
    }
    else {
        return true;
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
    else{
        return true;
    }
}

function signUpLink() {
    if(inputEmail() == true && inputName() == true && inputPassword() == true && nameLengthErrorText() == true && passwordLength() == true){
        window.location.href = "signed-up-page.html";
    }
}

function logInLink(){
    if(inputEmail() == true && inputPassword() == true){
        window.location.href = "logged-in-page.html";
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
    signUpLink();
})

logInButton.addEventListener('click', () => {
    inputPassword();
    passwordErrorText();
    inputEmail();
    emailErrorText();
    logInLink();
})

logOutButton.addEventListener('click', () => {
    logOutLink();
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
    nameLengthError.style.display = "none";
})

