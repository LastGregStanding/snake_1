"use strict";

// Game code
const grid = [];
const gameboard = document.querySelector(".gameboard");
const scoreText = document.querySelector(".score");
const resetBtn = document.querySelector(".reset-btn");
let horizontalMove = 1;
let verticalMove = 0;
let score = 0;
let food;
let gameOn = false;
let snake = [{ cell: 0 }, { cell: 1 }, { cell: 2 }, { cell: 3 }];

// Draw the gameboard
function createGame() {
  for (let i = 0; i < 400; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    grid.push(cell);
    gameboard.appendChild(cell);
  }
}
createGame();

// Erase the gameboard
function eraseGame() {
  // Clear the gameboard and grid array
  gameboard.innerHTML = "";
  grid.length = 0;
}
