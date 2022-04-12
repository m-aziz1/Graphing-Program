//CLASSES
class DataManager {
  constructor() {
    this.values = [];
  }

  //Methods
  sort() {
    this.values.sort((a, b) => a.x - b.x);
  }

  fill(dataPair) {
    //Add Value to Array
    this.values.push(dataPair);
    //Sort Array
    this.sort();
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

  compare(elOne, elTwo) {
    return this.values.findIndex(
      (point) => point.x === +elementOne.value && point.y === +elementTwo.value
    );
  }
}

class Table {
  //inherit with extends
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  //Methods
  build() {}

  empty() {}
}

class Graph {
  constructor() {
    this.horizontal = 0;
    this.vertical = 0;
  }

  //Methods
  scale() {}

  design() {}
}
