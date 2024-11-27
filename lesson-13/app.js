// /////////////////// classes getter setter
// class Test {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
//   }
// }

// class Test1 extends Test {
//   #balance = 1000;
//   constructor(name, age, emails) {
//     super(name, age);
//     this.emails = emails;
//   }
//   getBalance() {
//     return this.#balance;
//   }
//   get email() {
//     return `${this.emails} is  my email`;
//   }
//   set changeSmth(smth) {
//     // console.log(smth);
//     this.name = "smth.split(" ")[0]";
//     this.emails = smth.split(" ")[1];
//   }
// }

// let test1 = new Test1("Ozodbek", 25, "exampl@dd.com");
// console.log(test1);
// console.log(test1.email);
// test1.changeSmth = "Samandar test@get.com";
// console.log(test1);

//  call apply bind
// function sayHi() {
//   console.log(this);
// }
// sayHi();

// let user = {
//   names: "Abdulaziz",
//   age: 20,
//   saybye() {
//     console.log("hayr", this.names);
//   },
//   greeting(a) {
//     console.log(
//       `salom meninf ismim ${this.names} yoshim esa ${this.age} email is ${a[0]}`
//     );
//     console.log(a[1]);
//   },
// };
// let user2 = {
//   names: "Muhammad",
//   age: 23,
// };
// let user3 = {
//   names: "Asadbek",
//   age: 23,
// };

// user.saybye();
// user.greeting.call(user2, "email.mil", 1000);
// user.greeting.apply(user2, ["email.mil@test", 3000]);
// let workLater = user.greeting.bind(user2, ["email.mil", 1000]);
// workLater();
// user.saybye.call(user3);
// user.greeting.call(user2);

// function test() {
//   console.log(this);
// }
// test.call({ name: "test" });

// let arr = [32, 43, 54, 6];
// let max = Math.max.apply(null, arr);
// console.log(max);

// function test() {
//   console.log(this);
// }

// test.call("sss", 12, 12);
// let res = test.apply({ name: "test" }, [12, 234]);
// console.log(res);
// let num = new Number(23);
// let result = test.bind({}, 12);
// result();
// result();
// console.log(num);
