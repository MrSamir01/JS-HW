//While

//Задача-1
// let index2 = 0;

// while (index2 <= 100) {
//   console.log(index2);
//   index2++;
// }

//Задача-2

// let counter = 0;

// while (counter <= 100) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }
// let counter1 = 0;

// while (counter1 <= 100) {
//   if (counter1 % 2 === 1) {
//     console.log(counter1);
//   }
//   counter1++;
// }
//Задача-3

// let counter2 = 0;
// let result = 0;

// while (counter2 <= 100) {
//   if (counter2 % 2 === 0) {
//     result = result + counter2;
//   }
//   counter2 = counter2 + 1;
// }

// console.log(result);

//Задача-4

// let userName = "Naruto Shupinned";
// let userIndex = 0;
// while (userIndex < userName.length) {
//   const currenChar = userName.charAt(userIndex);
//   if (currenChar === "u") {
//     console.log("bar eken!!!");
//   }
//   userIndex++;
// }

//Задача-5
// let text2 = "hello";
// let reversedStrFor2 = "";
// let en3 = text2.length - 0;
// while ((en3 >= 0, en3--)) {
//   reversedStrFor2 += text2[en3];
// }
// console.log(reversedStrFor2);
//Задача-6

// let width2 = 14;
// let height2 = 5;
// let i2 = 0;
// console.log(width2);

// while (i2 < height2 ) {
//   if (i2 === 0 || i2 === height2 - 1) {
//     console.log("*".repeat(width2));
//   } else {
//     console.log("*" + "-".repeat(width2 - 2) + "*");
//   }
//   i2++
// }
//Задача-7
// let str1 = "";
// while (str1.length < 7) console.log((str1 += "#"));
// //For
// //Задача-1
// for (let index2 = 0; index2 <= 100; index2++) {
//   console.log(index2);
// }

// //Задача-2
// for (let index3 = 0; index3 <= 100; index3++) {
//   if (index3 % 2 === 0) {
//     console.log(index3);
//   }
// }
// for (let index4 = 0; index4 <= 100; index4++) {
//   if (index4 % 2 === 1) {
//     console.log(index4);
//   }
// }

//Задача-3
// let counter3 = 15;

// for (result = 10; counter3 <= 100; ) {
//   if (counter3 % 2 === 0) {
//     result = result + counter3;
//   }
//   counter3 = counter3 + 1;
// }

// console.log(result);
//Задача-4
// let userName2 = "Naruto Uzamaku";

// for (let userIndex2 = 0; userIndex2 < userName2.length; ) {
//   const currenChar2 = userName2.charAt(userIndex2);
//   if (currenChar2 === "u") {
//     console.log("Буква найдена!");
//   }
//   userIndex2++;
// }

//Задача-5
// let reversedStrFor = "";

// let str = "hello";

// for (let en = str.length - 1; en >= 0; en--) {
//   reversedStrFor += str[en];
// }

// console.log(reversedStrFor);

//Задача-6
let resh = 10;
let madoPro = 6;
for (let alfa = 0; alfa < madoPro; alfa++) {
  if (alfa === 0 || alfa === madoPro - 1) {
    console.log("*".repeat(resh));
  } else {
    console.log("*" + "-".repeat(resh - 2) + "*");
  }
  console.log("\n");
}


//Задача-7
// let str = "";

// for (let index = 0; index < 7; index++) {
//   console.log((str += "#"));
// }
