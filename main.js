// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
const allCells = [...document.querySelectorAll("td")];
let filling = false;

const removeColumnsButton = document.getElementById("remove-column");
const columnsToRemove = document.getElementsByTagName("tr");

removeColumnsButton.addEventListener("click", () => {
  for (let i = 0; i < columnsToRemove.length; i++) {
    columnsToRemove[i].children[0].remove();
  }
});

root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);

  if (event.target.id === "fill-unfilled") {
    // Fill all uncolored cells with the currently selected color
    allCells.forEach((e) => {
      if (e.style.backgroundColor === "")
        e.style.backgroundColor = GetCurrentColor();
    });
  } else if (event.target.id === "fill-entire") {
    // Fill all cells with the currently selected color
    allCells.forEach((e) => {
      e.style.backgroundColor = GetCurrentColor();
    });
  } else if (event.target.id === "clear-grid") {
    // Clear all cells/restore all cells to their original/initial color
    allCells.forEach((e) => {
      e.style.backgroundColor = "";
    });
  }

  filling = false;
});
// Click and hold (mouseover) from a single cell (start) to a different cell (end)
// such that all affected/hovered-over cells from start to end change to the currently
// selected color
allCells.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = GetCurrentColor();
  });
  e.addEventListener("mousedown", (event) => {
    filling = true;
    e.style.backgroundColor = GetCurrentColor();
  });
  e.addEventListener("mouseover", (event) => {
    if (filling) e.style.backgroundColor = GetCurrentColor();
  });
});

function GetCurrentColor() {
  return document.getElementById("color-select").value;
}
// Add Column
const addColumnButton = document.getElementById("add-column");
const rowsToAddColumn = document.getElementsByTagName("tr");

addColumnButton.addEventListener("click", () => {
  for (let i = 0; i < rowsToAddColumn.length; i++) {
    rowsToAddColumn[i].appendChild(document.createElement("td"));
  }
});

// Add Row
const addRowButton = document.getElementById("add-row");
const rowsToAddRow = document.getElementsByTagName("tr");

addRowButton.addEventListener("click", () => {
  const table = rowsToAddRow[0].parentNode;
  const newRow = document.createElement("tr");
  const colCount = rowsToAddRow[0].children.length;

  for (let i = 0; i < colCount; i++) {
    newRow.appendChild(document.createElement("td"));
  }

  table.appendChild(newRow);
});

//Remove Row
const removeRowButton = document.getElementById("remove-row");
const rowsToRemove = document.getElementsByTagName("tr");

removeRowButton.addEventListener("click", () => {
  if (rowsToRemove.length > 0) {
    rowsToRemove[0].remove();
  }
});
