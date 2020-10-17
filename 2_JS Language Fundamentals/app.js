// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET;
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST;
// const name = 'John';
// console.log(name);
// // Can not reassign
// // name = 'Sara';
// // Have to assign a value
// const greeting;

// const person = {
//   name: 'john',
//   age: 30,
// };

// person.name = 'Sara';
// person.age = 32;

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers);

// // 1-8.Data tyles in JS
// // PRIMITIVE

// //String
// const name = 'John Doe';
// //Number
// const age = 45;
// //Boolean
// const hasKids = true;
// //Null
// const car = null;
// //Undefiend
// let test;
// //Symbol
// const sym = Symbol();

// //REFERENCE TYPES - Objects
// //Array
// const hobbies = ['movies', 'music'];
// //Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA',
// };

// 1-9. Type conversion
// let val;

// // Number to string
// val = String(5);
// val = String(4 + 4);
// //Boolean to string
// val = String(true);
// //Date to string
// val = String(new Date());
// //Array to string
// val = String([1, 2, 3, 4]);

// //toString()
// val = (5).toString();
// val = true.toString();

// //String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3]);

// val = parseInt('100.30');
// val = parseFloat('100.30');

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// const val = String(5);
// const val2 = 6;
// const sum = Number(val + val2);
// console.log(sum);
// console.log(typeof sum);

// 1-10. Numbers & The Math Objext
// const num1 = 100;
// const num2 = 50;
// let val;

// // simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Objects
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 66, 5, -2);
// val = Math.max(2, 33, 4, 1, 66, 5, -2);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// 1-11. String Methods & Concatenation
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tag = 'web design, web development, programming';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is' + firstName + ' and I am ' + age;

// // Escaping
// val = "That's awesome, I can't wait";

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // charAt()
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice();
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');
// val = tag.split(',');

// // replace()
// val = str.replace('Brad', 'Jack');

// // include()
// val = str.includes('Hello');

// console.log(val);

// 1-12. Template Literals
// const name = 'John';
// const age = '30';
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Without template strings(es5)
// // With template strings(es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>Job: ${2+2}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

// 1-13. Arrays & Array Methods
// const numbers = [23, 34, 45, 2, 1, 5, 77, 453];
// const numbers2 = new Array(22, 3, 525, 5);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // Check if is array
// val = Array.isArray(numbers);
// // Get a single value
// val = numbers[0];
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // Mutating Arrays
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting array
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// // Find
// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(over50);
// console.log(numbers);
// console.log(val);

// 1-14. Object literals
// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 30,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL',
//   },
//   getBirthYear: function () {
//     return 2020 - this.age;
//   },
// };

// let val;

// val = person;

// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[0];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   { name: 'John', age: 44 },
//   { name: 'Steve', age: 23 },
//   { name: 'Nancy', age: 39 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// 1-15. Dates & Times
// let val;

// const today = new Date();
// let birthday = new Date('6-3-1995 23:30:00');
// birthday = new Date('6/3/1995');
// birthday = new Date('June 3 1995');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

// 1-16. If statement& Comparison Operators
const id = '100';

// // Equal to
// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Not Equal to
// if(id != 101) {
//     console.log('CORRECT');
// }else {
//     console.log('INCORRECT');
// }

// // Equal to value & type
// if(id === 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// 1-17. Switches
// let color = 'Blue';
// switch (color) {
//   case 'Red':
//     console.log('The color is Red');
//     break;
//   case 'Blue':
//     console.log('The color is Blue');
//     break;
//   default:
//     console.log('The color is not exist');
//     break;
// }

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

// 1-18. Function declarations & expressions
// Function declarations
// function greeting(firstName = 'John', lastName = 'Doe') {
//   //   if (typeof firstName === 'undefined') {
//   //     firstName = 'John';
//   //   }
//   //   if (typeof lastName === 'undefined') {
//   //     lastName = 'Doe';
//   //   }
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// // console.log(greeting('Steve', 'Smith'));

// // Function expressions
// const squares = function (x = 3) {
//   return x * x;
// };
// // console.log(squares());

// // Immediatly invokable function expressions - IIFEs
// // (function (name) {
// //   console.log(`Hello ${name}`);
// // })('brad');

// const todo = {
//   add: function () {
//     console.log('Add todo...');
//   },
//   edit: function (id) {
//     console.log(`Edit todo ${id}`);
//   },
// };

// todo.delete = function () {
//   console.log('Delete todo...');
// };

// todo.add();
// todo.edit(3);
// todo.delete();

// 1-19. General loops
// For loop
// for (let i = 0; i < 10; i++) {
//   if (i == 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if (i == 5) {
//     console.log('Stop the loop');
//     break;
//   }

//   console.log(`Number: ${i}`);
// }

// While loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Do while loop
// let i = 100;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// Foreach
// cars.forEach(function (car, index, array) {
//   console.log(`${index}: ${car}`);
//   console.log(array);
// });

// Map
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Steve' },
//   { id: 3, name: 'Sarah' },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// For in loop
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 36,
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

// 1-20. A look at the window object
// Window methods / Objects / Properties

// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// let val;

// Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// Scroll points
// val = window.scrollY;
// val = window.scrollX;

// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

// History Object
// window.history.go(-2);

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.userAgent;
// val = window.navigator.appVersion;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

// 1-21. Block scope with let & const
// // Global scope
// var a = 1;
// let b = 2;
// const c = 3;

// Function scope
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function scope: ', a, b, c);
// }
// test();

// Block scope
// if (true) {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If scope: ', a, b, c);
// }

// for (var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

// console.log('Global scope: ', a, b, c);
