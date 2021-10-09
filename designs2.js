//Select color input
const tableCellColor = document.querySelector('#colorPicker');

// Select size input
const myCanvas = document.getElementById('pixelCanvas')
let tableRowsCount = document.querySelector('#inputHeight').value;
const tableRowsCountEl = document.querySelector('#inputHeight');
let tableColumnsCount = document.querySelector('#inputWidth').value; 
const tableColumnsCountEl = document.querySelector('#inputWidth')
const sizePicker = document.getElementById('sizePicker');
console.log(myCanvas, tableRowsCount, tableColumnsCount, sizePicker)

/**
 * @desc styling and behavior of grid squares once the grid is generated
 */

let element = `<div style = 'border-left: 1px solid black;border-bottom: 1px solid black;' onclick = changeColor(event)></div>`

window.onload = () => {
    myCanvas.style.gridTemplateColumns = 'repeat(1,20px)'
    myCanvas.style.gridTemplateRows = 'repeat(1,20px)'
    myCanvas.innerHTML += element
}
/**
 * @desc the color picker is linked to the grid of squares
 * @param {*} event you can change the color of the square when its clicked
 */
function changeColor(event){
    console.log('test')
    event.target.style.background = document.getElementById('colorPicker').value
}

/**
 * @desc creates a grid with squares
 * @param {*} event- starts grid when height and width input is submitted
 */
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


}

