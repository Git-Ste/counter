console.log("ciao mondo")
/*contenitore generale del counter*/
const container = document.createElement("div");
container.classList.add("general-container")
document.body.appendChild(container) //appendo contenitore generale a body

/*titolo: "Counter */ 
const title = document.createElement("h1")
title.textContent = "Counter"
title.classList.add("title-counter")
container.appendChild(title) //appendo il titolo al contenitore


/*Contenitore del counter (dei bottoni e dello screen)*/ 
const counterContainer = document.createElement("div");
counterContainer.classList.add("counter-container")
container.appendChild(counterContainer) //appendo il contenitore del counter al contenitore generale

/*screen = dove l'utente vede il punteggio del counter*/
let counter = 0; //inizializzo variabile globale che tiene il conto = 0
const screen = document.createElement("div");
screen.classList.add("screen")
const numberCounter = document.createElement("p"); //numberCounter conterrà il punteggio
numberCounter.textContent = "0" //l'utente visualizza 0 appena aperto il counter
numberCounter.classList.add("counter-nunber")
counterContainer.appendChild(screen)
screen.appendChild(numberCounter)


/*pulsanti di incremento e decremento*/
const plus = document.createElement("button");
const minus = document.createElement("button");
plus.classList.add("increment-btn")
minus.classList.add("increment-btn")
plus.textContent = "+"
minus.textContent = "-"
counterContainer.appendChild(plus)
counterContainer.appendChild(minus)

/*funzione di incremento*/
plus.addEventListener("click", function(){
    if(counter != 1000000){
        counter++;
        numberCounter.textContent = counter.toString()
    }else{
        alert("Il counter arriva massimo a 1.000.000")
    }
})

/*funzione di decremento*/
minus.addEventListener("click", function(){
    if(counter === 0) //counter solo per numeri positivi
    {
        alert("Il counter non può essere negativo: per decrementarlo deve essere > 0");
    }else{
        counter--;
        numberCounter.textContent = counter.toString()
    }
})

/*pulsanti di reset e memorizza numberCounter*/
const resetBtn = document.createElement("button");
const saveBtn = document.createElement("button");
resetBtn.classList.add("btn", "reset-btn")
saveBtn.classList.add("btn", "save-btn")
resetBtn.textContent = "Reset"
saveBtn.textContent = "Salva Punteggio"
counterContainer.appendChild(resetBtn)
counterContainer.appendChild(saveBtn)

/*funzione reset*/
resetBtn.addEventListener("click", function(){
    counter = 0;
    numberCounter.textContent = counter.toString()
});



/*container dei punteggi salvati*/
const saveContainer = document.createElement("div");
saveContainer.classList.add("save-container");
//titolo salvataggio punteggi
const saveTitle = document.createElement("h3");
saveTitle.classList.add("save-title")
saveTitle.textContent = "Punteggi salvati"
saveContainer.appendChild(saveTitle)
//creazione lista
const saveList = document.createElement("ul");
saveList.classList.add("save-list")
saveContainer.appendChild(saveList)


/*funzione salva punteggio*/
let saveLimit = 0;
saveBtn.addEventListener("click", function(){
    document.body.appendChild(saveContainer);
    saveContainer.style.display = "block"
    saveList.style.display = "block"
    saveTitle.style.display = "block"
    if(saveLimit === 5){ //salva massimo 5 punteggi
        alert("Il massimo di punteggi che puoi salvare è 5")
    }else{
        saveLimit++;
        //creazione item
        const saveItem = document.createElement("li");
        saveItem.classList.add("save-item")
        saveList.appendChild(saveItem)
        //creazione testo item
        const saveText = document.createElement("span");
        saveText.classList.add("save-text")
        saveText.textContent =  `Score: ${counter.toString()}`
        saveItem.appendChild(saveText)
        //creazione btn elimina
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "elimina"
        saveItem.appendChild(deleteBtn)
        //pulsante per eliminare il punteggio salvato 
        deleteBtn.addEventListener("click",function(event){
            elimination(event);
        })

    }
})

/*funzione x eliminazione dello score salvato*/
function elimination(event){
    const clickedElement = event.target;
    if (clickedElement.classList.contains('delete-btn')) {
        const element = clickedElement.parentElement;
        saveList.removeChild(element);
        saveLimit--;
    }
    if(saveList.children.length === 0){ //se non ci sono score salvati scompare l'intero container
        saveContainer.style.display = "none"
    }}   

    





