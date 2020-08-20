let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let text = document.getElementById("text");

function editTextOne(){
    text.innerText = "Left";
}

function editTextTwo(){
    text.innerText = "Right";
}

button1.addEventListener("click", editTextOne);
button2.addEventListener("click", editTextTwo);


function hoverWarning(){
    alert("Don't hover over me!");
}


let hover =  document.getElementById("header");
hover.addEventListener("mouseover", hoverWarning);

let login = document.getElementById("submitButton");
let password = document.getElementById("password");
let header = document.getElementById("h1");

function validate(){
    if(password.value === "12345678"){
        alert("Correct");
        header.innerHTML = "correct";
    }else{
        alert("Incorrect");
    }
}

login.addEventListener("click", validate)