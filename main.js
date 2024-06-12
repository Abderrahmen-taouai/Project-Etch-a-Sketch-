const container = document.querySelector(".container");
const board = document.getElementById("board");
const option = document.getElementById("value");
const Reset = document.querySelector(".Reset");


let size = 8;
createBoard(size);

option.addEventListener("click", (e) => {
  size = parseInt(option.value);
  console.log(size);
  createBoard(size);
});

function createBoard(size) {
  board.innerHTML = ""; // Clear any existing content in the board
  let boardWidth = 480;
  let boardHeight = 480;
  board.style.width = `${boardWidth}px`;
  board.style.height = `${boardHeight}px`;
  let squareSize = board.offsetWidth / size;
  console.log(squareSize);
  board.style.display = "grid";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gap = "0";

  let index = 1;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      let square = document.createElement("div");
      square.id = index;
      index++;
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.backgroundColor = "coral";
      square.style.border = "solid 1px black";
      square.addEventListener("mouseover", colorize);
      board.appendChild(square);
    }
  }
}
//function to colorize each square, then remove the hover event once done.
let opacity = 0;
function colorize() {
  const color = document.querySelector('input[name="color"]:checked');
  //based on user selection, change the square color
  color.value === "Rainbow"
    ? (this.style.backgroundColor = randomcolor())
    : (this.style.backgroundColor = `rgb(0, 0, 0,${opacity})`);
  //every 10 hover reset opacity to 0, increasing opacity by 10%
  opacity >= 1 ? (opacity = 0) : (opacity += 0.1);

  this.removeEventListener("mouseover", colorize);
}

//generate a random rgb color
function randomcolor() {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b}`;
}

//Rest board
Reset.addEventListener("click",()=>{

        createBoard(size)
});
