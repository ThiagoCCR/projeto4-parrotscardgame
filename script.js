const listOfCards = [
    "borossparrot.gif", 
    "explodyparrot.gif", 
    "fiestaparrot.gif", 
    "metalparrot.gif", 
    "revertitparrot.gif", 
    "tripletsparrot.gif", 
    "unicornparrot.gif"
]
let numberOfCards = prompt("Quantas cartas você quer utilizar?");
let chosenCards = [];

function checkNumberOfCards(){
    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards%2!==0){
        numberOfCards = prompt("Quantas cartas você quer utilizar?");
    }
    chooseCards()
}

checkNumberOfCards()

function chooseCards(){

    for(let i=0; i<numberOfCards/2; i++){
        
    }
}