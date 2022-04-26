//HTML Elements
let menuEl = document.getElementById("menu");
let goBtnEl = document.getElementById("go-btn");

menuEl.addEventListener("change", optionSelect);

function optionSelect() {
  alert("Menu Selected");
}
