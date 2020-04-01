var valstore = {
    emailLegit: false,
    nameLegit: false,
    zipcodeLegit: false,
    passwordLegit: false,
    repeatPasswordLegit: false,
}


const email = document.querySelector("#email");
const emailerror = document.querySelector("#emailerror");
email.addEventListener('input', () => {
    if(email.validity.valid){
        emailerror.textContent = ""; 
        valstore.emailLegit = true;
    }
    else{
        valstore.emailLegit = false;
        emailError();
    }
});

//show what the email error is
function emailError(){
    if(email.validity.valueMissing){
        //display error message if field left empty
        emailerror.textContent = "field must be filled";
    }
    else if(email.validity.typeMismatch){
        //display error message if not email address
        emailerror.textContent = "not an email address!";
    }
    else if(email.validity.tooShort){
        //display the following error message
        emailerror.textContent = "too short for a valid email address!";
    }
} 
    
const name = document.querySelector("#name");
const nameerror = document.querySelector("#nameerror");
name.addEventListener('input', () => {
    if(name.validity.valid){
        nameerror.textContent = "";
        valstore.nameLegit = true;
    }
    else{
        valstore.nameLegit = false;
        nameError();
    }
});

//show what the name error is
function nameError(){
    if(name.validity.valueMissing){
        //display error message if field left empty
        nameerror.textContent = "field must be filled"; 
    }
}

const zipcode = document.querySelector("#zip");
const ziperror = document.querySelector("#ziperror");
zipcode.addEventListener('input', () => {
    if(zipcode.validity.valid && !isNaN(zipcode.value)){
        //remove error message
        ziperror.textContent = "";
        valstore.zipcodeLegit = true;
    }
    else{
        zipcodeError();
        valstore.zipcodeLegit = false;
    }
});

//show what the zipcode error is
function zipcodeError(){
    if(zipcode.validity.valueMissing){
        //display error message if field left empty
        ziperror.textContent = "field must be filled";
    }
    else if(isNaN(zipcode.value)){
        ziperror.textContent = "not a valid zip code";
    }
    else if(zipcode.validity.typeMismatch || zipcode.validity.tooLong || zipcode.validity.tooShort){
        //display error message if not a zipcode
        ziperror.textContent = "not a valid zipcode!"
    }
} 


const password = document.querySelector("#password");
const passworderror = document.querySelector("#passworderror");
const passwordconf = document.querySelector("#confirmpassword");
const passwordconferror = document.querySelector("#confirmerror");

password.addEventListener('input', () => {
    passwordStore = password.value;
    if(password.validity.valid){
        //remove error message
        passworderror.textContent = ""; 
        valstore.passwordLegit = true;
    }
    else{
        passwordError()
        valstore.passwordLegit = false;
    }
});

function passwordError(){
    if(password.validity.valueMissing){
        //display error message if field left empty
        passworderror.textContent = "field must be filled";
    }
    else if(password.validity.tooShort){
        //display the following error message
        passworderror.textContent = "password must be at least 6 characters long!";
    }
    if(passwordconf.value == password.value){
        //remove error message
        passwordconferror.textContent = "";
    }
    else{
        passwordconferror.textContent = "Passwords do not match!";
    }
}


passwordconf.addEventListener('input', () => {
    if(passwordconf.value == password.value){
        //remove error message
        passwordconferror.textContent = "";
        valstore.repeatPasswordLegit = true; 
    }
    else{
        passwordconferror.textContent = "Passwords do not match!";
        valstore.repeatPasswordLegit = false;
    }
});

const form = document.querySelector("#form");
form.addEventListener('submit', () => {
    const values = Object.values(valstore);
    for(const val of values) {
        if(!val){
            event.preventDefault();
            return;
        }
    }
});

