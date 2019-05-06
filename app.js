const new_btn = document.getElementById("new");
const reset_btn = document.getElementById("reset");
const default_btn = document.getElementById("default");
const random_btn = document.getElementById("random");
const container = document.getElementById("container");
const body = document.querySelector("body");

let gridnum = 10;

function makeGrid (gridnum) {
    for (let i = 0; i < gridnum * gridnum; i++) {
        let boxSize = (600 / gridnum);
        let box = document.createElement('div');
		box.classList.add('box');
		box.style.width = `${boxSize}px`;
		box.style.height = `${boxSize}px`;
        container.appendChild(box);;
        box.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
    }
    white();
}

function white() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            box.style.backgroundColor = "white";
            body.style.backgroundColor = "black";
        });
    });
    
}

function random() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            box.style.backgroundColor = randomColor();
            body.style.backgroundColor = randomColor();
        });
    });
}

function randomColor() {
    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function deleteGrid() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.parentNode.removeChild(box);
    })
}

random_btn.addEventListener("click", (e) => {
    random();
    body.style.backgroundColor = randomColor();
})

default_btn.addEventListener("click", (e) => {
    white();
    body.style.backgroundColor = "black";
})

reset_btn.addEventListener("click", (e) => {
    let boxes = document.querySelectorAll(".box")
	boxes.forEach((box) => {
		box.style.backgroundColor = "black";
	})
})

new_btn.addEventListener("click", (e) => {
    let gridsize = parseInt(window.prompt("How many rows would you like?"), 10);
    deleteGrid();
    makeGrid(gridsize);
})
makeGrid(gridnum);