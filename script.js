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
}

function chooseCard(element, index) {
    const secondFace = element.querySelector('.second-face');
    const img = element.querySelector('img');

    console.log({ img, secondFace })

    if (index === firstCard || index === secondCard) {
        return;
    }

    secondFace.classList.remove('hidden');
    img.classList.add('hidden');
    element.classList.add('back-face');

    if (firstCard === undefined) {
        firstCard = index;
        return;

    } else {
        secondCard = index;
    }
    console.log({ deckOfCards, c1: deckOfCards[firstCard], c2: deckOfCards[secondCard]})

    if (deckOfCards[secondCard] === deckOfCards[firstCard]) {
        numberOfCheckedCards += 2;
        console.log('iguais')
    } else {
        setTimeout(function(){
            console.log('oi')
            secondFace.classList.add('hidden');
            img.classList.remove('hidden');
            element.classList.toggle('back-face');
            firstCard = undefined;
            secondCard = undefined;
        },1000);

    }

}
