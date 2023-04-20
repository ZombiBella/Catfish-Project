

let optionThree = document.querySelector(".option-three");
let fish = document.querySelector(".title")
optionThree.onmouseover = function() {
  fish.style.display = "block";
}


let box = document.querySelector(".option-one")
let optionOneScreen = document.querySelector(".option-one-screen");
box.onclick = function() {
  optionOneScreen.style.display = "block";
  buttons.style.display = "none"
}

let alone = document.querySelector(".option-two")
let optionTwoScreen = document.querySelector(".option-two-screen");
alone.onclick = function() {
  optionTwoScreen.style.display = "block";
}

let pet = document.querySelector(".option-one-screen")
let optionOneEnd = document.querySelector(".option-one-end");
pet.onclick = function() {
  optionOneEnd.style.display = "block";
  optionOneScreen.style.display = "none";
}

let leave = document.querySelector(".option-two-screen")
let optionTwoEnd = document.querySelector(".option-two-end");
leave.onclick = function() {
  optionTwoEnd.style.display = "block";
  optionTwoScreen.style.display = "none";
}

let optionFour = document.querySelector(".option-four");
optionFour.onclick = function() {
  fish.style.display = "none";
  optionOneScreen.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneEnd.style.display = "none";
  optionTwoEnd.style.display = "none";
}
