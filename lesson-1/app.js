// DOM Document Object Model
// DOM manipulation

// html elemntlarni tanlab olish
// let title = document.getElementById("title");
// let title = document.getElementsByClassName("title");
// let title = document.getElementsByTagName("h1");
// let title = document.getElementsByName("search")
// let title = document.querySelector("#title");
// let title = document.querySelectorAll(".title");
// console.log(title);
// let test = Array.from(title).slice(1, 3);
// console.log(test[0]);
// let rr =document.

// elemntlar ichidan qiymat olish
// innerHtml
// textContent
// innerText

// let title = document.querySelector(".title");
// title.innerHTML = `<button >see more</button>`;
// console.log(title.innerHTML); // html elemtlari bilan bir oladi
// console.log(title.innerText); // browserda joylashgani bilan oladi
// console.log(title.textContent); // vscode qanday bolsa osh holdaoladi faqat textalrni

// =======================================giving style(style berish )
// let title = document.querySelector(".title");
// title.style.color = "red";
// title.style.fontSize = "15px";
// // title.style.justifyContent = "space-around";

// =============================== working with classlist (classlist bilan ishlash)
// add
// remove
// toggle
// contains
// value
// length

// let title = document.querySelector(".title");
// title.classList.add("dark");
// title.classList.remove("size");
// title.classList.toggle("dark");
// title.classList.toggle("dark");
// console.log(title.classList.contains("dark"));
// console.log(title.classList.value.includes("dark"));
// setTimeout((a) => {
//     console.log(a);
// }, 2000,true,44,55);
// console.log();
// function test(a,b){}
// test(1,2)
// if (title.classList.contains("dark")) {
//   title.classList.remove("dark");
// } else {
//   title.classList.add("dark");
// }

// /=================  setTimeout =================

// let func = (a,b) => {
//     console.log(a+b);
//   document.querySelector("body").style.backgroundColor = "black";
// };
// setTimeout(func, 2000, 12,"testting");

// =================== setinterval ================

// let counter = 0;
// let count = setInterval(() => {
//       counter++;
//   document.querySelector("body").classList.toggle("dark");
//   if (counter > 10) {
//     clearInterval(count);
//   }
//   //   console.log("setInterval worked", counter);
// }, 1000);
// let title = document.querySelector(".title");
// title.textContent = "thi is just text fot smth";

// console.log("1");
// console.log(2);
// setTimeout(() => {
//   console.log("12");
// }, 0);
// console.log(33);
// let str1 = "webt";
// let str2 = "brain";
// [str3, str2] = [str2, str1]
// console.log(str2);
// console.log(str1);

//it is not over untill we win => biz yutmagunimizcha oyin tugamaydi
