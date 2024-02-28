//Variables Declaration
const cellMarkup = `<div class="square"></div>`;
const playBtn = document.getElementById("play");
console.log(playBtn);
const container = document.getElementById("container");
console.log(container);

// Generating cells
playBtn.addEventListener("click", function () {
  for (let i = 0; i < 100; i++) {
    container.insertAdjacentHTML("beforeend", cellMarkup);
  }

  //Giving each cell a number
  const cellsArray = document.querySelectorAll(".square");
  console.log(cellsArray);

  for (let i = 0; i < cellsArray.length; i++) {
    const element = cellsArray[i];

    element.innerHTML = i + 1;
  }

  // Add function on click
  for (let i = 0; i < cellsArray.length; i++) {
    cellsArray[i].addEventListener("click", function () {
      cellsArray[i].classList.add("selected");
      console.log(
        `Il numero della cella selezionata è : ${cellsArray[i].innerHTML}`
      );
    });
  }
});
