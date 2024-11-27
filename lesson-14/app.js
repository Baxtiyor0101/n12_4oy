// fetch Methods get delete put post (CRUD)
// json server
// 1.installing json-server => npm install -g json-server
// 2.db.json file yaratiladi
// 3.jsonserver yurgiziladi =>  json-server --watch db.json

document.addEventListener("DOMContentLoaded", () => {
  //   fetch("http://localhost:3000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  let ulist = document.querySelector(".ulist");
  let formcre = document.querySelector(".formcre");
  let editform = document.querySelector(".editform");
  (async function loadUsers() {
    let res = await fetch("http://localhost:3000/users");
    let data = await res.json();
    console.log(data);
    data.forEach((element) => {
      let li = document.createElement("li");
      let delBtn = document.createElement("button");
      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      delBtn.textContent = "Delete";
      li.textContent = element.email + " " + element.name;
      li.append(delBtn, editBtn);
      ulist.append(li);

      //   /////////actions
      delBtn.addEventListener("click", async () => {
        let res = await fetch(`http://localhost:3000/users/${element.id}`, {
          method: "DELETE",
        });
      });
      editBtn.addEventListener("click", async () => {
        let name = prompt("change the name", element.name);
        let email = prompt("change the email", element.email);
        let password = prompt("change the password", element.password);
        let updatedUser = {
          name,
          email,
          password,
        };
        await fetch(`http://localhost:3000/users/${element.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        });
      });
    });
  })();
  formcre.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;
    let newUser = {
      name,
      email,
      password,
    };
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  });
  //   editform.addEventListener("submit", async (e) => {
  //     e.preventDefault();
  //     let
  //   });

  //   prompt("Please", 232);

  //   /////////// searching
  (async function () {
    let res = await fetch("http://localhost:3000/users?name=Alice Johnson");
    let data = await res.json();
    console.log(data);
  })();
});
