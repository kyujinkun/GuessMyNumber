"use strict";
//Values
let container = document.querySelector(".container");
let input = document.querySelector("#input-number");
let hint = document.querySelector(".hint");
let output = document.querySelector(".output-number");
let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20 + 1);
//Values

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let inputNumber = Number(document.querySelector("#input-number").value);
  if (!inputNumber) {
    hint.textContent = "❌ No Number!";
  } else {
    if (inputNumber === secretNumber) {
      container.style.backgroundColor = "green";
      input.style.backgroundColor = "green";
      hint.textContent = "✅ You Win!";
      output.textContent = secretNumber;
      document.querySelector(".score").textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (inputNumber !== secretNumber) {
      if (score > 1) {
        inputNumber > secretNumber
          ? (hint.textContent = "📈 Too high!")
          : (hint.textContent = "📉 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".hint").textContent = "💥 You lost the game!";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

document.querySelector(".play-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing...';
  hint.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".output-number").textContent = "?";
  document.querySelector("#input-number").value = "";
  console.log(secretNumber);
  container.style.backgroundColor = "black";
  input.style.backgroundColor = "black";
});
