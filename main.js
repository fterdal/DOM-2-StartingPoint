// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

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

const addColunm = document.getElementById("add-column");

addColunm.addEventListener("click", () =>
{
  const nmberOfRows = document.getElementsByTagName("TR").length;

  for (let i = 0; i < nmberOfRows; i++)
  {
    const newCell2 = document.createElement("TD")
    document.getElementsByTagName("TR")[i].appendChild(newCell2);
  }
});

const removeRow = document.getElementById("remove-row");

removeRow.addEventListener("click", () =>
{
  const nmberOfRows = document.getElementsByTagName("TR").length;
  const lastRow = document.getElementsByTagName("TR")[nmberOfRows - 1];
  lastRow.remove();
});

const removeColunm = document.getElementById("remove-column");

removeColunm.addEventListener("click", () =>
{
  const nmberOfRows = document.getElementsByTagName("TR").length;

    for (let i = 0; i < nmberOfRows; i++)
    {
      const removeCell = document.getElementsByTagName("TR")[i];
      removeCell.lastElementChild.remove();
    }
});

const currentColor = document.getElementById("color-select");

const colorCell = document.getElementsByTagName("table")[0];

colorCell.addEventListener("click", (event) =>
{
  if (event.target.tagName === "TD")
  {
  event.target.style.backgroundColor = currentColor.value;
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


const fillAllCells = document.getElementById("fill-grid");

fillAllCells.addEventListener("click", () =>
{
  const cells = document.getElementsByTagName("TD").length;

  for (let i = 0; i < cells; i++)
  {
    const currentCell = document.getElementsByTagName("TD")[i];
    currentCell.style.backgroundColor = currentColor.value
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

let isMouseButtonDown = false;

document.addEventListener("mousedown", () =>
{
  isMouseButtonDown = true;
});

document.addEventListener("mouseup", () =>
{
  isMouseButtonDown = false;
});

document.addEventListener("mouseover", (event) =>
{
  if (isMouseButtonDown && event.target.tagName === "TD")
  {
    event.target.style.backgroundColor = currentColor.value;
  }
});