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
