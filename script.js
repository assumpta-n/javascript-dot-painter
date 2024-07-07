
function randomPrimaryColor() {
    return Math.floor(Math.random() * 256) 
}

function randomRgbColor() {
    return `rgb(${randomPrimaryColor()}, ${randomPrimaryColor()}, ${randomPrimaryColor()})`
}

const canvas = document.getElementById("canvas")
canvas.addEventListener("click", paintNewDot) //Change handler function from changeDotColor to paintNewDot

function paintNewDot(clickEvent) {
    const dot = document.createElement("div")
    dot.className = "dot"
    dot.style.backgroundColor = randomRgbColor() 
    dot.style.left = `${clickEvent.pageX}px` //Set the left position of the dot to match the horizontal coordinate of the pointer
    dot.style.top =  `${clickEvent.pageY}px` //Set the top position of the dot to match the vertical coordinate of the pointer
    canvas.appendChild(dot); 
    console.log(clickEvent) 
}



