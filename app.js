// const firstName = 'Adam';
// const lastName = 'Smith';

// const fullName = `My name is ${firstName} ${lastName}`;

// console.log(fullName);

// Factory Functions

// A factory function is a function that returns a new object. //

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw');
//     },
//   };
// }

// const circle1 = createCircle(5);
// console.log(circle1);
// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor Fucntion

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('Draw');
//   };
// }

// const circle = new Circle(5);
// console.log(circle);

// Dynamic Nature of objects;

// const circle = {
//   radius: 1,
// };

// circle.color = 'yellow';
// circle.draw = function () {
//   console.log('Draw');
// };

// delete circle.color;

// console.log(circle);

// 5. Constructor Property;

function createCircle(radius) {
  return {
    radius,
  };
}

const circle1 = createCircle(1);

function Circle(radius) {
  this.radius = radius;
}

const circle2 = new Circle(5);

console.log(circle1.constructor);
console.log(circle2.constructor);
