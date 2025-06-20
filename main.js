// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
  console.log(event.target.style.backgroundColor);
  const color = document.getElementById("color-select");
  if(event.target.tagName == "TD"){
    const selected = color.value;
    event.target.style.backgroundColor = selected;
  }
  const uncoloredButton = document.getElementById("fill-uncolored grid");
  uncoloredButton.addEventListener("click", () => {
    allTD = document.querySelectorAll('td');
    allTD.forEach(td => {
      if(td.style.backgroundColor == ""){
        const selected = color.value;
        td.style.backgroundColor = selected;
      }
    });
  });
  const fillButton = document.getElementById("fill-grid");
  fillButton.addEventListener("click", () => {
    allTD = document.querySelectorAll('td');
    allTD.forEach(td => {
      const selected = color.value;
      td.style.backgroundColor = selected;
    });
  });
});