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
    return this.values.findIndex(
      (index) => index.x === +xInput.value && index.y === +yInput.value
    );
  }

  add(xInput, yInput) {
    //Check if value is found (-1 = false)
    let index = this.compare(xInput, yInput);
    if (index > -1) {
      alert("This data point already exists");
    } else {
      let dataPair = this.create(+xInput.value, +yInput.value);
      //Add Value to Array
      this.values.push(dataPair);
      //Sort Array
      this.sort();
      console.log(this.values);
    }
  }

  remove() {}
}
