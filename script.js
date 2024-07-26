//Задание-1

const user1 = {
  name: "Samir",
  lang: "rus",
  age: 13,
};
const student1 = user1;
function deleteAge(student1, age) {
  if (age in student1) {
    console.log(user1);
    delete student1.age;
    console.log(student1);
  }
}
deleteAge(student1, "age");

//Задания-3

const array = [
  1,
  true,
  3,
  {
    name: "Samir",
    hobies: ["programming", "computer games"],
  },
  5,
  "hello",
  "hi",
];

console.log(array[1]);
console.log(array[4]);
array[3].hobies.pop();
console.log(array[3]);
array.unshift(2);
array.push(12);
array.shift();
console.log(array.slice(0, 3));
console.log(array.indexOf("hello"));
array[3].hobies.push("basketball");
array.splice(4, 5);
console.log(array);
console.log(array.length);

//Задача-4

const arrr = [1, 4, 6, "hello", {}, 10];

function slozheniye(arr) {
  let number = null;

  for (const iterator of arr) {

    if (typeof iterator === "number") {
      number += iterator;
    }
  }

  return number;
}

console.log(slozheniye(arrr));
