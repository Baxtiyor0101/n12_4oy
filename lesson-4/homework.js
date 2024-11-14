let form = document.querySelector("form");
let time;
let span = document.querySelector(".time");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let distance = +e.target[0].value;
  let device = e.target[1].value;
  switch (device) {
    case "car":
      time = distance / 90;
      break;
    case "bike":
      time = distance / 20;
      break;
    case "train":
      time = distance / 150;
      break;
    case "bus":
      time = distance / 50;
      break;
    case "plain":
      time = distance / 800;
      break;
    case "onfoot":
      time = distance / 10;
      break;

    default:
      time = 0;
      break;
  }
  let min = ((time - Number.parseInt(time)) * 60).toFixed();
  span.textContent = `${Number.parseInt(time)} soat ${min} minut`;
});
