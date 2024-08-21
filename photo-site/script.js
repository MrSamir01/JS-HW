const message = document.getElementById("message");
const bigContainer = document.getElementById("big-container");
const photosContainer = document.getElementById("photos-container");

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";

setTimeout(() => {
  message.style.display = "none";
  bigContainer.style.display = "flex";
}, 1000);

const getPhoto = async (id) => {
  try {
    const response = await fetch(BASE_URL + "?_limit=" + id);
    const data = await response.json();
    renderPhotos(data);
  } catch (error) {
    console.log(error);
  }
};
getPhoto(20);

renderPhotos = (photosArray = []) => {
  photosContainer.innerHTML = "";

  photosArray.map((photo) => {
    const image = document.createElement("img");
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMG3U6xijfcw8Hsy3PFrEwFNE_w3hqioFVQ&s";
    const title = document.createElement("h3");
    title.textContent = photo.title;
    const triTochki = document.createElement("img");
    triTochki.style.width = "17px";
    const triTochki1 = document.createElement("div");
    triTochki1.append(triTochki);
    triTochki.src = "/assets/icons/three-dots-line-svgrepo-com.svg";
    const container = document.createElement("div");
    container.append(image, title, triTochki1);
    photosContainer.append(container);
    container.style.borderRadius = "15px";
    container.style.height = "370px"; 
    container.style.backgroundColor = "white";
    container.style.width = "400px";
    container.style.padding = "20px";
    container.style.marginTop = "50px";
    image.style.width = "350px";
    image.style.borderRadius = "15px";
    triTochki1.style.display = " flex";
    triTochki1.style.height = "50px";
    triTochki1.style.justifyContent = "flex-end";
    photosContainer.style.display = "flex";
    photosContainer.style.flexWrap = "wrap";
    photosContainer.style.gap = "50px";
    photosContainer.style.paddingLeft = "15px";
  });
};
