const container = document.querySelector('.container')
const body = document.querySelector('body')
const buttons = document.createElement('div')
buttons.setAttribute('class', 'buttons')
const gridSize = document.createElement('button')
gridSize.setAttribute('class', 'gridSize')
gridSize.innerHTML = "Select a size";
body.append(buttons)
buttons.append(gridSize)

for(let i = 0; i < 256; i++){
    const grid = document.createElement('div')
    grid.setAttribute('class', 'grids')
    container.append(grid)
}

gridSize.addEventListener("click", () => {
    for(let i = 0; i < 1; i++){
    const gridSize = prompt("Please enter the size of the grid you want");
    if(gridSize >= 101){
        alert('Please enter a valid number')
        i--;
    } else  if(gridSize <= 0){
        alert('Please enter a valid number')
        i--;
    } else {
        for(let j = 0; j < 5; j++){
            alert(Math.pow(gridSize, 2));
        }
    }
}
})





