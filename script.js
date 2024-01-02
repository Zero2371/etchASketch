//creating grid of 16x16 square divs




// var existingDiv = document.getElementById('existingDiv');

  // Step 2: Create a new div element
 // var newDiv = document.createElement('div');

  // Step 3 (optional): Set properties and content for the new div
 // newDiv.setAttribute('id', 'newDiv');
 // newDiv.innerHTML = '<p>This is the new div.</p>';

  // Step 4: Append the new div to the existing div
 // existingDiv.appendChild(newDiv);
  
 //NEW CODE

const GRIDSIDE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector('#sketch-area');
const sliderContainer = document.querySelector('#sliderContainer');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');

sliderValue.textContent = `${slider.value} x ${slider.value} Resolution`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
  this.style.background = "black";
}
function createGridCells (squaresPerSide) {
  const numOfSquares = (squaresPerSide * squaresPerSide);
  const widthAndHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for( let i = 0; i < numOfSquares; i++) {
      const gridCell = document.createElement('div');

      gridCell.style.width = gridCell.style.height = widthAndHeight;
      gridCell.classList.add("cell");

      sketchArea.appendChild(gridCell);
      
      gridCell.addEventListener('mouseover', setBackgroundColor);
    }
}

function removeGridCells() {
  while (sketchArea.firstChild) {
      sketchArea.removeChild(sketchArea.firstChild);
  }

}

slider.oninput = function() {
  let txt = `${this.value} X ${this.value} (Resolution)`;
  sliderValue.innerHTML = txt;
  removeGridCells();
  createGridCells(this.value);
}

createGridCells(16);
































//    OLD CODE


 /*
let sizeOfGrid = 9;
const container = document.querySelector('.container');
const resetBtn = document.querySelector('button');
const sliderContainer = document.querySelector('#sliderContainer');
const slider = document.querySelector('#slider');
let sliderValue =document.querySelector('#sliderValue');


sliderValue.textContent = `${slider.value} x ${slider.value} (resolution) `;

const createRandomRGB = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return {r, g, b}
}


const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')


  for(let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div')
      row.classList.add('grid-row')
      
      for(let j = 0; j < amtOfGrids; j++) {
        const { r, g, b } = createRandomRGB()
        console.log('1 ', r, '2 ', g, '3 ', b)
        const widthAndHeight = 460 / amtOfGrids
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width = gridBox.style.height = `${widthAndHeight}px`;
        gridBox.addEventListener('mouseenter', ()=> {
          const bgColor = 'rgb(' + r + ',' + g + ',' + b +')';
          const currentOpacity = gridBox.style.opacity
        gridBox.style.backgroundColor = `rgb(0, 0, 0)`;
        if(currentOpacity) {
          gridBox.style.opacity = Number(currentOpacity) + .1
        } else {
          gridBox.style.opacity = .1
        }
        })
        row.appendChild(gridBox)
      }
      wrapper.appendChild(row)
  }
  container.appendChild(wrapper)
}
resetBtn.addEventListener('click', () => {
  let userSize = Number(prompt('what grid size would you prefer'))

  while(userSize > 64) {
  userSize = Number(prompt('pick a number of 64 or under'))
  }
  const wrapper = document.querySelector('.wrapper')
  if(!wrapper) {
    createGrid(userSize)
    
  } else {
    wrapper.remove()
    createGrid(userSize)
  }
})
function removeGrid() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

*/