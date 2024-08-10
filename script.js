const input = document.getElementById("input");
const button = document.getElementById("button");
const form = document.getElementById("form");
const ul = document.getElementById("ul");


form.addEventListener("submit", addTodo);

function addTodo(event) {
  event.preventDefault();

  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button1");
  input.textContent = "";
  deleteButton.textContent = "Delete";
  if (input.value.trim() === "") {
    return alert("Заполните поле");
  }
  li.append(deleteButton);
  ul.appendChild(li);

  input.value = "";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
}
