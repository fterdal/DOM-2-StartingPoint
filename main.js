// Add row feature
const addRowBtn = document.getElementById("add-row");
const tbody = document.querySelector("table tbody");

addRowBtn.onclick = function () {
  const cols = tbody.rows[0].cells.length;
  const tr = document.createElement("tr");
  for (let i = 0; i < cols; i++) tr.appendChild(document.createElement("td"));
  tbody.appendChild(tr);
};

