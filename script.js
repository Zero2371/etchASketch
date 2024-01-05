//creating grid of 16x16 square divs



  
 //NEW CODE

const GRIDSIDE = 600;
let squaresPerSide = 16;
const DEFAULT_COLOR = '#00ffff';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE

let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor) {
  currentColor = newColor
}
function setCurrentMode(newMode) {
  activateButton(newMode) 
  currentMode = newMode
}
function setCurrentSize(newSize) {
  currentSize = newSize
}

const sketchArea = document.querySelector('#sketch-area');
const sliderContainer = document.querySelector('#sliderContainer');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rgbBtn = document.getElementById('rgbBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rgbBtn.onclick = () => setCurrentMode('rgb')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()

sliderValue.textContent = `${slider.value} x ${slider.value} Resolution`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

 let mouseDown = false
 document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function reloadGrid() {
  clearGrid()
  createGridCells(squaresPerSide)
}

function clearGrid() {
  sketchArea.innerHTML = ''
}
function createGridCells (squaresPerSide) {
  const numOfSquares = (squaresPerSide * squaresPerSide);
  const widthAndHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for( let i = 0; i < numOfSquares; i++) {
      const gridCell = document.createElement('div');

      gridCell.style.width = gridCell.style.height = widthAndHeight;
      gridCell.classList.add("cell");
      
       gridCell.addEventListener('mousedown', changeColor);
       gridCell.addEventListener('mouseover', changeColor);
       sketchArea.appendChild(gridCell);
     
    
    }
}

function removeGridCells() {
  while (sketchArea.firstChild) {
      sketchArea.removeChild(sketchArea.firstChild);
  }

}
//function to change grid size
slider.oninput = function() {
  let txt = `${this.value} X ${this.value} (Resolution)`;
  sliderValue.innerHTML = txt;
  removeGridCells();
  createGridCells(this.value);
}
function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'rgb') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe'
  }
}
function activateButton(newMode) {
  if (currentMode === 'rgb') {
    rgbBtn.classList.remove('active')
  } else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
  }

  if (newMode === 'rgb') {
    rgbBtn.classList.add('active')
  } else if (newMode === 'color') {
    colorBtn.classList.add('active')
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
  }
}

// createGridCells(16);
window.onload = () => {
  createGridCells(squaresPerSide)
  activateButton(DEFAULT_MODE)
}
































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