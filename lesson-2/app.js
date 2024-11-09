// getAttribute
// setAttribute
// imageElem.setAttribute("src", images[i]);

// events
// click
// dblclick
// mouseenter
// /mouseleave
// mouseover
// mouseout
// keydown
// mousemove

// submit =>form
//   e.preventDefault();
//   e.target.reset();
// /============================
// /============================

// getattribute setAttribute
// let imgs = document.querySelector("img");
// // console.log(img.getAttribute("alt"));
// imgs.setAttribute(
//   "src",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s"
// );

// let images = [
//   "https://www.w3schools.com/images/w3schools_green.jpg",
//   "https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg",
//   "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
//   "https://static.vecteezy.com/system/resources/previews/036/226/872/non_2x/ai-generated-nature-landscapes-background-free-photo.jpg",
// ];

// let imgs = document.querySelector("img");
// setInterval(() => {
//   let randomIndex = Math.floor(Math.random() * images.length);
//   imgs.setAttribute("src", images[randomIndex]);
// }, 1000);

// let items = document.querySelectorAll(".item");
// console.log(items);
// setInterval(() => {
//   items.forEach((val, inx) => {
//     let x = Math.floor(Math.random() * 1400);
//     let y = Math.floor(Math.random() * 600);
//     let randomColor = Math.random().toString(16).slice(2, 8);
//     val.style.left = x + "px";
//     val.style.top = y + "px";
//     val.style.backgroundColor = "#" + randomColor;
//   });
// }, 3000);

// events
// click
// dblclick
// mouseenter
// /mouseleave
// mouseover
// mouseout
// keydown
// mousemove

// /////////////////////
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   let randomIndex = Math.floor(Math.random() * images.length);
//   imgs.setAttribute("src", images[randomIndex]);
//   console.log("btn clicked");
// });

// btn.addEventListener("dblclick", () => {
//   console.log("btn clicked");
// });

// btn.addEventListener("mouseenter", () => {
//   console.log("btn worked");
// });

// btn.addEventListener("mouseleave", () => {
//     console.log("btn worked");
//   });

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", () => {
//   console.log("box worked");
// });

// btn.addEventListener("mouseenter", () => {
//   console.log("btn worked");
// });

// box.addEventListener("mouseout", () => {
//   console.log("btn worked");
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.key === "Enter") {
//     console.log("Enter pressed");
//   }
// });
// let item = document.querySelector(".item")

// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;
//   let randomColor = Math.random().toString(16).slice(2, 8);
//   item.style.left = x + "px";
//   item.style.top = y + "px";
//   item.style.backgroundColor = "#" + randomColor;
//   console.log("mousemoved");
// });
