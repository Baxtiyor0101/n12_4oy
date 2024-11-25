document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let loading = document.querySelector(".loading");
  loading.style.display = "block";
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }x``

  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       loading.style.display = "none";
  //       response.forEach((elem) => {
  //         let card = document.createElement("div");
  //         let email = document.createElement("h3");
  //         let name = document.createElement("h2");
  //         email.textContent = elem.email;
  //         name.textContent = elem.name;
  //         card.append(email, name);
  //         card.classList.add("card");
  //         container.append(card);
  //       });
  //       console.log(response);
  //     });
  // (async function displayDatas() {
  //   try {
  //     let response = await fetch(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     await delay(2000); // simulate delay for loading effect
  //     let comments = await response.json();
  //     loading.style.display = "none";
  //     console.log(comments);
  //     comments.forEach((elem) => {
  //       let card = document.createElement("div");
  //       let email = document.createElement("h3");
  //       let name = document.createElement("h2");
  //       email.textContent = elem.email;
  //       name.textContent = elem.name;
  //       card.append(email, name);
  //       card.classList.add("card");
  //       container.append(card);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // await ...
  //   // console.log("fssdd");
  //   // await ...
  //   // await ...
  // })();
  //   dispatchEvent()

  (async function () {
    let photos = await fetch("https://jsonplaceholder.typicode.com/photos");
    let delay1 = await delay(3000);
    let datas = await photos.json();
    loading.style.display = "none";
    datas.forEach((val) => {
      let img = document.createElement("img");
      img.src = val.url;
      container.append(img);
    });
    console.log(datas);
  })();
});
