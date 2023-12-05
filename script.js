const statusE1 = document.getElementById('Status-e1')
const cardsE1 = document.getElementById('Cards-e1')
const sumE1 = document.getElementById('Sum-e1')
const winsE1 = document.getElementById('Wins-e1')
const LostE1 = document.getElementById('Lost-e1')
const TotalMatchesE1 = document.getElementById('TotalMatches-e1')
const nameContainerEl = document.getElementById('name-container')
const inputEl = document.getElementById('input-el')
const namecontainersEl = document.getElementById('name-containers')
const startGameEl = document.getElementById('startgame-el').disabled = true
const newcardEl = document.getElementById('newcard-el').disabled = true
const clearEl = document.getElementById('clear-el').disabled = true

let sum = 0
let randomNumber = 0
let hasGameStarted = false
let Wins = []
let Lost = []
let TotalMatches = []

function submitName() {

    if (inputEl.value != "") {
        document.getElementById("startgame-el").disabled = false;
        document.getElementById("newcard-el").disabled = false;
        document.getElementById("clear-el").disabled = false;
        namecontainersEl.innerHTML = `<h3>Welcome! ${inputEl.value}</h3> `
        inputEl.value = ""
    } else {
        alert("Please enter name")
    }
}

function getRandomNumber() {
    randomNumber = Math.floor((Math.random() * 8) + 2)
    return randomNumber
}

function startGame() {
    if (hasGameStarted === false) {
        let firstCard = getRandomNumber()
        let secondCard = getRandomNumber()
        statusE1.textContent = "Do you want draw a new card?"
        cardsE1.textContent = "Cards: " + firstCard + "," + secondCard
        sum = firstCard + secondCard
        sumE1.textContent = "Sum:" + sum
        hasGameStarted = true
    }

}

function newCard() {
    if (hasGameStarted === true) {
        let newCard = getRandomNumber()
        cardsE1.textContent += ", " + newCard
        sum += newCard
        sumE1.textContent = "Sum: " + sum
        playerCondition()
    }

}

function clarButton() {
    statusE1.textContent = "Want to play a round?"
    cardsE1.textContent = " Cards: "
    sumE1.textContent = " Sum: "
    sum = 0
    hasGameStarted = false
    winsE1.textContent = "Wins: "
    Wins = []
    LostE1.textContent = "Lost: "
    Lost = []
    TotalMatchesE1.textContent = "Total Matches played: "
    TotalMatches = []

}

function playerCondition() {
    if (sum === 21) {
        statusE1.textContent = "You have won the game!"
        hasGameStarted = false
        sum = 0
        Wins.push(1)
        winsE1.textContent = "Wins: " + Wins.length
        TotalMatches.push(1)
        TotalMatchesE1.textContent = "Total Matches played: " + TotalMatches.length
    } else if (sum > 21) {
        statusE1.textContent = "You have lost the game! Try again"
        hasGameStarted = false
        sum = 0
        Lost.push(1)
        LostE1.textContent = "Lost: " + Lost.length
        TotalMatches.push(1)
        TotalMatchesE1.textContent = "Total Matches played: " + TotalMatches.length
    }

}

