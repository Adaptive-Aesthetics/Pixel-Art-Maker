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


window.onload = () => {
    myCanvas.style.gridTemplateColumns = 'repeat(1,20px)'
    myCanvas.style.gridTemplateRows = 'repeat(1,20px)'
}

function test(event){
    console.log('test')
    event.target.style.background = 'blue'
}

let element = `<div style = 'background: red;' onclick = test(event)></div>`

for (var i = 0;  i<= 1; i++) {
    
   
    myCanvas.innerHTML += element
} 

function makeGrid(row, column) {
    for (var i = 0;  i<= row-1; i ++) {

    } 
// Your code goes here!

}

columnEl.addEventListener('change', (event) =>{
    column = event.target.value
    console.log('hello')
    myCanvas.style.gridTemplateColumns = `repeat(${event.target.value},20px)`
    for(let i = 0; i < column * row; i++){
        myCanvas.innerHTML += element
    }
})

rowEl.addEventListener('change', (event) =>{
    row = event.target.value
    console.log('hello')
    myCanvas.style.gridTemplateRows = `repeat(${event.target.value},20px)`
    for(let i = 0; i < column * row; i++){
        myCanvas.innerHTML += element
    }
})