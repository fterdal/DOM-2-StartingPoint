const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const clearButton = document.getElementById("clear-grid");
clearButton.addEventListener("click", (event) => {
  clearGrid();
});

function clearGrid() {
  const td = document.getElementsByTagName("td");

  for (let i = 0; i < td.length; i++) {
    td[i].style.backgroundColor = "white";
  }
}

