const input = document.getElementById("input");
const button = document.getElementById("button");
const form = document.getElementById("form");
const ul = document.getElementById("ul");

const BASE_URL = "https://fb1c7a275e4d298a.mokky.dev/todos";

form.addEventListener("submit", addTodo);

const getTodos = async () => {
  try {
    const respone = await fetch(BASE_URL);
    const data = await respone.json();
    renderTodos(data);
  } catch (error) {
    console.log(error);
  }
};

getTodos();

const setTodos = async (obj) => {
  try {
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    getTodos();
  } catch (error) {
    console.log(error);
  }
};

function addTodo(event) {
  event.preventDefault();

  if (input.value.trim() === "") {
    return alert("Заполните поле");
  }

  const obj = {
    id: Date.now().toString(),
    title: input.value,
    completed: false,
  };

  setTodos(obj);
  input.value = "";
}

function renderTodos(todosArray = []) {
  ul.innerHTML = "";

  todosArray.forEach((element) => {
    const li = document.createElement("li");
    li.id = element.id;

    const span = document.createElement("span");
    span.textContent = element.title;
    if (element.completed) {
      span.style.textDecoration = "line-through";
      span.style.textDecorationThickness = "2px";
      span.style.textDecorationColor = "red";
    }

    li.classList.add("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.cursor = "pointer"
    checkbox.classList.add("checkbox");
    checkbox.checked = element.completed;
    checkbox.addEventListener("change", () => {
      element.completed = !element.completed;
      updateTodo(element.id, element.completed);
    });

    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button1");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteModalTodo(element.id);
    });

    const liContainer = document.createElement("div");
    liContainer.classList.add("delete-container");
    liContainer.append(checkbox, deleteButton);
    li.append(span, liContainer);
    ul.append(li);
  });
}

async function updateTodo(id, completed) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: completed,
      }),
    });
    getTodos();
  } catch (error) {}
}
//   localStorage.setItem("todos", JSON.stringify(todos));

function deleteModalTodo(id) {
  const vibor = document.getElementById("vibor");
  vibor.style.display = "block";

  const no = document.getElementById("no");
  const yes = document.getElementById("yes");

  yes.addEventListener("click", () => {
    vibor.style.display = "none";
    deleteTodo(id);
  });

  no.addEventListener("click", () => {
    vibor.style.display = "none";
  });
}

// renderTodos(getTodos(data));
async function deleteTodo(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {}
  location.reload();
}



const object = {
  name:"Samir",
  age: 13,
  city: 123
}

const {age} =object
 