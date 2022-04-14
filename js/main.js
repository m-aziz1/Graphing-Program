//GRAPHING PROGRAM

//DOCUMENT ELEMENTS
const fileUploadEl = document.getElementById("uploadData");

//CANVAS SETUP
const cnv = document.getElementById("graph-canvas");
const ctx = cnv.getContext("2d");
cnv.width = 550;
cnv.height = 550;

//DATA ARRAYS
let graphValues = [];

let data = new DataManager();

//GET DATA
//FROM FILE
fileUploadEl.addEventListener("change", () => {
  //Clear Existing Data
  data.values = [];

  //Initialize File Variable
  let file = fileUploadEl.files[0];

  //Create File Reader Object
  let reader = new FileReader();

  //Read Data
  reader.readAsText(file);

  //Process Data
  reader.onloadend = () => {
    let fetchedData = reader.result;

    //Create One Array with All (x, y) String Pairs
    let allPairs;
    allPairs = fetchedData.split("\r\n");

    //Use to Split Into Multiple [x, y] Integer Arrays
    let splitPairs;

    for (let i = 0; i < allPairs.length; i++) {
      splitPairs = allPairs[i].split(",").map(Number);
      data.fill(splitPairs[0], splitPairs[1]);
    }

    //Build Table
    createTable(data.values);
  };
});

//FROM INPUT
let xInputEl = document.getElementById("x-input");
let yInputEl = document.getElementById("y-input");
const addBtnEl = document.getElementById("add-value");
const removeBtnEl = document.getElementById("remove-value");

//Add Values
addBtnEl.addEventListener("click", () => {
  //If input.value.length = 0, field is empty
  if (xInputEl.value.length !== 0 && yInputEl.value.length !== 0) {
    //Call Add Method
    data.add(+xInputEl.value, +yInputEl.value);
  } else {
    alert("Please enter both x and y values");
  }
});

//Delete Values
removeBtnEl.addEventListener("click", () => {
  if (xInputEl.value.length !== 0 && yInputEl.value.length !== 0) {
    //Call Remove function
    data.remove(+xInputEl.value, +yInputEl.value);


    //If last DataPoint is deleted, Add Placeholder
    // if (xTableEl.childNodes.length < 3) {
    //   let placeholder = [createPair(0, 0)];
    //   domManipulation(placeholder, xTableEl);
    //   domManipulation(placeholder, yTableEl);
    // }

  } else {
    alert("Please enter both x and y values");
  }
});

//CREATE TABLE OF VALUES
//Row Nodes
let xTableEl, yTableEl;
tableAxis = [];
tableAxis.push(
  (xTableEl = document.getElementById("output-x-table")),
  (yTableEl = document.getElementById("output-y-table"))
);

function createTable(anArray) {
  //Remove Previous Filled Table
  removeAllChildNodes(tableAxis);

  //Call Functions to Fill Table
  domManipulation(anArray, xTableEl);
  domManipulation(anArray, yTableEl);
}

//(dom = Document Object Model)
function domManipulation(anArray, row) {
  for (let i = 0; i < anArray.length; i++) {
    let textNode;
    let cellNode = document.createElement("td");

    //Write as Strings to fill Data Cells
    if (row === xTableEl) {
      textNode = document.createTextNode(`${anArray[i].x}`);
    } else if (row === yTableEl) {
      textNode = document.createTextNode(`${anArray[i].y}`);
    }

    //Push x and y Values Inside Data Cell Tags
    cellNode.appendChild(textNode);

    //Push Data Cells Inside Row Tags
    row.appendChild(cellNode);
  }
}

//Remove Current Table Data Loop
function removeAllChildNodes(parentArray) {
  //Remove Values for x and y Table Elements
  parentArray.forEach((value) => nestedRemove(value));

  //Remove Child Elements Loop
  function nestedRemove(parent) {
    while (parent.childNodes.length > 2) {
      parent.removeChild(parent.lastChild);
    }
  }
}

function drawGraph(
  wMargin,
  hMargin,
  xIntervals,
  yIntervals,
  axisColor,
  intervalColor
) {
  //Draw Background
  background("white");

  //Set New Dimensions with Margins
  nHeight = cnv.height - hMargin;
  nWidth = cnv.width - wMargin;

  //Create Vertical and Horizontal Axis
  line(wMargin, hMargin, wMargin, nHeight, axisColor);
  line(wMargin, nHeight, nWidth, nHeight, axisColor);

  let xSpacer = (nWidth - wMargin) / xIntervals;
  let xCoord = 0;
  for (let i = 0; i < xIntervals; i++) {
    xCoord += xSpacer;
    line(wMargin + xCoord, hMargin, wMargin + xCoord, nHeight, intervalColor);
  }

  let ySpacer = (nHeight - hMargin) / yIntervals;
  let yCoord = 0;
  for (let i = 0; i < yIntervals; i++) {
    yCoord += ySpacer;
    line(wMargin, yCoord + hMargin, nWidth, yCoord + hMargin, intervalColor);
  }
}

drawGraph(75, 75, 10, 10, "blue", "lightgrey");
