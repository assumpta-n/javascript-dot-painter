

function randomPrimaryColor() {
    return Math.floor(Math.random() * 256) 
}

function randomRgbColor() {
    return `rgb(${randomPrimaryColor()}, ${randomPrimaryColor()}, ${randomPrimaryColor()})`
}

// function paintNewDot(clickEvent) {
//     const dot = document.createElement("div")
//     dot.className = "dot"
//     dot.style.left = clickEvent.pageX - 7 + "px"
//     dot.style.top = clickEvent.pageY - 7  + "px"
//     dot.style.backgroundColor = randomRgbColor()
//     canvas.appendChild(dot)
// }

// const canvas = document.getElementById("canvas")
// canvas.addEventListener("click", paintNewDot)

