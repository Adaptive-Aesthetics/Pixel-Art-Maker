//Select color input
const gridColorPicker = document.querySelector('#colorPicker');

// getting the elements and input values
const myCanvas = document.getElementById('pixelCanvas')
let heightInputValue = document.querySelector('#inputHeight').value;
const heightInputElement = document.querySelector('#inputHeight');
let widthInputValue = document.querySelector('#inputWidth').value;
const widthInputElement = document.querySelector('#inputWidth')
const form = document.getElementById('sizePicker');
console.log(myCanvas, heightInputValue, widthInputValue, form)



//element is the tile that we'll be inserting into the grid
let element = `<div style = 'border-left: 1px solid black;border-bottom: 1px solid black;' onclick = changeColor(event)></div>`

window.onload = () => { //initializing grid with 1 tile
    myCanvas.style.gridTemplateColumns = 'repeat(1,20px)'
    myCanvas.style.gridTemplateRows = 'repeat(1,20px)'
    myCanvas.innerHTML += element
}
/**
 * @desc changes color of tile clicked
 * @param {*} event event object from element that triggered listener
 */
function changeColor(event) {
    console.log('test')
    event.target.style.background = document.getElementById('colorPicker').value
}

/**
 * @desc creates the grid based on height and width input
 * @param {*} event- event object from element that triggered listener
 */
function makeGrid(event) {
    event.preventDefault()
    myCanvas.innerHTML = '' //clearing canvas html to insert new rows/columns

    row = event.target.children[0].value // event.target = form, children[0] = first input element
    column = event.target.children[1].value // event.target = form, children[1] = second input element

    //myCanvas element uses css grid to display grid
    myCanvas.style.gridTemplateColumns = `repeat(${column},20px)` //repeating 20px columns based off input value
    myCanvas.style.gridTemplateRows = `repeat(${row},20px)` //repeating 20px rows based off input value
    for (let i = 0; i < column * row; i++) { //inserts column * row number of tiles
        myCanvas.innerHTML += element
    }


}

