//Variables Declaration
const cellMarkup = `<div class="square"></div>`;

// Generating 100 cells
const container = document.getElementById("container");
//console.log(container);
for (let i = 0; i < 100; i++) {
  container.insertAdjacentHTML("beforeend", cellMarkup);
}

//Giving each cell a number
