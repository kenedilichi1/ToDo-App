let addTask = document.querySelector("#addTask");
let inputField = document.querySelector("#inputField");
let addBtn = document.querySelector("#addBtn");
let inputSec = document.querySelector(".absolute-center");
let bodyDiv = document.querySelector(".full-height")

function displayInputField() {
  //   inputSec.style.display = "block";
  addTask.classList.toggle("active");
  let inputClasses = inputSec.getAttribute("class");
  console.log(inputClasses);
  if (inputClasses.includes("show")) {
    console.log("showing");
    inputSec.classList.remove("show");
    inputSec.classList.add("hide");
  } else {
    inputSec.classList.remove("hide");
    inputSec.classList.add("show");
  }
}

addTask.addEventListener("click", displayInputField);

function displayInput() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "myTask");
    let paragraph = document.createElement("p");
  if (inputField.value) {
    paragraph.innerText = inputField.value;
    newDiv.appendChild(paragraph);
    bodyDiv.appendChild(newDiv);
    inputField.value = ''
    console.log(newDiv)
  }
}

addBtn.addEventListener("click", displayInput);
