let gridSize = 10;
let wdth = window.getComputedStyle("#grid").width;
console.log(wdth);
for (var i = 0; i < gridSize * gridSize; i++) {

  let grid = document.querySelector("#grid");
  let square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);
}

