document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let gobackBtn = document.querySelector(".goback");
  gobackBtn.addEventListener("click", () => {
    location.replace("/index.html");
  });
  let userId = location.search.slice(1);
  let user = JSON.parse(localStorage.getItem("cards")).find(
    (val) => val.id == userId
  );
});
