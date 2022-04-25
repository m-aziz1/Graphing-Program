class TableManager {
  //inherit with extends
  constructor(xRow, yRow) {
    this.rows = [];
    this.rows.push(xRow, yRow);
  }

  //Methods
  build(dataArray, index = 0, property = "x") {
    for (let i = 0; i < dataArray.length; i++) {
      let cellNode = document.createElement("td");
      let textNode = document.createTextNode(`${dataArray[i][property]}`);
      //Push x and y Values Inside Data Cell Tags
      cellNode.appendChild(textNode);
      //Push Data Cells Inside Row Tags
      this.rows[index].appendChild(cellNode);
    }

    //Stop Recursion
    if (index === 1) {
      return;
    }

    //Repeat for Y values
    this.build(dataArray, 1, "y");
  }

  empty(parentArray) {
    //Remove Values for x and y Table Elements
    parentArray.forEach((parent) => {
      while (parent.childNodes.length > 2) {
        parent.removeChild(parent.lastChild);
      }
    });
  }
}
