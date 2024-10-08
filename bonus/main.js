//1. seleziono gli elementi della dom
const lampButton = document.getElementById("button");

const whiteLamp = document.querySelector(".off-lightbulb");

const yellowLamp = document.querySelector(".on-lightbulb");

//2. aggiungo la classe d-none all'elemento yellowLamp
yellowLamp.classList.add("d-none");
console.log(yellowLamp.classList);

//3. creo una funzione che mi permetta di visualizzare la lampadina accesa quando clicco il bottone
lampButton.addEventListener("click", ()=>{
    yellowLamp.classList.add("d-block");
    whiteLamp.classList.add("d-none");
})