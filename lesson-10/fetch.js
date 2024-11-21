// > fetch => api bialn ishlash(har doim promise qaytaradi)
// exampleAPI: https::/api/testing
// GET()

/////////////////////////
let container = document.querySelector(".container");
let imgs = document.createElement("img");
imgs.src = "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649";
container.appendChild(imgs);
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((photo) => {
      let card = document.createElement("div");
      let title = document.createElement("h3");
      let img = document.createElement("img");
      title.textContent = photo.title;
      img.setAttribute("src", photo.thumbnailUrl);
      card.append(img, title);
      card.style.border = "2px solid red";
      card.style.width = "300px";
      card.style.textAlign = "center";
      container.append(card);
      console.log(photo);
    });
  });

//    homework
// 3 ta promise create qilasla 
// birinchi proda array ichida 10ta malumot qaytadi 
// ikinchisida 10ta string
// uchunchisida 10ta rasm(url)

//  shuni keyin promise allda.promise anyda,raceda ,allsettledda hamma holatini yozsla 