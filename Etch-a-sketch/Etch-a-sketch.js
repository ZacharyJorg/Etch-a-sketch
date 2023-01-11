//DOM manipulation
const root = document.documentElement;
let container = document.querySelector('.container')
const body = document.querySelector('body')
const buttons = document.createElement('div')
buttons.setAttribute('class', 'buttons')
const gridSize = document.createElement('button')
gridSize.setAttribute('class', 'gridSize')
gridSize.innerHTML = "Select a size";
body.append(buttons)
buttons.append(gridSize)

//ak user for grid creation size
let userInput = prompt("Please enter value 1-100");
//Function that creates the board based on the users input
function createGrid(userInput){
let squares = container.querySelectorAll("div")
squares.forEach((div) => div.remove())
if(userInput < 0){
    alert("Please enter a correct value")
    userInput = 16;
} else if (userInput > 100){
    alert("Please enter a correct value")
    userInput = 16;
}
for(let i = 0; i < (userInput*userInput); i++){
    const grid = document.createElement('div')
    grid.setAttribute('class', 'grids')
    container.append(grid)
    grid.addEventListener("mouseover", () => {
        grid.setAttribute('id', 'hovered')
    })
}
root.style.setProperty('--columns', userInput);
root.style.setProperty('--rows', userInput);
}
createGrid(userInput);

gridSize.addEventListener("click", () =>{
    let userInput = prompt("Please enter value 1-100");
    createGrid(userInput);
    })
