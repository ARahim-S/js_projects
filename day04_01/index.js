//DOM ELEMENTS INITIALIZE
let task = JSON.parse(localStorage.getItem("task"))
  ? JSON.parse(localStorage.getItem("task"))
  : [];

const addButton = document.querySelector("#liveToastBtn");
const ulElement = document.querySelector("#list");
const userInput = document.querySelector("#task");

let userTaskInput = "";

function randomNumber() {
  if (Math.ceil(Math.random() * 10) === 0) {
    return randomNumber();
  }
  return Math.ceil(Math.random() * 10);
}

userInput.addEventListener("input", function (e) {
  newTask = { id: randomNumber(), task: e.target.value };
});

addButton.addEventListener("click", addTask);

function addTask(e) {
  if (userInput.value.trim().length == 0) {
    alert("boş olmaz");
  } else {
    task = [...task, newTask];
    console.log(task);
    localStorage.setItem("task", JSON.stringify(task));

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${newTask.task}`));
    ulElement.appendChild(li);
    userInput.value = "";
  }
}

function getLocalStorage() {
  let resultTask = JSON.parse(localStorage.getItem("task"));

  console.log(resultTask?.length);
  resultTask?.map((item) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${item?.task}`));
    ulElement.appendChild(li);
  });
}

window.addEventListener("load", getLocalStorage);
