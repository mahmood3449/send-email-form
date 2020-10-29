// variabls
let form = document.querySelector("#email-form");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let sendBtn = document.querySelector("#sendBtn");
let resetBtn = document.querySelector("#resetBtn");
let spinner = document.querySelector("#spinner");
let loaders = document.querySelector("#loaders");
// addEventListeners
//addEventListeners for disabl btnsend
document.addEventListener("DOMContentLoaded" , function(){
    sendBtn.disabled = true;
})
//addEventListeners for validate form
email.addEventListener("blur" , validateFild);
subject.addEventListener("blur" , validateFild);
message.addEventListener("blur" , validateFild);
// addEventListeners for restbtn form
resetBtn.addEventListener("click" , restForm);
//addEventListeners for send email
form.addEventListener("submit" , sendMessage);
//functions
//functions for validate foerm
function validateFild(){
//if input is empty 
    if(this.value == ""){
        this.style.borderBottom = "1px solid red";
        this.classList.add("error");
    }
    else{
        this.style.borderBottom = "1px solid green";
        this.classList.remove("error");
    }
    if(this.type == "email"){
        if(this.value.includes("@") == true){
        this.style.borderBottom = "1px solid green";
        this.classList.remove("error");
        }
        else{
        this.style.borderBottom = "1px solid red";
        this.classList.add("error");
        }
    }
    let error = document.querySelectorAll(".error");
    if(email.value != "" && subject.value != "" && message.value != ""){
        if(error.length == 0){
            sendBtn.disabled = false;
        }
    } 
}
//functions for rest form
function restForm(e){
    e.preventDefault();
    form.reset();
}
//functions for sent email
function sendMessage(e){
    e.preventDefault();
    spinner.style.display = "block";
    setTimeout(() => {
    spinner.style.display = "none";
    let img = document.createElement("img");
    img.src = "mail.gif"
    img.style.display = "block"
    loaders.appendChild(img);
    setTimeout(() => {
        img.style.display = "none"
        form.reset();
        sendBtn.disabled = true;
        }, 3000);
    }, 3000);
}
