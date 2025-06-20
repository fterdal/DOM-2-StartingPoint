// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const button = document.getElementById("add-column");

button.addEventListener("click", () => {
  const rows = document.querySelectorAll("table tr");
  rows.forEach(row => {
    const newCell = document.createElement("td");
    row.appendChild(newCell);
  });
});

