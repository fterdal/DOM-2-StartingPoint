// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);

  if (event.target.id === "fill-grid") {
    const colorSelect = document.getElementById("color-select");
    const currentColor = colorSelect.value;
    
    // Fill all uncolored cells with the currently selected color

    // Fill all cells with the currently selected color
    const allCells = document.querySelectorAll("td");
    [...allCells].forEach((e) => {e.style.backgroundColor = currentColor;});
  } 
  else if (event.target.id === "clear-grid") {
    // Clear all cells/restore all cells to their original/initial color
  }
  else if (event.target.tagName === "TD") {
    // Click and hold (mouseover) from a single cell (start) to a different cell (end)
    // such that all affected/hovered-over cells from start to end change to the currently
    // selected color

  }
});

