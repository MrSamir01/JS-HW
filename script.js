const inputMin = document.getElementById("minInput");
const inputSec = document.getElementById("secInput");
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const counter = document.getElementById("counter");
const message = document.getElementById("message");
const OK = document.getElementById("OK");
let interval = null;
Number(inputSec, inputMin);

let sek = inputSec.value;
let min = inputMin.value;

startBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  pauseBtn.style.left = "824px";

  if (inputSec.value < 0 || inputMin.value < 0) {
    alert("Введите число больше нуля ");
    clearInterval(interval);
    counter.textContent = "00:00";
  }
  inputSec.value = "";
  inputMin.value = "";

  interval = setInterval(() => {
    // if (sek < 60) {
    //   sek--;
    // } else {
    //   min--;
    //   sek = 0;
    // }
    sek--;
    if (sek < 0) {
      sek = 59;
      sek--;
      min--;
    } else if (min == 0 && sek == 0) {
      counter.textContent = "00:00";
      clearInterval(interval);
      message.style.display = "block";
    }
    let sekString = "";
    let minString = "";
    if (sek < 10) {
      sekString = "0" + sek;
    } else {
      sekString = sek;
    }
    if (min < 10) {
      minString = "0" + min;
    } else {
      minString = min;
    }

    counter.textContent = minString + ":" + sekString;
  }, 1000);
});
restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  counter.textContent = "00:00";
  pauseBtn.style.display = "none";
});
OK.addEventListener("click", () => {
  message.style.display = "none";
});
pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  pauseBtn.style.display = "none";
});
