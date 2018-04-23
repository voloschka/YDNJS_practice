// To do app

const container = document.createElement("div");
container.className = "container";

const field = document.createElement("input");
field.setAttribute("type", "text");
container.appendChild(field);

const submit = document.createElement("button");
submit.innerText = "Submit";
container.appendChild(submit);

const errorPlace = document.createElement("p");
container.appendChild(errorPlace);

const ul = document.createElement("ul");
container.appendChild(ul);

submit.addEventListener('click', function(event) {
  let val = field.value;

  if (val.length === 0) {
    console.warn("Please type more letters");
    errorPlace.innerText = "Please enter something";
    return;
  }

  const li = document.createElement("li");
  li.innerText = val;
  ul.appendChild(li);

  console.log("Value:", val);
  errorPlace.innerText = "";
  field.value = "";

});

// container append
const body = document.getElementsByTagName("body")[0];
body.appendChild(container);
