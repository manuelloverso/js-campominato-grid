//Variables Declaration
const cellMarkup = `<div class="square"></div>`;

// Generating 100 cells
const container = document.getElementById("container");
//console.log(container);
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
    console.log(cellsArray[i].innerHTML);
  });
}
