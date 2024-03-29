//Variables Declaration
const cellMarkup = `<div class="square"></div>`;
const playBtn = document.getElementById("play");
//console.log(playBtn);
let container = document.getElementById("container");
//console.log(container);
const selection = document.getElementById("difficulty");
//console.log(selection);
const result = document.getElementById("result");
//console.log(result);
const counter = document.getElementById("counter");
//console.log(counter);
const gameResult = document.getElementById("game-result");
//console.log(gameResult);

// Generating cells based on difficulty
playBtn.addEventListener("click", startGame);

function startGame() {
  let gameOver = false;

  gameResult.innerHTML = "";

  counter.innerHTML = "";
  counter.innerHTML = "Remaining Cells : ";

  let clickCounter = 0;

  generateGrid();

  //Giving each cell a number
  const cellsArray = document.querySelectorAll(".square");
  //console.log(cellsArray);

  let remainingCells = cellsArray.length;

  //Generate the array with 16 random numbers
  const mushroomsArray = [];
  generateMushroomsArray(mushroomsArray, cellsArray.length);
  console.log(mushroomsArray);

  for (let i = 0; i < cellsArray.length; i++) {
    //Giving each cell inner text
    const element = cellsArray[i];
    element.innerHTML = i + 1;

    //Selecting all the cells that corrispond to array numbers
    let cellNumber = Number(cellsArray[i].innerHTML);
    if (mushroomsArray.includes(cellNumber)) {
      cellsArray[i].classList.add("dangerous");
    }
  }
  const dangerousCells = document.querySelectorAll(".dangerous");
  // console.log(dangerousCells);

  // Add class on click
  for (let i = 0; i < cellsArray.length; i++) {
    let cellNumber = Number(cellsArray[i].innerHTML);
    cellsArray[i].addEventListener("click", function () {
      console.log(gameOver);

      if (gameOver == false) {
        counter.innerHTML = "";
        counter.innerHTML = "Remaining Cells : ";

        //Check if the user clicked on a mashroom cell
        if (mushroomsArray.includes(cellNumber)) {
          gameOver = true;
          gameResult.innerHTML = "You Lost 😓";
          counter.innerText += remainingCells - clickCounter - 16;

          for (let i = 0; i < dangerousCells.length; i++) {
            dangerousCells[i].classList.add("mushroom-cell");
            dangerousCells[i].innerHTML = "💣";
          }
        } else if (
          !mushroomsArray.includes(cellNumber) &&
          gameOver == false &&
          !cellsArray[i].classList.contains("selected")
        ) {
          cellsArray[i].classList.add("selected");
          //console.log(`Il numero della cella selezionata è : ${cellsArray[i].innerHTML}`)
          clickCounter++;
          //console.log(clickCounter);
          counter.innerText += remainingCells - clickCounter - 16;

          if (remainingCells - clickCounter - 16 == 0) {
            gameOver = true;
            gameResult.innerHTML = "You Won ! 🎊";
            for (let i = 0; i < dangerousCells.length; i++) {
              dangerousCells[i].classList.add("mushroom-cell");
              dangerousCells[i].innerHTML = "💣";
            }
          }
        }
      }
    });
  }
}

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
