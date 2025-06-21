// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  // console.log(event.target.tagName);
  // console.log(event.target);
});

const removeBtm = document.getElementById("remove-row");
removeBtm.addEventListener("click", removeButton);

//checks if there is any rows and if there are rows greater then 0 then remove one row

function removeButton() {
  const amountOfRows = document.getElementsByTagName("TR").length;
  lastrow = document.getElementsByTagName("TR")[amountOfRows - 1];
  lastrow.remove();

  //checks if there is any rows and if there are rows greater then 0 then remove one row
}

const removeCol = document.getElementById("remove-column");
removeCol.addEventListener("click", removecolums);

function removecolums() {
  const rows = document.getElementsByTagName("tr"); //acess the file rows frist
  for (let i = 0; i < rows.length; i++) {
    // use go for to go through the rows
    const cells = rows[i].getElementsByTagName("td"); //for the crrent row i find all the cells inside that row
    if (cells.length > 0) {
      //if there any cells at all
      rows[i].removeChild(cells[cells.length - 1]); //that row/parent will go remove a cell because its tr/row and parent has a
      // method to remove child/cell and we need to use to remove the child/row .removechild
    }
  }
}
