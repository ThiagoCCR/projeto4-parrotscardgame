const listOfCards = [
    "p1.gif", 
    "p2.gif", 
    "p3.gif", 
    "p4.gif", 
    "p5.gif", 
    "p6.gif", 
    "p7.gif"
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
        chosenCards.push(listOfCards[i]);
        chosenCards.push(listOfCards[i]);
    }
    chosenCards.sort(sortCards)
    displayCards()
}

function sortCards() {
	return Math.random() - 0.5; 
}

function displayCards(){
    const ul = document.querySelector("ul");

    for (let i=0; i<chosenCards.length; i++){
        const templateLi = `<li class="display-face" onclick="chooseCard(this)"><img class="front-face" src="./img/front.png"><img class="second-face hidden" src="./img/${chosenCards[i]}"></li>`
        ul.innerHTML += templateLi;
    }
}

function chooseCard(element){

    element.classList.toggle('back-face');

    const secondFace = element.querySelector('.second-face')
    secondFace.classList.remove('hidden')

    const displayFace = element.querySelector('.front-face')
    displayFace.classList.add('hidden')


}
