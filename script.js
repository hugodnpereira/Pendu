"use strict"

const wordSpan = document.querySelector('.mot')
const letters = document.querySelectorAll('.keyboard span')

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


let words = "automobile"
let splitedWord = []
let alreadyTestedLetters =[]
let isinWord = false
let test = 0








function resize() {
    canvas.width = 300
    canvas.height = 300
}



function drawPotence() {
    ctx.strokeStyle="white"
    ctx.lineWidth = 3;
    ctx.lineCap = "square"
    ctx.moveTo(150,250)
    ctx.lineTo(200,250)
    ctx.moveTo(200,250)
    ctx.lineTo(225,250)

    ctx.moveTo(200,250)
    ctx.lineTo(200,100)
    ctx.lineTo(150,100)
    
    ctx.stroke()
}






// Named Functions

function splitWord(a) {
    splitedWord = a.split("")
    initGame()
}
function initGame(){
    splitedWord.forEach(e=>{
        wordSpan.textContent += " _ "
    })
}
function drawErrors(params) {
    if (params == 1) {
        ctx.moveTo(150,100)
        ctx.lineTo(150,125)
        ctx.stroke()
    }
    if (params == 2) {
        ctx.moveTo(160,135)
        ctx.arc(150,135,10,0,2*Math.PI)
        ctx.stroke()
    }
    if (params == 3) {
        ctx.moveTo(150,145)
        ctx.lineTo(150,175)
        
        ctx.stroke()
    }
    if (params == 4) {
        ctx.moveTo(150,175)
        ctx.lineTo(160,210)
        ctx.moveTo(150,175)
        ctx.lineTo(140,210)

        
        ctx.stroke()
    }
    if (params == 5) {
        ctx.moveTo(150,150)
        ctx.lineTo(160,180)
        ctx.moveTo(150,150)
        ctx.lineTo(140,180)
        ctx.stroke()
    }
    
}



function testLetter(letter) {
    alreadyTestedLetters.push(letter)
    console.log(letter);
    console.log(alreadyTestedLetters)
    console.log(splitedWord)
    
    let founded = 0
    


    splitedWord.forEach(a=>
    {
        let hasBeenTested = false
        alreadyTestedLetters.forEach(b =>{
            if (a == b) {
                hasBeenTested = true
                test = test+1
            }
        })
        if (hasBeenTested)
        {
            wordSpan.textContent += " "+a+" "
            founded = founded+1
        }
        else
        {
            wordSpan.textContent += " _ "
        }
        
    })
    if (/^[a-zA-Z\s]*$/.test(wordSpan.textContent))
    {
        wordSpan.textContent = `C'était bien le mot " ${words} " qu'il fallait trouver ! Bravo !`
    }
    if (alreadyTestedLetters.length >= 5+founded)
    {
        wordSpan.textContent = `C'était le mot " ${words} " qu'il fallait trouver. Dommage...`
    }
    let errors = alreadyTestedLetters.length-founded
    drawErrors(errors)
}


// listener
letters.forEach(e => {
    e.addEventListener('click', ()=>{
        wordSpan.textContent = ""
        e.style.boxShadow = "0px 0px 2px 1px rgba(0, 0, 0, 0.4) inset"
        console.log(e)
        testLetter(e.textContent)
    })
})




// exec
resize()
splitWord(words)
drawPotence()



















