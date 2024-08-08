// Часть-1

//Задание-1

const popProduct = document.getElementById("main-heading");
popProduct.textContent = "Popular products";

popProduct.style.fontSize = `30px`;
popProduct.style.color = `blue`;
//Задание-2

const deletedElement = document.getElementsByTagName("aside")[0];
deletedElement.remove();

//Задание-3

const deletedElement2 = document.getElementById("second-h3");
deletedElement.classList.remove("heading");

//Часть-2

const cartochki = [
  {
    icon: "https://lh3.googleusercontent.com/a/ACg8ocJpQYJKPiLdiOUWPg7c1v1mc97xrrk-CSjazmb_fnaLfkzs6LUw=s288-c-no",
    title: "Mr.Samir01",
    description: "I am 13 years old and I like play games",
    link: "https://discord.com/invite/rV5FgnmN",
    socSeti:
      "https://play-lh.googleusercontent.com/Wvjx6rVlC1rGWKkln3r-23ICKV--sxEEUuq7jd15BeJan8v-wS7TGwm0NHXqqon18w",
  },
  {
    icon: "https://media-arn2-1.cdn.whatsapp.net/v/t61.24694-24/427888530_917932097002992_6632944690446653407_n.jpg?ccb=11-4&oh=01_Q5AaIEM-Z8HTp9THhlBf1G0ETYSNbro1Be4mrX361QONdRXl&oe=66C0AB31&_nc_sid=5e03e0&_nc_cat=111",
    title: "Samir",
    description: "Я учусь в седьмом классе и люблю програмировать",
    link: "https://wa.me/qr/FKT6NUXVUVAAL1",
    socSeti:
      "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN",
  },
];

const list = document.getElementById("list");
list.style.display = "flex";
list.style.gap = "200px";
list.style.alignItems = "center";
list.style.justifyContent = "center";

cartochki.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.className = "listItem";
  listItem.style.display = "flex";
  listItem.style.flexDirection = "column";
  listItem.style.width = "250px";
  listItem.style.gap = "30px";
  listItem.style.color = "white";
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.height = "80vh";
  listItem.style.borderRadius = "20px";

  const name = document.createElement("h1");
  name.textContent = item.title;
  name.style.fontSize = "25px";
  name.style.fontWeight = "300";
  name.style.marginTop = "20px";

  const image = document.createElement("img");
  image.src = item.icon;
  image.width = 200;
  image.style.borderRadius = "50%";

  const socSeti = document.createElement("img");
  socSeti.src = item.socSeti;
  socSeti.style.width = "30px";
  socSeti.style.borderRadius = "50%";
  socSeti.style.position = "relative";
  socSeti.style.top = "-250px";
  socSeti.style.right = "-100px";
  const title = document.createElement("p");
  title.textContent = item.title;
  title.style.fontSize = "25px";

  const button = document.createElement("button");
  const a = document.createElement("a");

  a.href = item.link;
  a.textContent = "FOR MORE";
  button.append(a);
  button.style.width = "150px";
  button.style.borderRadius = "15px";
  button.style.border = "none";
  button.style.height = "80px";
  button.style.cursor = "pointer";
  a.style.color = "white";
  a.style.textDecoration = "none";
  button.classList.add("sami");

  const description = document.createElement("h3");
  description.textContent = item.description;
  description.style.fontSize = "18px";
  description.style.marginLeft = "15px";

  listItem.append(name, image, title, description, button, socSeti);
  list.appendChild(listItem);
});
