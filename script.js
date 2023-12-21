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
  saveAll();
}

function MoveToRight() {
  const checkboxes = out1.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    out2.appendChild(checkbox.parentElement);
  });
  saveAll();
}

function MoveToLeft() {
  const checkboxes = out2.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    out1.appendChild(checkbox.parentElement);
  });
  saveAll();
}

function MoveToRightChecked() {
  const checkboxes = out1.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    out2.appendChild(checkbox.parentElement);
  });
  saveAll();
}

function MoveToLeftChecked() {
  const checkboxes = out2.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    out1.appendChild(checkbox.parentElement);
  });
  saveAll();
}

function deleteAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    const listInfo = checkbox.parentElement;
    listInfo.parentNode.removeChild(listInfo);
  });
  saveAll();
}

function deleteChecked() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const listInfo = checkbox.parentElement;
    listInfo.parentNode.removeChild(listInfo);
  });
  saveAll();
}

function selectAllCheckBox() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
   checkbox.checked = !checkbox.checked;
  });
  saveAll();
}

function saveAll() {
  localStorage.setItem("out1Info", out1.innerHTML);
  localStorage.setItem("out2Inf", out2.innerHTML);
}

function reCall() {
  const savedOut1 = localStorage.getItem("out1Info");
  const savedOut2 = localStorage.getItem("out2Inf");

  if (savedOut1) {
    out1.innerHTML = savedOut1;
  }

  if (savedOut2) {
    out2.innerHTML = savedOut2;
  }
}
reCall();
