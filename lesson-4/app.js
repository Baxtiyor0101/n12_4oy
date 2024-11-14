let crudTable = document.querySelector(".crudTable");
let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");

let crudDatas = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Alice Doe", email: "alice@example.com" },
  { id: 4, name: "Bob Doe", email: "bob@example.com" },
  { id: 5, name: "Ozodbek", email: "ozodbek@example.com" },
  {
    id: 6,
    name: "Muhammad",
    email: "muhammad@example.com",
    action: "edit del",
  },
];

(function renderTableHead() {
  let tr = document.createElement("tr");
  Object.keys(crudDatas[0]).forEach((val) => {
    let th = document.createElement("th");
    th.textContent = val;
    tr.append(th);
    thead.append(tr);
  });
})();

function renderTableData(datas) {
  tbody.innerHTML = "";
  datas.forEach((val) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdAction = document.createElement("td");
    tdId.textContent = val.id;
    tdName.textContent = val.name;
    tdEmail.textContent = val.email;
    let delBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    tdAction.append(delBtn, editBtn);
    tr.append(tdId, tdName, tdEmail, tdAction);
    tbody.append(tr);

    delBtn.addEventListener("click", () => onDelete(val.id));
    editBtn.addEventListener("click", () => onEdit(val));
  });
  if (crudDatas.length === 0) {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "No data available";
    tr.append(th);
    th.setAttribute("colspan", 3);
    tbody.append(tr);
  }
}

renderTableData(crudDatas);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let elem = e.target;
  let nameText = elem[0].value;
  let emailText = elem[1].value;
  if (!nameText || !emailText) {
    alert("Please fill out all fields");
    return;
  }
  let newData = {
    id: new Date().getTime().toString(),
    name: nameText,
    email: emailText,
  };
  crudDatas.push(newData);
  renderTableData(crudDatas);
  elem.reset();
});

function onDelete(ids) {
  crudDatas = crudDatas.filter((val) => val.id !== ids);
  renderTableData(crudDatas);
  console.log(crudDatas);
}

function onEdit(val) {
  let nameText = prompt("Enter updated name", val.name);
  let emailText = prompt("Enter updated email", val.email);
  let newVal = { ...val, name: nameText, email: emailText };
  crudDatas = crudDatas.map((item) =>
    item.id === val.id ? (item = newVal) : item
  );
  renderTableData(crudDatas);
  console.log(crudDatas);
}
// ///////////////////////////////////////////  try catch  finally
try {
  //   console.log(age);
  let ages = 20;
  console.log(ages);
} catch (e) {
  console.dir(e);
} finally {
  console.log("Finally block is executed"); // finally blockunun tugadi bolmasi lazimdir
}

//  tryning ichida xatolik bolsa catchga otadi
// catchda osh xato ustida ishlaymiz
