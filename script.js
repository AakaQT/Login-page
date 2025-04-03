let emailBox = document.querySelector(".email-box");
let nameBox = document.querySelector(".name-box");
let passwordBox = document.querySelector(".password-box");
let signUpButton = document.querySelector("button");
let passwordErrorMessage = document.querySelector(".password-error-message");
let emailErrorMessage = document.querySelector("#email-error-message");
let nameErrorMessage = document.querySelector(".name-error-message");

function changeBorderColor(element) {
    element.classList.add("error");
}

function inputEmail() {
    if (emailBox.value === "") {
        changeBorderColor(emailBox);
        return "Email field is empty";
    }
    return false;
}

function inputPassword () {
    if(passwordBox.value === "") {
        changeBorderColor(passwordBox);

        return "Password field is empty";
    }
    return false;
}

function inputName () {
    if(nameBox.value === ""){
        changeBorderColor(nameBox);
        return "Name field is empty";
    }
    return false;
}

function passwordLength(){
    if(passwordBox.value.length < 8) {
        changeBorderColor(passwordBox)
        return "Password is shorter than 8 characters";
    }
    return false;
} 

function raiseAlerts() {
    let alerts = [];
    let temp = inputEmail();

    if(temp != false) {
        alerts.push(temp);
    }
    temp = inputPassword();

    if(temp != false) {
        alerts.push(temp);
    }
    temp = inputName();

    if(temp != false) {
        alerts.push(temp);
    }
    temp = passwordLength();

    if (temp != false) {
        alerts.push(temp);
    }

    return alerts;
}

function emailErrorText () {
    if (inputEmail == false) {
        return false;
    }
    document.querySelector(".email-error-message").style.display = "block";
}

function passwordErrorText () {
    if(inputPassword == false) {
        return false;
    }
    document.querySelector(".password-error-message").style.display = "block";
}

function nameErrorText () {
    if(inputName == false) {
        return false;
    }
    document.querySelector(".name-error-message").style.display = "block";
}

function alertPrint(alerts) {
    for (let i = 0; i < alerts.length; i++) {
        alert(alerts[i]);
    }
}

signUpButton.addEventListener('click', () => {
    raiseAlerts();
    emailErrorText();
    passwordErrorText();
    nameErrorText();
    alertPrint(raiseAlerts());
})



