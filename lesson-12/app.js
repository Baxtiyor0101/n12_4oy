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

// Constructor function
// function Student(ism, city) {
//   //this = {}
//   this.name = ism;
//   // this = {name:Ozodbek}
//   this.city = city;
//   // this = {name:Ozodbek, city:qashqadaryo}
//   // this.sayHi = function () {
//   //   console.log(`Hello, my name is ${this.name}. I live in ${this.city}`);
//   // };
// }
// Student.prototype.sayHi = function () {
//   console.log(`Hello, my name is ${this.name}. I live in ${this.city}`);
// };

// let student1 = new Student("Ozodbek", "Qashqadaryo");
// let student2 = new Student("Ozodbek", "Qashqadaryo");
// student1.sayHi();
// console.log(student1.__proto__ == Student.prototype);
// console.log(student2);

// function Test(params) {
//   this.params = params;
// }

// let test1 = new Test("test");
// console.log(test1.__proto__ == student1.__proto__);

/////////////////// classes
class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Test1 extends Test {
  #balance = 1000;
  constructor(name, age, emails) {
    super(name, age);
    this.emails = emails;
  }
  getBalance() {
    return this.#balance;
  }
  get email() {
    return `${this.emails} is  my email`;
  }
  set changeSmth(smth) {
    // console.log(smth);
    this.name = smth.split(" ")[0];
    this.emails = smth.split(" ")[1];
  }
}

let test1 = new Test1("Ozodbek", 25, "exampl@dd.com");
console.log(test1);
console.log(test1.email);
test1.changeSmth = "Samandar test@get.com";
console.log(test1);
