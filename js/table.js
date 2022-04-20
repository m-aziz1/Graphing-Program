class TableEditor {
  //inherit with extends
  constructor(xRow, yRow) {
    this.rows = [];
    this.rows.push(xRow, yRow);
  }

  //Methods
  build(dataArray) {
    for (let i in dataArray) {
      console.log(dataArray[i].x);
    }
  }

  update() {}

  empty(parentArray) {
    //Remove Values for x and y Table Elements
    parentArray.forEach((parent) => {
      while (parent.childNodes.length > 2) {
        parent.removeChild(parent.lastChild);
      }
    });
  }
}
