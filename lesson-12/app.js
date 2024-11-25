// Constructor function
// class

// function test(names, age) {
//   return {
//     name: names,
//     age: age,
//   };
// } 

// let user1 = test("Muhammad", 17);
// console.log(user1);

// //////////////////////////////////////Constructor function

// function Person(a = "testname", b = 10, c = "tashkent", d = {}) {
//   this.name = a;
//   this.age = b;
//   this.city = c;
//   this.location = d;
// }
// let nameofNewPerson = prompt("enter the name of the person");
// let ageOf = prompt("enter the name of the person");
// let cityOf = prompt("enter the name of the person");
// let person1 = new Person(nameofNewPerson, ageOf, cityOf, {
//   lat: "32323",
//   long: "3444",
// });
// let person2 = new Person("Ozodbek", 18);
// let person3 = new Person();
// console.log(person1);
// console.log(person2);
// console.log(person3);

// adding methods
// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// //   this.makeSound = function () {
// //     console.log("animal make some noise");
// //   };
// }

// Animal.prototype.makeSound = function () {
//   console.log("animal make some noise");
// };

// let cat = new Animal("catName", 2);
// let dog = new Animal("dogName", 4);
// cat.makeSound();
// dog.makeSound();
// console.log(cat);
// console.log(dog);

// console.dir({});

// //////////// classes //////////
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   makeSound() {
//     console.log("animal make some noise");
//   }
// }

// let cat = new Animal("Bagira", 3);
// cat.makeSound();
// console.log(cat);

// // 4 main consepts of classes
// // INcapsulation => himoyalangan property
// // Abstraction => user bilishi kere bomagan hossalari (osonlashishi)
// // INheritance => meros berilishi
// // Polimarphism => methids owerwrite qilish
// class Discont {
//   money = 2000; // public fields
//   #region = "Chilonzor"; // private fields
//   #password = "12345";
//   constructor(name, price, discount) {
//     this.name = name;
//     this.price = price;
//     this.discount = discount;
//   }
//   getRegion() {
//     if (this.#password === prompt("enter password")) {
//       return this.#region;
//     } else {
//       return "Access denied";
//     }
//   }
//   static calcDiscount() {
//     return 100 * 9;
//   }
// }

// let asadbekPrice = new Discont("Asadbek", 1000, 5);
// // console.log(asadbekPrice.money);
// console.log(asadbekPrice);
// console.log(Discont.calcDiscount());

// /////////// utility classes //////////
// class Calculate {
//   static sum(a, b) {
//     return a + b;
//   }
//   static abstract(a, b) {
//     return a - b;
//   }
//   static multiply(a, b) {
//     return a * b;
//   }
//   static divide(a, b) {
//     return a / b;
//   }
// }

// console.log(Calculate.sum(10, 15));
// console.log(Calculate.abstract(34, 15));
// console.log(Calculate.multiply(34, 15));
// console.log(Calculate.divide(222, 15));

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   makeSound() {
//     console.log("Animal makes a sound");
//   }
//   countAnimals() {
//     console.log("Total animals");
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
//   makeSound() {
//     console.log("Dog barks");
//   }
// }

// let dog1 = new Dog("Buddy", 3, "Black");
// dog1.countAnimals();
// let cat = new Animal("Bagira", 2);
// cat.makeSound();
// // console.log(console.log());
//

// ////////// homework //////////
// 1) 4 ta construktor function  kamida 3 tadan methodslar bolsn
// 2) 5 ta calass yasash kere hozr korgan hamma hosslari qatnashishi kere
// (
// // INcapsulation => himoyalangan property
// // Abstraction => user bilishi kere bomagan hossalari (osonlashishi)
// // INheritance => meros berilishi
// // Polimarphism => methids owerwrite qilish
// )
// => 90
