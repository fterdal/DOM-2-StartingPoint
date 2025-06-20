// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const table = document.getElementsByTagName("table")[0];
let rows = table.rows.length;
let columns = table.rows[0].cells.length;

// Add rows to grid
const addRowButton = document.getElementById("add-row");
addRowButton.addEventListener("click", () => {
  table.insertRow(rows - 1);
  for(let i = 0; i < columns; i++) {
    table.rows[rows - 1].insertCell(0);
  }
  rows++;
})

// Add columns to grid
const addColumnButton = document.getElementById("add-column");
addColumnButton.addEventListener("click", () => {
  for(let i = 0; i < rows; i++) {
    table.rows[i].insertCell(0);
  }
  columns++;
})

// Remove rows from grid
const removeRowButton = document.getElementById("remove-row");
removeRowButton.addEventListener("click", () => {
  if(rows) {
    table.deleteRow(rows - 1);
    rows--;
  }
})

// Remove columns from grid
const removeColumnButton = document.getElementById("remove-column");
removeColumnButton.addEventListener("click", () => {
  for(let i = 0; i < rows; i++) {
    table.rows[i].deleteCell(0);
  }
  columns--;
})
