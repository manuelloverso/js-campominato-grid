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

  for (let i = 0; i < cellsArray.length; i++) {
    const element = cellsArray[i];

    element.innerHTML = i + 1;
  }
  selectedCell();
});

function selectedCell() {
  const cellsArray = document.querySelectorAll(".square");

  // Add class on click
  for (let i = 0; i < cellsArray.length; i++) {
    cellsArray[i].addEventListener("click", function () {
      cellsArray[i].classList.add("selected");
      console.log(
        `Il numero della cella selezionata è : ${cellsArray[i].innerHTML}`
      );
    });
  }
}

//Function to generate 100 cells
function generateGrid() {
  if (container.childNodes.length > 0) {
    const singleCell = document.querySelectorAll(".square");

    for (let i = 0; i < singleCell.length; i++) {
      container.removeChild(singleCell[i]);
    }
  }
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
