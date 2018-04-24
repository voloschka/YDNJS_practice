// ToDo app

const container = document.createElement("div");
container.className = "container";

// create elements
const field = document.createElement("input");
field.setAttribute("type", "text");
container.appendChild(field);

const submit = document.createElement("button");
submit.innerText = "Submit";
container.appendChild(submit);

const errorPlace = document.createElement("p");
container.appendChild(errorPlace);

// UI ToDo list
const ul = document.createElement("ul");
container.appendChild(ul);

const ToDoList = [];

// attach event listener to button
submit.addEventListener('click', (event) => {
  let val = field.value;

  if (val.length === 0) {
    console.warn("Please type more letters");
    errorPlace.innerText = "Please enter something";
    return;
  }

  // in memory
  ToDoList.push(val);
  const countElements = ToDoList.length - 1;

  const li = document.createElement("li");
  // append ToDo into list
  li.innerText = val;
  li.id = countElements;

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Remove";
  deleteButton.value = countElements;

  deleteButton.addEventListener("click", (event) => {
    const index = parseInt(event.target.value);

    const elementToRemove = document.getElementById(`${event.target.value}`);
    ul.removeChild(elementToRemove);

    ToDoList.splice(index, 1);
    console.log("ToDoList:", ToDoList);
  });

  li.appendChild(deleteButton);
  ul.appendChild(li); // display ToDo list in UI

  errorPlace.innerText = "";
  field.value = "";

});

// container append
const body = document.getElementsByTagName("body")[0];
body.appendChild(container);
