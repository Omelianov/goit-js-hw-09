
const body = document.querySelector('body')
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function backgroundChangeColor() {
    const newColor = getRandomHexColor()
    body.style.backgroundColor = newColor
}

let timer
stopBtn.disabled = true

startBtn.addEventListener('click', () => {
    timer = setInterval(backgroundChangeColor, 1000)
    startBtn.disabled = true
    stopBtn.disabled = false
})

stopBtn.addEventListener('click', () => {
    clearInterval(timer)
    startBtn.disabled = false
    stopBtn.disabled = true
})





