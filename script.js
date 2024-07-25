// let userName = prompt("Напишите своё имя:");
// let userAge = +prompt("Укажите свой возраст:");
// let userCity = prompt("Укажите свой город:");
// let userUniversty = prompt("Укажите свой универ:");

// const Student1 = {};

// function createStudent(name, age, universty, city) {
//   Student1.name = userName;
//   Student1.age = userAge;
//   Student1.city = userCity;
//   Student1.universty = userUniversty;
//   console.log(Student1);
// }
// createStudent(Student1);

//Задача-1

// const Student2 = {};
// function createStudent2(name, age, university, faculty, gpa) {
//   Student2.name = name;
//   Student2.age = age;
//   Student2.education = {
//     university: university,
//     faculty: faculty,
//     gpa: gpa,
//   };

//   console.log(Student2);
// }
// createStudent2("Samir", 13, "Osh", "Cs", 87);

//Задача-2

// const user = {
//   email: "samir.sattrov01@mail.ru",
//   password: "samir-krotoy",
// };

// function deleteKey(object, key) {
//   if (key in object) {
//     delete object[key];
//     console.log("Key is deleted");
//   } else {
//     alert("Ключа нет");
//   }
// }
// deleteKey(user, "password");

//Задание-3

// let proverkaEmail = prompt("Ваш email");
// let proverkaPassword = prompt("Ваш пароль:");
// let sum = 5;

// const user1 = {
//   name: "Adam",
//   age: 15,
//   email: "adam01@mail.ru",
//   password: "123456",
// };

// if (user1.email === proverkaEmail && user1.password === proverkaPassword) {
//   let proverkaPrimer = +prompt("2+3=?");
//   if (proverkaPrimer === sum) {
//     user1.sum = proverkaPrimer;
//     alert("Добро пожаловать! Ваша премия " + user1.sum);
//   } else {
//     alert("Иди учись!");
//   }
// } else if (user1.email !== proverkaEmail) {
//   alert("Email неверный!");
// } else if (user1.password !== proverkaPassword) {
//   alert("Пароль неверный!");
// }

// const array = [
//   {
//     name: "samir",
//   },
// ];
// const newArray = array.map((item) => {
//   return {
//     name: item.name,
//     email: `${item.name}@gmail.com`,
//   };
// });
// console.log(newArray);
