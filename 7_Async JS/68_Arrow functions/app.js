// const sayHello = function () {
//   console.log('Hello');
// };

// const sayHello = () => {
//   console.log('Hello');
// };

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line return
// const sayHello = () => 'Hello';

// Same as above
// function sayHello() {
//     return 'Hello';
// }

// Return object
// const sayHello = () => ({
//   msg: 'Hello',
// });

// Single param does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const names = ['nathan', 'william', 'john'];

// const nameLength = names.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLength = names.map((name) => {
//   return name.length;
// });

// Shortest
const nameLength = names.map((name) => name.length);
console.log(nameLength);
