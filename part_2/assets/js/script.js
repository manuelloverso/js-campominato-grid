//Variables Declaration
const cellMarkup = `<div class="square"></div>`;
const playBtn = document.getElementById("play");
//console.log(playBtn);
let container = document.getElementById("container");
//console.log(container);
const selection = document.getElementById("difficulty");
//console.log(selection);

// Generating cells based on difficulty
playBtn.addEventListener("click", function () {
  generateGrid();

  //Giving each cell a number
  const cellsArray = document.querySelectorAll(".square");
  //console.log(cellsArray);

  //Generate the array with 16 random numbers
  const mushroomsArray = [];
  generateMushroomsArray(mushroomsArray, cellsArray.length);
  console.log(mushroomsArray);

  for (let i = 0; i < cellsArray.length; i++) {
    const element = cellsArray[i];
    element.innerHTML = i + 1;
  }

  // Add class on click
  for (let i = 0; i < cellsArray.length; i++) {
    let cellNumber = Number(cellsArray[i].innerHTML);
    cellsArray[i].addEventListener("click", function () {
      //Check if the user clicked on a mashroom cell
      if (mushroomsArray.includes(cellNumber)) {
        cellsArray[i].classList.add("mushroom-cell");
        cellsArray[i].innerHTML = "🍄";
      } else {
        cellsArray[i].classList.add("selected");
        console.log(
          `Il numero della cella selezionata è : ${cellsArray[i].innerHTML}`
        );
        clickCounter++;
      }
    });
  }
});

let clickCounter = 0;

//Function to generate cells
function generateGrid() {
  container.innerHTML = "";

  if (selection.value == "easy") {
    for (let i = 0; i < 100; i++) {
      container.insertAdjacentHTML("beforeend", cellMarkup);
      const singleCell = document.querySelectorAll(".square");

      //console.log(singleCell);
      singleCell[i].classList.add("easy");
    }
  } else if (selection.value == "mid") {
    for (let i = 0; i < 81; i++) {
      container.insertAdjacentHTML("beforeend", cellMarkup);

      const singleCell = document.querySelectorAll(".square");
      //console.log(singleCell);
      singleCell[i].classList.add("mid");
    }
  } else {
    for (let i = 0; i < 49; i++) {
      container.insertAdjacentHTML("beforeend", cellMarkup);

      const singleCell = document.querySelectorAll(".square");
      //console.log(singleCell);
      singleCell[i].classList.add("hard");
    }
  }
}

// Generate an array with 16 random different numbers
function generateMushroomsArray(array, cellNumb) {
  while (array.length < 16) {
    let randomNumb = Math.floor(Math.random() * cellNumb) + 1;
    if (!array.includes(randomNumb)) {
      array.push(randomNumb);
    }
  }
  return array;
}
