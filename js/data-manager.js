class DataManager {
  constructor(xRow, yRow) {
    this.values = [];
    this.table = new TableManager(xRow, yRow);
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

  fill(dataPair) {
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
      alert("Error: This data point already exists");
    } else {
      let dataPair = this.create(xInput, yInput);
      this.fill(dataPair);
      this.rebuildTable();
    }
  }

  remove(xInput, yInput) {
    let index = this.compare(xInput, yInput);
    if (index > -1) {
      this.values.splice(index, 1);
      this.rebuildTable();
    } else {
      alert("Error: This data point does not exist");
    }
  }

  empty() {
    this.values = [];
  }

  rebuildTable() {
    this.table.empty(this.table.rows);
    this.table.build(this.values);
  }

  export(fileType, fileName) {
    if (this.values.length != 0) {
      let link = document.createElement("a");
      let file = new Blob([JSON.stringify(this.values)], { type: fileType });
      link.href = URL.createObjectURL(file);
      link.download = fileName;
      link.click();
    } else {
      alert("Error: No existing data");
    }
  }
}
