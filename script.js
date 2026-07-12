const params = new URLSearchParams(window.location.search);

const text = params.get("text");

const message = document.getElementById("message");

if(text){

    message.innerText = decodeURIComponent(text);

}else{

    message.innerText = "Welcome To MZ VEER";

}

function copyText(){

    navigator.clipboard.writeText(message.innerText);

    alert("Text Copied");

}
