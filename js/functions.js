//HTML Elements
//Input
let menuEl = document.getElementById("menu");
let goBtnEl = document.getElementById("go-btn");
//

menuEl.addEventListener("change", () => {
  let selection = menuEl.value;
  handleFunction[selection]();
});

//prettier-ignore
const handleFunction = {
  "0": increaseSize,
  "1": decreaseSize,
  "2": arithmetic,
  "3": geometric,
  "4": series,
  "5": sum,
  "6": average,
  "7": median,
  "8": range,
  "9": lookup,
};

function increaseSize() {
  cnvSize(50, 1);
}

function decreaseSize() {
  cnvSize(50, -1);
}

function arithmetic() {
  alert("size-fifty");
}

function geometric() {
  alert("size-fifty");
}

function series() {
  alert("size-fifty");
}

function sum() {
  alert("size-fifty");
}

function average() {
  alert("size-fifty");
}

function median() {
  alert("size-fifty");
}

function range() {
  alert("size-fifty");
}

function lookup() {
  alert("size-fifty");
}

function cnvSize(increment, operator) {
  //Operator = -1 for Subtraction
  cnv.width += increment * operator;
  cnv.height = cnv.width;
  drawGraph(20, 10, "blue", "grey");
}
