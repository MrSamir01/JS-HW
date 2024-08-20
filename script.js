//Нооруз агая код:

const inputMin = document.getElementById("minInput");
const inputSec = document.getElementById("secInput");
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");

const counter = document.getElementById("counter");
const message = document.getElementById("message");
const OK = document.getElementById("OK");
let interval = null;
let isRunning = fals+e;
let sek, min;

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    // Start the timer
    if (inputSec.value < 0 || inputMin.value < 0) {
      alert("Введите число больше нуля ");
      clearInterval(interval);
      counter.textContent = "00:00";
      return;
    }

    if (!sek && !min) {
      sek = parseInt(inputSec.value) || 0;
      min = parseInt(inputMin.value) || 0;
    }

    startBtn.textContent = "Pause";
    isRunning = true;

    interval = setInterval(() => {
      sek--;
      if (sek < 0) {
        sek = 59;
        min--;
      }
      if (min < 0) {
        sek = 0;
        min = 0;
        counter.textContent = "00:00";
        clearInterval(interval);
        message.style.display = "block";
        isRunning = false;
        startBtn.textContent = "Start";
      }

      let sekString = sek < 10 ? "0" + sek : sek;
      let minString = min < 10 ? "0" + min : min;
      counter.textContent = minString + ":" + sekString;
    }, 1000);
  } else {
    // Pause the timer
    clearInterval(interval);
    isRunning = false;
    startBtn.textContent = "Start";
  }
});

restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  counter.textContent = "00:00";
  startBtn.textContent = "Start";
  sek = 0;
  min = 0;
  isRunning = false;
});

OK.addEventListener("click", () => {
  message.style.display = "none";
});

//Мой код:
// const inputMin = document.getElementById("minInput");
// const inputSec = document.getElementById("secInput");
// const restartBtn = document.getElementById("restart-btn");
// const startBtn = document.getElementById("start-btn");
// const pauseBtn = document.getElementById("pause-btn");
// const counter = document.getElementById("counter");
// const message = document.getElementById("message");
// let sek = null;
// let min = null;
// let sekString = null;
// let minString = null;
// const OK = document.getElementById("OK");
// let interval = null;

// Number(inputSec, inputMin);

// startBtn.addEventListener("click", () => {
//   pauseBtn.style.display = "block";
//   pauseBtn.style.left = "824px";

//   if (inputSec.value < 0 || inputMin.value < 0) {
//     alert("Введите число больше нуля ");
//     clearInterval(interval);
//     counter.textContent = "00:00";
//   }
//   sek = inputSec.value;
//   min = inputMin.value;
//   // sek - sec2;
//   // min - min2;
//   // inputSec.value = sek;
//   // inputMin.value = min;

//   interval = setInterval(() => {
//     sek--;
//     if (sek < 0) {
//       sek = 60;
//       sek--;
//       min--;
//     } else if (min == 0 && sek == 0) {
//       counter.textContent = "00:00";
//       clearInterval(interval);
//       message.style.display = "block";
//     }
//     sekString = "";
//     minString = "";
//     if (sek < 10) {
//       sekString = "0" + sek;
//     } else {
//       sekString = sek;
//     }
//     if (min < 10) {
//       minString = "0" + min;
//     } else {
//       minString = min;
//     }

//     counter.textContent = minString + ":" + sekString;
//   }, 1000);
// });
// restartBtn.addEventListener("click", () => {
//   clearInterval(interval);
//   counter.textContent = "00:00";
//   pauseBtn.style.display = "none";
// });
// OK.addEventListener("click", () => {
//   message.style.display = "none";
// });
// pauseBtn.addEventListener("click", () => {
//   clearInterval(interval);
//   pauseBtn.style.display = "none";
//   setInterval(() => {
//     let sek2 = 0;
//     let min2 = 0;
//     if (sek2 < 60) {
//       sek2++;
//     } else {
//       min2++;
//       sek2 = 0;
//     }
//     sek = inputSec.value - sek2;
//     min = inputMin.value - min2;
//   }, 1000);
// });

// const h1 = document.getElementById("h1");
// const div = document.getElementById("div");
// setTimeout(() => {
//   h1.textContent = "Ура!";
// }, 10000);

// setInterval(() => {
//   if (div.style.backgroundColor === "blue") {
//     div.style.backgroundColor = "red";
//   } else {
//     div.style.backgroundColor = "blue";
//   }
// }, 1000);
