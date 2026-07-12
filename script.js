const params = new URLSearchParams(window.location.search);

const text = params.get("text");

const pubg = params.get("pubg");

const message = document.getElementById("message");

if (pubg) {

    message.innerHTML =
    "🎮 PUBG PLAYER<br><br>UID : " + pubg;

}
else if (text) {

    message.innerText = decodeURIComponent(text);

}
else {

    message.innerText = "Welcome To MZ VEER";

}

function copyText(){

    navigator.clipboard.writeText(message.innerText);

    alert("Copied");

}
