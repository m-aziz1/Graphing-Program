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
  "0": sizeFifty,
  "1": sizeSeventyFive,
  "2": sizeHundred,
  "3": arithmetic,
  "4": geometric,
  "5": series,
  "6": sum,
  "7": average,
  "8": median,
  "9": range,
  "10": lookup,
};

function sizeFifty() {
  alert("size-fifty");
}

function sizeSeventyFive() {
  alert("size-jg");
}

function sizeHundred() {
  alert("size-fifty");
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