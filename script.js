let grid = document.querySelector(".grid");
document.getElementById("btn").addEventListener("click", resetGrid)
createGrid();

// checks if input is corret, deletes old grid and creates new one
function resetGrid () {
	let y = 1 * document.getElementById("input").value;
	if (Number.isInteger(y) && y > 0 && y <= 100) {
		removeGrid();
		createGrid();
	} else {
		removeGrid();
		failure();
	}
}

//creates new Grid
function createGrid () {


	let gridSize = document.getElementById("input").value;

	let colRow = "1fr";
	for (var i = 1; i < gridSize; i++) {
		colRow += " 1fr"
	}

	grid.style.gridTemplateColumns = colRow;
	grid.style.gridRowGap = "1px";
	grid.style.gridColumnGap = "1px";

	for (var i = 0; i < gridSize * gridSize; i++) {

	  let square = document.createElement("div");
	  square.classList.add("square");
	  square.setAttribute("stage", "3");
	  square.addEventListener("mouseover", fill);
	  grid.appendChild(square);
	}

}

//Deletes old grid
function removeGrid () {
	let children = document.querySelectorAll(".square");
	children.forEach( function(child) {
	child.parentNode.removeChild(child);
	});
} 

//Unleashes consequences of failur upon unfortunate user
function failure () {
	alert("Only natural numbers between 1 and 100");
}


// Drawing functionality when hovering above element
function fill () {
	let x = this.getAttribute("stage");

	if (x <= 10) {
		this.style.backgroundColor = "hsl(0, 50%, " + (100-10*x) +"%)";
		x ++;
		this.setAttribute("stage", x);
	}

}