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
  //2 params - Height/Width and Increment
  createInputField(2);
}

function decreaseSize() {
  createInputField(2);
}

function arithmetic() {
  //Params - replace one row of values (x/y) or create new|start number, end number and the increments
  alert("arithmetic");
}

function geometric() {
  alert("geometric");
  //Params - replace one row of values (x/y) or create new|start number, end number and the increments
}

function series() {
  alert("series");
  //Params - replace one row of values (x/y) or create new|start number, end number and the increments
}

function sum() {
  alert("sum");
  //Params - row (x/y), all values in that row or a range (cell# to cell#)
}

function average() {
  alert("average");
  //Params - row (x/y), all values in that row or a range (cell# to cell#)
}

function median() {
  alert("median");
  //Params - row (x/y)
}

function range() {
  alert("range");
  //redundant - remove
}

function lookup() {
  alert("lookup");
  // check if a specific value is in row (x/y), highlight on graph - color
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
