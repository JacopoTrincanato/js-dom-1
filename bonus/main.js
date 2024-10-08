//1. seleziono gli elementi della dom
const lampButton = document.getElementById("button");

const whiteLamp = document.querySelector(".off-lightbulb");

const yellowLamp = document.querySelector(".on-lightbulb");

//2. aggiungo la classe d-none all'elemento yellowLamp
yellowLamp.classList.add("d-none");
console.log(yellowLamp.classList);

//3. creo una funzione che mi permetta di ripetere l'azione di accensione e spegnimento

lampButton.addEventListener("click", ()=>{
    if(lampButton.textContent === "Accendi") {
        lampButton.textContent = "Spegni";
        yellowLamp.classList.add("d-block");
        whiteLamp.classList.add("d-none");
    }else{
        lampButton.textContent = "Accendi";
        yellowLamp.classList.remove("d-block");
        whiteLamp.classList.remove("d-none");
    }
    
})
    

console.log(lampButton);


//cambiare il testo del bottone al click