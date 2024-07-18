//Задача-1

let num = 10;

if (num === 10) {
  console.log("правильно");
} else {
  console.log("неправильно");
}

//Задача-2

let baatir = 23;

if (baatir > 20 && baatir < 21) {
  console.log("квартира в первом подъезде");
} else if (baatir > 21 && baatir < 49) {
  console.log("квартира во втором подъезде");
} else if (baatir > 49 && baatir < 91) {
  console.log("квартира в третьем подъезде");
}

//Задача-3

let b = 10;

if (b > 0 && b < 5) {
  console.log("true");
} else {
  console.log("false");
}
//Задача-4 и Задача-5

let userName = prompt("Ведите своё имя:");

let userTime = 900;

if (userTime > 600 && userTime < 1259) {
  console.log("Доброе утро, " + userName + " !");
} else if (userTime > 1259 && userTime < 1759) {
  console.log("Добрый день, " + userName + " !");
} else {
  console.log("Добрый вечер, " + userName + " !");
}

//Задача-6

let userAge = 15;

if (userAge < 6 && userAge > 64) {
  console.log("Скидка есть");
} else {
  console.log("Скидки нету");
}

//Задача-7
let userChoose1 = prompt(
  "Пожалуйста выберите камень ноженицы или бумагу (User-1)"
);
let userChoose2 = prompt(
  "Пожалуйста выберите камень ноженицы или бумагу (User-2)"
);

if (userChoose1 === "бумага" && userChoose2 === "бумага") {
  console.log("Ничья!");
} else if (userChoose1 === "бумага" && userChoose2 === "ножницы") {
  console.log("User-2 winner");
} else if (userChoose1 === "бумага" && userChoose2 === "камень") {
  console.log("User-1 winner");
} else if (userChoose1 === "ножницы" && userChoose2 === "бумага") {
  console.log("User-1 winner");
} else if (userChoose1 === "ножницы" && userChoose2 === "ножницы") {
  console.log("Ничья!");
} else if (userChoose1 === "ножницы" && userChoose2 === "камень") {
  console.log("User-2 winner");
} else if (userChoose1 === "камень" && userChoose2 === "бумага") {
  console.log("User-2 winner");
} else if (userChoose1 === "камень" && userChoose2 === "ножницы") {
  console.log("User-1 winner");
} else if (userChoose1 === "камень" && userChoose2 === "камень") {
  console.log("Ничья!");
} else {
  alert("Не пишете всякое!");
}
//Задача-9

let num = 7;

if (num === 7) {
  console.log("Seven");
} else {
  console.log("Not Seven");
}
