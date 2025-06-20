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
  cellListeners(); // Mouse dragging won't work unless it accounts for new cells added
});

// add columns to grid
const addColumns = document.getElementById("add-column");

addColumns.addEventListener("click", () => {
  for (let i = 0; i < getTable.rows.length; i++) {
    const row = getTable.rows[i];
    const newCells = document.createElement("td");
    row.appendChild(newCells);
  }
  cellListeners(); // Mouse dragging won't work unless it accounts for new cells added
});


// remove rows from the grid
const deleteRows = document.getElementById("delete-rows");

deleteRows.addEventListener("click", () => {
  if (getTable.rows.length > 0) {
    getTable.deleteRow(getTable.rows.length - 1);
  }
  console.log("rows have been deleted from the table with event listener");
});


//remove columns from grid
const deleteColumns = document.getElementById("delete-columns");

deleteColumns.addEventListener("click", () => {
  for (let i = 0; i < getTable.rows.length; i++) {
    const row = getTable.rows[i];
    if (row.cells.length > 0) {
      row.deleteCell(row.cells.length - 1);
    }
  }
});

// Emmanuel
// Select a color from a dropdown menu of colors
const colorSelect = document.getElementById("color-select");

colorSelect.addEventListener("change", () => {
  const selectedColor = colorSelect.value;
  console.log("Selected color: ", selectedColor);
});


// fill all cells with selected color
function fillAllCells() {
  const color = document.getElementById('color-select').value;
  const cells = document.querySelectorAll('td');

  cells.forEach(cell => {
    cell.style.backgroundColor = color;
  });
}


// clear all cells
function clearAllCells() {
  const cells = document.querySelectorAll('td');

  cells.forEach(cell => {
    cell.style.backgroundColor = '';
  });
}

// color helper
function colorCell(e) {
  const color = document.getElementById("color-select").value;
  e.target.style.backgroundColor = color;
}


// Emmanuel features-end 

/* click and hold (mouseover) from a single cell (start) to a different cell (end) 
such that all affected/hovered-over cells from start to end change to the currently selected color
*/

let isMouseDown = false;
let mouseButton = 0;

function cellListeners() {
  const cells = document.querySelectorAll("td");

  cells.forEach(cell => {
    // Prevent right-click menu
    cell.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    cell.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      mouseButton = e.button; // 0 = left, 2 = right
      applyMouseAction(e);
    });

    cell.addEventListener("mouseover", (e) => {
      if (isMouseDown) {
        applyMouseAction(e);
      }
    });

    cell.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
  });
}


// 0 for left click, 2 for right click
function applyMouseAction(e) {
  if (mouseButton === 0) { 
    colorCell(e);
  } else if (mouseButton === 2) {
    e.target.style.backgroundColor = "";
  }
}

// Making sure mouse stops coloring when button is released
document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Fill and clear buttons
document.getElementById("fill-grid").addEventListener("click", fillAllCells);
document.getElementById("clear-grid").addEventListener("click", clearAllCells);

// A little listener for the grid cells
cellListeners();



