//Задача-1 и Задача-7

// const computers = [
//   {
//     name: "DEXP Aquilon",
//     prise: 18899,
//   },
//   {
//     name: "Apple MacBook Air",
//     prise: 85499,
//   },
//   {
//     name: "MSI Katana GF67",
//     prise: 86999,
//   },
//   {
//     name: "Asus VivoBook 16x",
//     prise: 73499,
//   },
// ];
// let sum = 0;

// const sortirovka11 = computers.sort((a, b) => a.prise - b.prise);
// console.log(sortirovka11);

// const sortirovka12 = computers.sort((a, b) => b.prise - a.prise);
// console.log(sortirovka12);

// for (const object of computers) {
//   sum += object.prise;
// }
// console.log(sum);

//Задача-2

// const numbers = [1, 6, 5, 7, 8, 3, 4, 9, 7, 10];

// const sortirovka21 = numbers.sort((a, b) => a - b);
// console.log(sortirovka21);

// const sortirovka22 = numbers.sort((a, b) => b - a);
// console.log(sortirovka22);

//Задача-3
// const text2 = ["mango", "pear", "apple", "watermellon", "mellon"];

// const sortirovka31 = text2.sort();
// console.log(sortirovka31);

// const sortirovka32 = text2.sort().reverse();
// console.log(sortirovka32);

//Задача-4

// const numbers2 = [1, 2, -2, -5, 9, -8, 77];

// let minNumber = numbers2[0];
// let maxNumber = numbers2[0];

// for (let index = 0; index < numbers2.length; index++) {
//   if (minNumber > numbers2[index]) {
//     minNumber = numbers2[index];
//   } else if (maxNumber < numbers2[index]) {
//     maxNumber = numbers2[index];
//   }
// }
// console.log(minNumber + " | " + maxNumber);

// Math.min(1, 2, -2, -5, 9, -8, 77);
// Math.max(1, 2, -2, -5, 9, -8, 77);

//Задача-5

// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth();
// const year = date.getFullYear();
// if (day < 10) {
//   const deny1 = "0" + day + "." + month + "." + year;
//   console.log(deny1);
// } else if (month < 10) {
//   const deny2 = day + "." + "0" + month + "." + year;
//   console.log(deny2);
// } else if (day < 10 && month < 10) {
//   const deny3 = "0" + day + "." + "0" + month + "." + year;
//   console.log(deny3);
// } else {
//   const deny4 = day + "." + month + "." + year;
//   console.log(deny4);
// }

// const hours = date.getHours();
// const minute = date.getMinutes();
// const seconds = date.getSeconds();
// if (hours < 10) {
//   const time = "0" + hours + ":" + minute + ":" + seconds;
//   console.log(time);
// } else if (minute < 10) {
//   const time5 = hours + ":" + "0" + minute + ":" + seconds;
//   console.log(time5);
// } else if (seconds < 10) {
//   const time6 = hours + ":" + minute + ":" + "0" + seconds;
//   console.log(time6);
// } else if (hours < 10 && minute < 10) {
//   const time2 = "0" + hours + ":" + "0" + minute + ":" + seconds;
//   console.log(time2);
// } else if (hours < 10 && minute < 10 && seconds < 10) {
//   const time3 = "0" + hours + ":" + "0" + minute + ":" + "0" + seconds;
//   console.log(time3);
// } else {
//   const time4 = hours + ":" + minute + ":" + seconds;
//   console.log(time4);
// }

//Задача-6 и Задание-8

// const instagramUser = {
//   userName: "Uzumaki123",
//   email: "user@gmail.com",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };

// for (const key in instagramUser) {
//   console.log(key);
// }

// for (const values in instagramUser) {
//   const element = instagramUser[values];
//   console.log(element);
// }

// const values = Object.keys(instagramUser);
// let index = 0;

// while (index < values.length) {
//   const element = instagramUser[values[index]];
//   console.log(element);
//   index++;
// }

// for (const [key, values] of Object.entries(instagramUser)) {
//   const item = key + ": " + values;
//   console.log(item);
// }
