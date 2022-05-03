//HTML Elements
const menuEl = document.getElementById("menu");
const goBtnEl = document.getElementById("go-btn");
const paramContainer = document.getElementById("param-container");
let paramArray = [];

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
  createInputField(6);
}

function arithmetic() {
  alert("arithmetic");
}

function geometric() {
  alert("geometric");
}

function series() {
  alert("series");
}

function sum() {
  alert("sum");
}

function average() {
  alert("average");
}

function median() {
  alert("median");
}

function range() {
  alert("range");
}

function lookup() {
  alert("lookup");
}

function cnvSize(increment, operator) {
  //Operator = -1 for Subtraction
  cnv.width += increment * operator;
  cnv.height = cnv.width;
  drawGraph(20, 10, "blue", "grey");
}

function createInputField(count) {
  if (paramArray.length !== 0) {
    deleteFields();
  }

  paramArray = [];
  //Fill Array with New Parameters
  for (let i = 0; i < count; i++) {
    let paramField = document.createElement("input");
    paramField.type = "text";
    paramField.id = `param${i + 1}`;
    paramField.placeholder = `param${i + 1}`;
    paramArray.push(paramField);
    paramContainer.appendChild(paramArray[i]);
  }
}

goBtnEl.addEventListener("click", () => {
  for (let i = 0; i < paramArray.length; i++) {
    console.log(+paramArray[i].value);
  }
});

function deleteFields() {
  //Empty Parameters Array
  for (let i = 0; i < paramArray.length; i++) {
    paramContainer.removeChild(paramContainer.lastChild);
  }
}
