//Задание-1

const numbers1 = [1, 2, 3, 4, 5, 6, 7];

const stepeny = numbers1.map((element) => element ** 2);
console.log(stepeny);

//Задание-2

const users = [
  { name: "Samir", surname: " Sattorov", age: 13, city: "Moscow" },
  { name: "Amir", surname: " Sattorov", age: 14, city: "Batken" },
  { name: "Zamir", surname: " Sattorov", age: 11, city: "Osh" },
  { name: "Damir", surname: " Sattorov", age: 12, city: "Bishkek" },
];

const newArray = users.map((item) => {
  return {
    fullname: item.name + item.surname,
    age: item.age,
    city: item.city,
  };
});
console.log(newArray);

//Задание-3

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result2 = numbers2.filter((element) => element % 2 === 0);
console.log(result2);

//Задание-4

//Задание-5

const numbers3 = [1, 2, 3, 4, 5, 6, 7];
const initialValue = 0;
const slojeniye2 = numbers3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(slojeniye2);

//Задание-6

const numbers4 = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
numbers4.forEach((element) => {
  if (element % 2 !== 0) {
    sum = sum + element;
  }
});

console.log(sum);

//Задание-7

// const users = [
//   { name: "Samir", age: 13, city: "Moscow" },
//   { name: "Amir", age: 14, city: "Batken" },
//   { name: "Zamir", age: 11, city: "Osh" },
//   { name: "Damir", age: 12, city: "Bishkek" },
// ];
// const poisk = users.find((element) => element.name === "Samir");
// console.log(poisk);

//Задание-8

const numbers5 = [1, 2, 3, 4, 5, 6, 7];

const index = numbers5.findIndex((element) => element === 4);
console.log(index);
