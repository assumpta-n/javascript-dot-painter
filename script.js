// function randomColorValue() {
//     return Math.floor(Math.random() * 256)
// }

// function randomColor() {
//     return `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`
// }

// function paintNewDot(clickEvent) {
//     const dot = document.createElement("div")
//     dot.className = "dot"
//     dot.style.left = clickEvent.pageX - 7 + "px"
//     dot.style.top = clickEvent.pageY - 7  + "px"
//     dot.style.backgroundColor = randomColor()
//     canvas.appendChild(dot)
//     console.log(clickEvent)
// }

// const canvas = document.getElementById("canvas")
// canvas.addEventListener("click", paintNewDot)