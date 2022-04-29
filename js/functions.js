//HTML Elements
//Input
const menuEl = document.getElementById("menu");
const goBtnEl = document.getElementById("go-btn");
const paramContainer = document.getElementById("param-container");
// const paramInputEl = document.getElementById("func-input");
// const returnFuncEl = document.getElementById("return-func");

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
  createInputField(2);
}

function decreaseSize() {
  createInputField(2);
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

function createInputField(count) {
  for (let i = 0; i < count; i++) {
    let paramField = document.createElement("input");
    paramField.type = "text";
    paramField.id = `param${i}`;
    paramContainer.appendChild(paramField);
    console.log(paramField);
  }
}
