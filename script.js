const calc = document.getElementsByClassName('calc') 
const btn = document.querySelector('#btn')
const firstComopnent = document.getElementById('primaryNumber')
const secondComponent = document.getElementById('secondaryNumber')
const answer = document.getElementById('guess')



const randomNumber1 = Math.floor(Math.random() * 100)
const randomNumber2 = Math.floor(Math.random() * 100)

firstComopnent.innerText = randomNumber1
secondComponent.innerText = randomNumber2

let total = randomNumber1 + randomNumber2


function answerUser() {
    let userAnswer = parseInt(answer.value)
    if (userAnswer === total) {
        alert('Congratulations, your answer is correct'), window.location.reload()
    } else {
        alert('Sorry, your answer is incorrect'), window.location.reload()
    }
}

btn.addEventListener('click', answerUser)
