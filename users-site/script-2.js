const message = document.getElementById("message-container");
const bigContainer = document.getElementById("big-container");
const usersContainer = document.getElementById("users-container");

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

setTimeout(() => {
  message.style.display = "none";
  bigContainer.style.display = "flex";
}, 3000);

const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    renderUsers(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

renderUsers = (usersArray = []) => {
  usersContainer.innerHTML = "";

  usersArray.map((user) => {
    const image = document.createElement("img");
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&s";

    const name = document.createElement("h3");
    name.textContent = user.name;

    const nameCompany = document.createElement("h4");
    nameCompany.textContent = user.company.name;

    const phone = document.createElement("h5");
    phone.textContent = user.phone;

    const email = document.createElement("h5");
    email.textContent = user.email;

    const triTochki = document.createElement("img");
    triTochki.style.width = "17px";
    triTochki.style.marginLeft = "190px"
    const triTochki1 = document.createElement("div");
    triTochki1.append(triTochki);
    triTochki.src = "/assets/icons/three-dots-line-svgrepo-com.svg";

    triTochki1.style.display = "flex";
    triTochki1.style.height = "50px";
    triTochki1.style.justifyContent = "flex-end";

    const informationContainer = document.createElement("div");
    informationContainer.append(nameCompany, phone, email);
    informationContainer.style.display = "flex";
    informationContainer.style.flexDirection = "column";
    informationContainer.style.alignItems = "center";

    const container = document.createElement("div");
    container.classList.add("container");
    container.append(image, name, informationContainer, triTochki1);

    usersContainer.append(container);
  });
};
