//GRAPHING PROGRAM
// DONT ALLOW NEGATIVE VALUES
//DOCUMENT ELEMENTS
const fileUploadEl = document.getElementById("uploadData");
const downloadBtnEl = document.getElementById("download-btn");
//Row Nodes
const xTableEl = document.getElementById("output-x-table");
const yTableEl = document.getElementById("output-y-table");

//CANVAS SETUP
const cnv = document.getElementById("graph-canvas");
const ctx = cnv.getContext("2d");
cnv.width = 550;
cnv.height = 550;

//DATA MANAGER
let data = new DataManager(xTableEl, yTableEl);
let table = data.table;

//GET DATA FROM FILE
fileUploadEl.addEventListener("change", (event) => {
  //Clear Existing Data
  data.empty();

  //Create Reader Instance
  var reader = new FileReader();

  //Read File Content
  reader.readAsText(event.target.files[0]);

  reader.onload = (event) => {
    var jsonData = JSON.parse(event.target.result);

    //Push JSON Objects Into Data Array
    for (let i = 0; i < jsonData.length; i++) {
      data.fill(jsonData[i]);
    }

    data.reconstructTable();
  };
});

//SAVE DATA
downloadBtnEl.addEventListener("click", () => {
  data.values.length != 0
    ? download(JSON.stringify(data.values), "data.txt", "text/plain")
    : alert("Error: No existing data");
});

function download(content, fileName, contentType) {
  let link = document.createElement("a");
  let file = new Blob([content], { type: contentType });
  link.href = URL.createObjectURL(file);
  link.download = fileName;
  link.click();
}

//GET DATA FROM INPUT
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

drawGraph(75, 75, 10, 10, "blue", "grey");
