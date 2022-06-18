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
let deckOfCards = [];
let firstCard;
let secondCard;
let numberOfCheckedCards = 0;
let firstCardElement;
let numberOfPlays = 0;
let idInterval;


function checkNumberOfCards() {
    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
        numberOfCards = prompt("Quantas cartas você quer utilizar?");
    }
    chooseCards()
}

checkNumberOfCards()

function chooseCards() {
    for (let i = 0; i < numberOfCards / 2; i++) {
        deckOfCards.push(listOfCards[i]);
        deckOfCards.push(listOfCards[i]);
    }
    deckOfCards.sort(sortCards)
    displayCards()
}

function sortCards() {
    return Math.random() - 0.5;
}

function displayCards() {
    const ul = document.querySelector("ul");

    for (let i = 0; i < deckOfCards.length; i++) {
        const templateLi = `<li class="display-face" onclick="chooseCard(this, ${i})"><img class="front-face" src="./img/front.png"><img class="second-face hidden" src="./img/${deckOfCards[i]}"></li>`
        ul.innerHTML += templateLi;
    }
    startTimer()
}

function startTimer(){
    let seconds=0;
    idInterval = setInterval(function countTime(){
    seconds++;
    document.querySelector('.seconds').innerHTML = seconds;
    }, 1000);
}


function chooseCard(element, index) {
    const secondFace = element.querySelector('.second-face');
    const img = element.querySelector('img');

    if (index === firstCard || index === secondCard) {
        return;
    }

    numberOfPlays += 1;
    secondFace.classList.remove('hidden');
    img.classList.add('hidden');
    element.classList.add('back-face');

    if (firstCard === undefined) {
        firstCard = index;
        firstCardElement = element;
        return;

    } else {
        secondCard = index;
    }

    if (deckOfCards[secondCard] === deckOfCards[firstCard]) {
        numberOfCheckedCards += 2;
        firstCard = undefined;
        secondCard = undefined;
    } else {
        setTimeout(function () {
            secondFace.classList.add('hidden');
            img.classList.remove('hidden');
            element.classList.toggle('back-face');
            firstCard = undefined;
            secondCard = undefined;
            firstCardElement.querySelector('.second-face').classList.add('hidden');
            firstCardElement.querySelector('img').classList.remove('hidden');
            firstCardElement.classList.toggle('back-face');
            firstCardElement = undefined;
        }, 1000);
    }
    setTimeout(countFlippedCards, 500)
}

function countFlippedCards() {
    if (numberOfCheckedCards === deckOfCards.length) {
        alert(`Você ganhou em ${numberOfPlays} jogadas!`)
        clearInterval(idInterval);
        idInterval = undefined;

    }
}
