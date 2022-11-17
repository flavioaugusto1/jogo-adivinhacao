//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1
console.log(randomNumber)

//Eventos
btnTry.addEventListener("click", handleClick)
btnReset.addEventListener("click", returnScreen)
document.addEventListener("keydown", enterReset)

//Função callback
function handleClick(e) {
    e.preventDefault()

    let inputNumber = document.querySelector("#inputNumber")

    // Verifica se o número infomardo está vazio e para a function para evitar execução
    if (inputNumber.value == "") {
        alert("Não foi informado um número")
        xAttemps = 0
        return
    }

    if (inputNumber.value < 0 || inputNumber.value > 10) {
        alert("Número informado não está entre 0 e 10")
    }

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2")
            .innerHTML = `Você acertou em ${xAttemps} tentativas.`
    }

    inputNumber.value = ""
    xAttemps++
}

function returnScreen() {
    toggleScreen()
    xAttemps = 1

    randomNumber = Math.round(Math.random() * 10)
}

// Verifica se as classes screens possuem ou não o hide e incrementa ou remove
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterReset(e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
        toggleScreen()
    }
}