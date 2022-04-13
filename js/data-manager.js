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

  compare(xElement, yELement) {
    return this.values.findIndex(
      (point) => point.x === +xElement.value && point.y === +yELement.value
    );
  }

  add(dataPair, elOne, elTwo) {
    //Check if value is found (-1 = false)
    let index = this.compare(elOne, elTwo);
    if (index > -1) {
      alert("This data point already exists");
    } else {
      this.fill(dataPair);
    }
  }

  remove() {}
}
