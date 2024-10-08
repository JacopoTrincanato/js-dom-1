//1. seleziono gli elementi della dom
const lampButton = document.getElementById("button");

const whiteLamp = document.querySelector(".off-lightbulb");

const yellowLamp = document.querySelector(".on-lightbulb");

//aggiungo la classe d-none all'elemento yellowLamp
yellowLamp.classList.add("d-none");
console.log(yellowLamp.classList);