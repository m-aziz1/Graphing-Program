class DataManager {
  constructor() {
    this.values = [];
  }

  //Methods
  create(xElement, yELement) {
    return {
      x: xElement,
      y: yELement,
    };
  }

  sort() {
    //Arrange from Lowest to highest x Values
    this.values.sort((a, b) => a.x - b.x);
  }

  fill(xElement, yELement) {
    let dataPair = this.create(xElement, yELement);
    //Add Value to Array
    this.values.push(dataPair);
    //Sort Array
    this.sort();
  }

  compare(xInput, yInput) {
    //(-1 = value does not exist)
    return this.values.findIndex(
      (index) => index.x === xInput && index.y === yInput
    );
  }

  add(xInput, yInput) {
    let index = this.compare(xInput, yInput);
    if (index > -1) {
      alert("This data point already exists");
    } else {
      this.fill(xInput, yInput)
      //update table
    }
  }

  remove(xInput, yInput) {
    let index = this.compare(xInput, yInput);
    if (index > -1) {
      this.values.splice(index, 1);
      //update table
    } else {
      alert("This data point does not exist");
    }
  }
}
