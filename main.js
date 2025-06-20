// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

//add rows to the grid
const addRows = document.getElementById("add-row");
const getTable = root.querySelector("table");

addRows.addEventListener("click", () => {
  const newRow = getTable.insertRow();
  console.log("new row added");
  for (let i = 0; i < getTable.rows[0].cells.length; i++) {
    const newCells = newRow.insertCell();
  }
});

// add columns to grid

const addColumns = document.getElementById("add-column");

addColumns.addEventListener("click", () => {
  for (let i = 0; i < getTable.rows.length; i++) {
    const row = getTable.rows[i];
    const newCells = document.createElement("td");
    row.appendChild(newCells);
  }

// Emmanuel

// Select a color from a dropdown menu of colors
const colorSelect = document.getElementById("color-select");

colorSelect.addEventListener("change", () => {
  const selectedColor = colorSelect.value;
  console.log("Selected color: ", selectedColor);
});
