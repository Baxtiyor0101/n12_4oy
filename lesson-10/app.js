// promise Methods
// Promise.resolve() => avtamatski resolve boladi
// Promise.rejecte() => avtamatski reject boladi
// Promise.all()
// Promise.any()
// Promise.race()
// Promise.allsettled()

// ///PROMISE ALL
// let pro1 = Promise.resolve("this promise retunr true");
// // pro1.then((res) => {
// //   console.log(res);
// // });
// // console.log(pro1);

// let pro2 = Promise.resolve("this promise returns false");
// let pro3 = Promise.resolve("this not done");
// promise.all() => methodi korilayotgan promiselar orasida hammasi resolve
//  qaytsagina resolve qaytaradi array holatda . Agarda uni ichida bittta reject bolsa ham bu natijaviy promise
//  reject qaytaradi (yani birinchi kelgan rejectni chiqaradi)

// let promiseAll = Promise.all([pro1, pro2, pro3]);
// promiseAll.then((res) => {
//   console.log(res);
// });

// ////////////////////////PROMISE ANY =>korilayotgan pro lar orasida birinchi kelgan
// resolve javobni qaytradi agar hammasi reject bolsa aggregateError qaytarai
// let pro1 = Promise.reject("this promise retunr pro1");
// let pro2 = Promise.reject("this promise returns pro2");
// let pro3 = Promise.reject("this not done pro3");

// let pro1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("this pro1");
//   }, 2000);
// });
// let pro2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("this pro2");
//   }, 1000);
// });
// let pro3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("this pro3");
//   }, 500);
// });

// Promise.any([pro1, pro2, pro3]).then((res) => {
//   console.log(res);
// });

// /////////////////// Promise.race => birinchi qaytga javob
// let pro1 = Promise.resolve("pro1");
// let pro2 = Promise.reject("pro2");
// let pro3 = Promise.resolve("pro3");

// Promise.race([pro2, pro1, pro3]).then((result) => {
//   console.log(result);
// });

// ////////////////// Promise.allsetttled => allsetttled hamma responselarni qaytaradi 
// togrilarini ham notogrilariniham 
// let pro1 = Promise.resolve("pro1");
// let pro2 = Promise.reject("pro2");
// let pro3 = Promise.resolve("pro3");
// Promise.allSettled([pro1, pro2, pro3]).then((res) => {
//   console.log(res);
// });
