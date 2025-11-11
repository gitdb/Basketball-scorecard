let scoreHome = 0
let scoreGuest = 0
scoreHomeElement = document.getElementById("scoreHome-el")
scoreGuestElement = document.getElementById("scoreGuest-el")

scoreHomeElement.textContent = scoreHome
scoreGuestElement.textContent = scoreGuest

function homeAdd1() {
    scoreHome += 1 
    scoreHomeElement.textContent = scoreHome
}

function homeAdd2() {
    scoreHome += 2
    scoreHomeElement.textContent = scoreHome
}

function homeAdd3() {
    scoreHome += 3
    scoreHomeElement.textContent = scoreHome
}

function guestAdd1() {
    scoreGuest += 1 
    scoreGuestElement.textContent = scoreGuest
}

function guestAdd2() {
    scoreGuest += 2
    scoreGuestElement.textContent = scoreGuest
}

function guestAdd3() {
    scoreGuest += 3
    scoreGuestElement.textContent = scoreGuest
}