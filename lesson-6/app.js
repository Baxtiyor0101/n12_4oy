// //  local storage
// let title = document.querySelector(".title");
// let increBtn = document.querySelector(".incre");
// let decreBtn = document.querySelector(".decre");
// let resetBtn = document.querySelector(".reset");
// let clearStorage = document.querySelector(".clear");
// let removeBtn = document.querySelector(".remove");

// let count = localStorage.getItem("count") ?? 0;
// // console.log(localStorage.getItem("count"));
// title.textContent = count;
// increBtn.addEventListener("click", () => {
//   count++;
//   localStorage.setItem("count", count);
//   localStorage.setItem("user", "this is Muhammad");
//   title.textContent = count;
// });

// decreBtn.addEventListener("click", () => {
//   if (count === 0) {
//     title.textContent = count;
//     return;
//   }
//   count--;
//   title.textContent = count;
// });

// resetBtn.addEventListener("click", () => {
//   title.style.display = "block";
//   decreBtn.style.display = "inline-block";
//   increBtn.style.display = "inline-block";
//   increBtn.style.borderRadius = "20px";
//   count = 0;
//   title.textContent = count;
//   localStorage.setItem("count", count);
// });  

// clearStorage.addEventListener("click", () => {
//   count = 0;
//   localStorage.setItem("count", count);
//   title.textContent = count;
//   localStorage.clear();
// });
// removeBtn.addEventListener("click", () => {
//   title.style.display = "none";
//   decreBtn.style.display = "none";
//   increBtn.style.display = "none";
//   count = 0;
//   localStorage.setItem("count", count);
//   title.textContent = count;
//   localStorage.removeItem("count");
// });

// // local storagega malumot saqlash yoki uni ozgartrish uchun
// // localstorage.setItem("count",value)

// // local storagedan malumot olish
// // localstorage.getIyem("count")

// // //////////// working with list
// let form = document.querySelector("form");
// let ulist = document.querySelector("ul");
// let datas = JSON.parse(localStorage.getItem("datas")) || ["BMW", "Porsche"];
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let elem = e.target;
//   let text = elem[0].value;
//   datas.push(text);
//   localStorage.setItem("datas", JSON.stringify(datas));
//   displayList(datas);
//   elem.reset();
// });

// function displayList(data) {
//   ulist.innerHTML = "";
//   data.forEach((val) => {
//     let li = document.createElement("li");
//     li.textContent = val;
//     ulist.appendChild(li);
//   });
// }

// displayList(datas);

navigator.geolocation.getCurrentPosition(
  (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
  },
  (error) => {
    console.error(`Error occurred: ${error.message}`);
  }
);
