// Please feel free to change the JS as you see fit! This is just a starting point.

const colorDropdown = document.getElementById("color-select");
const fillButton = document.getElementById("fill-grid");

let selectedColor = colorDropdown.value;

colorDropdown.addEventListener("change", () => {
  selectedColor = colorDropdown.value;
})



const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  // console.log(event.target.tagName);
  // console.log(event.target);
  if (event.target.tagName === "TD") {
    event.target.style.backgroundColor = selectedColor;
  }
});


fillButton.addEventListener('click', () => {
  const cells = document.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = selectedColor;
  }
})


const addRow = document.getElementById("add-row");

addRow.addEventListener("click", () =>
{
  const nmberOfColumns = document.getElementsByTagName("TR")[0].children.length;
  
  const newRow = document.createElement("TR");
  document.getElementsByTagName("tbody")[0].appendChild(newRow);

  for (let i = 0; i < nmberOfColumns; i++)
  {
    const newCell = document.createElement("TD");
    newRow.appendChild(newCell);
  }
});

const fillUncoloredCells = document.getElementById("fill-uncolored-cells");

fillUncoloredCells.addEventListener("click", () =>
{
    const cells = document.getElementsByTagName("TD").length;

    for (let i = 0; i < cells; i++)
    {
      const currentCell = document.getElementsByTagName("TD")[i];
      if (!currentCell.style.backgroundColor)
      {
        currentCell.style.backgroundColor = currentColor.value
      }
    }
});

const clearAllCells = document.getElementById("clear-grid");

clearAllCells.addEventListener("click", () =>
{
  const cells = document.getElementsByTagName("TD").length;

  for (let i = 0; i < cells; i++)
  {
    const currentCell = document.getElementsByTagName("TD")[i];
    currentCell.style.backgroundColor = "";
  }
});