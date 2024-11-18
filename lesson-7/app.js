let datasAll = [
  {
    id: 1,
    name: "John",
    age: 25,
    gender: "male",
  },
  {
    id: 2,
    name: "Alice",
    age: 32,
    gender: "female",
  },
  {
    id: 3,
    name: "Eve",
    age: 35,
    gender: "female",
  },
  {
    id: 4,
    name: "Bob",
    age: 28,
    gender: "male",
  },
];
let datas;
if (!localStorage.getItem("datas")) {
  localStorage.setItem("datas", JSON.stringify(datasAll));
} else {
  datas = JSON.parse(localStorage.getItem("datas"));
}

let table = document.querySelector("table");
let tbody = document.querySelector("tbody");
let form = document.querySelector(".mainForm");
let modalForm = document.querySelector(".modal_form");

function displayData(data) {
  tbody.innerHTML = "";
  data.forEach((elem, inx) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdGender = document.createElement("td");
    let tdAction = document.createElement("td");
    tdId.textContent = elem.id;
    tdName.textContent = elem.name;
    tdAge.textContent = elem.age;
    tdGender.textContent = elem.gender;
    // buttons creation
    let delBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    editBtn.setAttribute("type", "button");
    editBtn.classList.add("btn", "btn-primary");
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#exampleModal");
    editBtn.setAttribute("data-bs-whatever", "@mdo");
    tdAction.append(delBtn, editBtn);
    tr.append(tdId, tdName, tdAge, tdGender, tdAction);
    tbody.append(tr);

    // actions here are
    delBtn.addEventListener("click", () => onDelete(elem.id));
    editBtn.addEventListener("click", () => onEdit(elem));
  });
  //   let tdId = document
}
displayData(datas);

//  form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let elem = e.target;
  let name = elem[0].value;
  let age = parseInt(elem[1].value);
  let gender = elem[2].value;
  let newData = {
    id: JSON.parse(localStorage.getItem("datas"))[datas.length - 1].id + 1,
    name,
    age,
    gender,
  };
  datas.push(newData);
  localStorage.setItem("datas", JSON.stringify(datas));
  displayData(JSON.parse(localStorage.getItem("datas")));
  elem.reset();
});

function onDelete(ids) {
  let res = JSON.parse(localStorage.getItem("datas")).filter(
    (val) => val.id !== ids
  );
  localStorage.setItem("datas", JSON.stringify(res));
  displayData(res);
}

function onEdit(val) {
  modalForm[0].value = val.name;
  modalForm[1].value = val.age;
  modalForm[2].value = val.gender;
  localStorage.setItem("editingID", val.id);
}

let submit_modalBtn = document.querySelector(".submit_modal");

submit_modalBtn.addEventListener("click", () => {
  let newName = modalForm[0].value;
  let newAge = modalForm[1].value;
  let newGender = modalForm[2].value;
  let editedval = {
    id: localStorage.getItem("editingID"),
    name: newName,
    age: newAge,
    gender: newGender,
  };
  console.log(editedval);
  let res = JSON.parse(localStorage.getItem("datas")).map((val) =>
    val.id == editedval.id ? editedval : val
  );
  console.log(res);
  localStorage.setItem("datas", JSON.stringify(res));
  displayData(JSON.parse(localStorage.getItem("datas")));

    modalForm.submit();
});
