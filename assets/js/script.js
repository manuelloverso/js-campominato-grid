//Variables Declaration
const cellMarkup = `<div class="square"></div>`;
const playBtn = document.getElementById("play");
console.log(playBtn);
const container = document.getElementById("container");
console.log(container);
const selection = document.getElementById("difficulty");
console.log(selection);

// Generating cells based on difficulty
playBtn.addEventListener("click", function () {
  if (selection.value == "easy") {
    generateEasy();
  } else if (selection.value == "mid") {
    generateMid();
  } else {
    generateHard();
  }

  //Giving each cell a number
  const cellsArray = document.querySelectorAll(".square");
  console.log(cellsArray);

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
function generateEasy() {
  for (let i = 0; i < 100; i++) {
    container.insertAdjacentHTML("beforeend", cellMarkup);
    const singleCell = document.querySelectorAll(".square");
    console.log(singleCell);
    singleCell[i].classList.add("easy");
  }
}

//Function to generate 81 cells
function generateMid() {
  for (let i = 0; i < 81; i++) {
    container.insertAdjacentHTML("beforeend", cellMarkup);
    const singleCell = document.querySelectorAll(".square");
    console.log(singleCell);
    singleCell[i].classList.add("mid");
  }
}

//Function to generate 49 cells
function generateHard() {
  for (let i = 0; i < 49; i++) {
    container.insertAdjacentHTML("beforeend", cellMarkup);
    const singleCell = document.querySelectorAll(".square");
    console.log(singleCell);
    singleCell[i].classList.add("hard");
  }
}
