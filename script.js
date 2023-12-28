//creating grid of 16x16 square divs




// var existingDiv = document.getElementById('existingDiv');

  // Step 2: Create a new div element
 // var newDiv = document.createElement('div');

  // Step 3 (optional): Set properties and content for the new div
 // newDiv.setAttribute('id', 'newDiv');
 // newDiv.innerHTML = '<p>This is the new div.</p>';

  // Step 4: Append the new div to the existing div
 // existingDiv.appendChild(newDiv);
  







/*
const container = document.querySelector('container');
const div = document.createElement("div");
div.style.color = "red";
div.style.width = "100px";
div.style.height = "100px";
div.innerHTML = '<p>this is a box</p>';
container.appendChild(div);
console.log(div);
*/
let sizeOfGrid = 9;
const container = document.querySelector('.container');
const resetBtn = document.querySelector('button');



const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')


  for(let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div')
      row.classList.add('grid-row')
      
      for(let j = 0; j < amtOfGrids; j++) {
        const widthAndHeight = 960 / amtOfGrids
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width = `${widthAndHeight}px`
        gridBox.style.height = `${widthAndHeight}px`
        gridBox.addEventListener('mouseenter', () => {
          gridBox.style.backgroundColor = 'black';

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
