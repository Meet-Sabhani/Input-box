let display = document.getElementById("display");
let out1 = document.getElementById("output");
let out2 = document.getElementById("output2");
let options = document.getElementById("options");
let checkboxCounter = 0;

function createL() {
  let div = document.createElement("li");
  const checkboxId = `${options.value}checkbox-${checkboxCounter++}`;
  div.innerHTML = `
            <input type="checkbox" id="${checkboxId}">
            <label for="${checkboxId}">${display.value}</label>
          `;
  if (display.value === "") {
    alert("you must write something");
  } else if (options.value === "table-1") {
    out1.appendChild(div);
  } else if (options.value === "table-2") {
    out2.appendChild(div);
  }
  display.value = "";
}

function MoveToRight() {
  const checkboxes = out1.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    out2.appendChild(checkbox.parentElement);
  });
}

function MoveToLeft() {
  const checkboxes = out2.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    out1.appendChild(checkbox.parentElement);
  });
}

function MoveToRightChecked() {
  const checkboxes = out1.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    out2.appendChild(checkbox.parentElement);
  });
}

function MoveToLeftChecked() {
  const checkboxes = out2.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    out1.appendChild(checkbox.parentElement);
  });
}

function deleteAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    const listInfo = checkbox.parentElement;
    listInfo.parentNode.removeChild(listInfo);
  });
}

function deleteChecked() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const listInfo = checkbox.parentElement;
    listInfo.parentNode.removeChild(listInfo);
  });
}
