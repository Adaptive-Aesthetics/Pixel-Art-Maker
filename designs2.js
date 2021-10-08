// Select color input
const color = document.querySelector('#colorPicker');
// Select size input
const myCanvas = document.getElementById('pixelCanvas')
let row = document.querySelector('#inputHeight').value;
const rowEl = document.querySelector('#inputHeight');
let column = document.querySelector('#inputWidth').value; 
const columnEl = document.querySelector('#inputWidth')
const size = document.getElementById('sizePicker');
// size.addEventListener('click', )
console.log(myCanvas, row, column, size)
// When size is submitted by the user, call makeGrid()


let element = `<div style = 'border-left: 1px solid black;border-bottom: 1px solid black;' onclick = changeColor(event)></div>`

window.onload = () => {
    myCanvas.style.gridTemplateColumns = 'repeat(1,20px)'
    myCanvas.style.gridTemplateRows = 'repeat(1,20px)'
    myCanvas.innerHTML += element
}

function changeColor(event){
    console.log('test')
    event.target.style.background = document.getElementById('colorPicker').value
}




    


function makeGrid(event) {
    event.preventDefault()

    console.log(document.getElementById('colorPicker').value)

    myCanvas.innerHTML = ''
    
    console.log(event.target)
    console.log(event.target.children[0].value, 'HEIGHT')


    row  = event.target.children[0].value
    column = event.target.children[1].value
    
    myCanvas.style.gridTemplateColumns = `repeat(${column},20px)`
    myCanvas.style.gridTemplateRows = `repeat(${row},20px)`
    for(let i = 0; i < column * row; i++){
        myCanvas.innerHTML += element
    }

// Your code goes here!

}

// columnEl.addEventListener('change', (event) =>{
    
// })

// rowEl.addEventListener('change', (event) =>{
//     row = event.target.value
//     console.log('hello')
    
//     for(let i = 0; i < column * row; i++){
//         myCanvas.innerHTML += element
//     }
// })