"use strict"

const wordSpan = document.querySelector('.mot')
const letters = document.querySelectorAll('.keyboard span')


let words = "automobile"
let splitedWord = []
let alreadyTestedLetters =[]










// Named Functions

function splitWord(a) {
    splitedWord = a.split("")
    console.log(splitedWord);
    initGame()
}
function initGame(){
    splitedWord.forEach(e=>{
        wordSpan.textContent += " _ "
    })
}

function testLetter(letter) {
    wordSpan.textContent = ""
    splitedWord.forEach(e => {

        if (letter == e) {
            wordSpan.textContent += e
        }
        else{
            wordSpan.textContent += " _ "
        }
    })
}
// listener
letters.forEach(e => {
    e.addEventListener('click', ()=>{
        alreadyTestedLetters.push(e.textContent)
        testLetter(e.textContent)
    })
})




// exec
splitWord(words)