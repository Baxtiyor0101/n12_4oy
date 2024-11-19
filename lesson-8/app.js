// Bubbling => child=>>> parent
//  capturing =>  parant =>> child
// stopPropagation => stop bubling or capturing
// event delegation
// BOM
// let pText = document.querySelector("p");
// let strong = document.querySelector("strong");
// pText.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
// //   true
// );

// strong.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("child clicked");
//   },
// //   true
// );

// document.addEventListener(
//   "click",
//   () => {
//     console.log("document clicked");
//   },
// //   true
// );
// document.addEventListener("DOMContentLoaded", () => {
//   /////////////////
//   let ulist = document.querySelector("ul");
//   ulist.addEventListener("click", (e) => {
//     let elem = e.target;
//     if (elem.matches("li")) {
//       elem.style.background = "red";
//       console.log("document clicked");
//     }
//     if (elem.textContent === "apple") {
//       elem.style.background = "green";
//     }
//     if (elem.textContent === "orange") {
//       elem.style.background = "yellow";
//     }
//     if (elem.matches("button")) {
//       elem.style.background = "blue";
//     }
//   });

//   let li = document.createElement("li");
//   li.textContent = "melon";
//   ulist.append(li);
// });

// BOM(Browser Object Modal) (yoxud window)
// let vs var
// document
// screen
// navigator
// location
// history
// ////////////////////////////
// let age = 12;
// const test = 0;
// var names = "Muhamamd";
// console.log(window);
// let user = {
//   name: "John",
//   age: 25,
//   email:"test@example.com"
// };
// var email = "test@example.com";

// console.log(user.email.test);
// ////////////////////////////////////document

// window.document.querySelector("ul");
// ///////////////////////////screen
// console.log(window.screen.pixelDepth);

// ////////////////////// navigator
// console.log(window.navigator.userAgent);
// console.log(window.navigator.language);
// console.log(window.navigator.platform)
// console.log(window.navigator.onLine);
// if (!window.navigator.onLine) {
//   console.log("siz online emassz");
// }else{
//   console.log("siz online");
// }
// window.navigator.geolocation.getCurrentPosition((val) => {
//   console.log(val.coords.latitude, val.coords.longitude);
// });

// /////////////////// location
// console.log(window.location.href);

// console.log(window.location.pathname);
// console.log(window.location.search);
// console.log(window.location.hash);
// console.log(window.location.reload());
// window.location.reload();
// window.document.querySelector("button").addEventListener("click", () => {
//   window.location.reload();
// });

// window.document.querySelector("button").addEventListener("click", () => {
//   window.location.replace("/test.html");
// });
