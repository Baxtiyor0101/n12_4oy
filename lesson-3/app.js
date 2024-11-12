// working with form elements
// Crud
let form1 = document.querySelector(".form1");
let ulist = document.querySelector(".ulist");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let delBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  let div = document.createElement("div");
  let span = document.createElement("span");
  //   let Delete = "delete";
  delBtn.textContent = "Delete";
  editBtn.textContent = "edit";
  span.textContent = e.target[0].value;
  div.append(delBtn, editBtn);
  li.append(span, div);
  ulist.append(li);
  //   console.log(ulist);
  li.classList.add("p-2");
  delBtn.classList.add("btn", "btn-primary");
  editBtn.classList.add("btn", "btn-primary");
  delBtn.addEventListener("click", () => {
    li.remove();
  });
  editBtn.addEventListener("click", () => {
    span.contentEditable = true;
    span.focus();

    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(span);
    range.collapse(false); // Collapse to the end of the content
    selection.removeAllRanges();
    selection.addRange(range);
  });
  span.addEventListener("focus", () => {
    span.style.outline = "none";
  });
  span.addEventListener("blur", () => {
    span.contentEditable = false;
  });
  e.target.reset();
});

// working with real datas
let table = document.querySelector("table");
let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let data = [
  { id: 1, name: "John Doe", age: 25, action: "del edit" },
  { id: 2, name: "Jane Doe", age: 30, action: "del edit" },
  { id: 3, name: "Alice Doe", age: 28, action: "del edit" },
];
data.forEach((val) => {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdName = document.createElement("td");
  let tdAge = document.createElement("td");
  let tdAction = document.createElement("td");
  tdId.textContent = val.id;
  tdName.textContent = val.name;
  tdAge.textContent = val.age;
  tr.append(tdId, tdName, tdAge,tdAction);
  tbody.append(tr);
  val.action.split(" ").forEach((item) => {
    let delBtn = document.createElement("button");
    // let editBtn = document.createElement("button");
    delBtn.textContent = item;
    tdAction.append(delBtn);
  });
});
