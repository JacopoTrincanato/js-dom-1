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

//4. creo una funzione che mi permetta di ripetere l'azione di accensione e spegnimento
//tu hai il tuo click del btn ... una volta cliccato devi vedere se la scritta è accendi ... se lo fai spegni mostrando un img e cambiando il testo se non lo è mostri un altra img e cambi con un altro testo

lampButton.addEventListener("click", ()=>{
    let btnText = lampButton;
    if(btnText === "Accendi") {
        btnText.textContent("Spegni");
        yellowLamp.classList.add("d-block");
        whiteLamp.classList.add("d-none");
    }else{
        btnText.textContent("Accendi");
        yellowLamp.classList.add("d-none");
        whiteLamp.classList.add("d-block");
    }
    
})
    

console.log(lampButton);


//cambiare il testo del bottone al click