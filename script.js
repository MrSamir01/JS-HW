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

const Student2 = {};
function createStudent2(name, age, university, faculty, gpa) {
  Student2.name = name;
  Student2.age = age;
  Student2.education = {
    university: university,
    faculty: faculty,
    gpa: gpa,
  };

  console.log(Student2);
}
createStudent2("Samir", 13, "Osh", "Cs", 87);
