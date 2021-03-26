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

// // 5. Constructor Property;

// function createCircle(radius) {
//   return {
//     radius,
//   };
// }

// const circle1 = createCircle(1);

// function Circle(radius) {
//   this.radius = radius;
// }

// const circle2 = new Circle(5);

// console.log(circle1.constructor);
// console.log(circle2.constructor);

// 6. Functions are objects;

// 7. Value vs. Reference Types

// let x = 10;
// let y = x;

// x = 20;

// console.log(y); // y = 10 because it is copied value type or primitive type, not reference type.

// 8. Enumerating Properties of an object;

// const circle = {
//   radius: 1,
//   draw: function () {
//     console.log('Draw');
//   },
// };

// for (key in circle) {
//   console.log(key, circle[key]);
// }

// 9. Cloning an object

// const circle = {
//   radius: 1,
//   draw: function () {
//     console.log('Draw');
//   },
// };

// const another = {};

// for (let key in circle) {
//   another[key] = circle[key];
// }

// const another1 = Object.assign({}, circle);
// const another2 = { ...circle };

// console.log(another);
// console.log(another1);
// console.log(another2);

// const arr = ['mango', 'orange'];
// const arr1 = { ...arr };
// arr2 = Object.assign({}, arr);
// console.log(arr1);
// console.log(arr2);

// Date
// const now = new Date();

// console.log(now.toDateString());

// 16. Factory & Constructor Function Exercise

// factory
// const address = () => {
//   return {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c',
//   };
// };

// console.log(address());

// // constructor

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// const address1 = new Address('a', 'b', 'c');
// console.log(address1);
// const address2 = new Address('a', 'b', 'c');

// // 17. Are equal

// function areEqual(address1, address2) {
//   const value1 = Object.values(address1);
//   const value2 = Object.values(address2);

//   value1.forEach((value) => {
//     if (value2.includes(value)) {
//       console.log('true');
//     }
//   });
// }

// areEqual(address1, address2);

// Array

// 4. Finding element "Reference Types"

// const courses = [
//   { id: 1, name: 'a' },
//   { id: 2, name: 'b' },
// ];

// // In ref.types "find" can be used, not "includes";

// const course = courses.find((element) => element.id === 1);
// console.log(course);
// const index = courses.findIndex((course) => course.id === 2);
// console.log(index);

// 7. Emptying an array;

// const numbers = [1, 2, 3, 4, 5];

// numbers.splice(0);

// console.log(numbers);

// 8. Combine & Slice
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combine = first.concat(second);
// console.log(combine);

// 12.  Sorting

// const courses = [
//   { id: 1, name: 'Node js' },
//   { id: 2, name: 'JavaScript' },
// ];

// const compare = courses.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

// console.log(compare);

// 13. Every & Some

// const numbers = [1, 2, 3];

// const allPositive = numbers.every(function (value) {
//   return value >= 0;
// });

// console.log(allPositive);

// Map

// const numbers = [1, 2, 3, 4];

// const items = numbers
//   .map((number) => ({ value: number }))
//   .filter((obj) => obj.value > 2)
//   .map((value) => value.value);
// console.log(items);

// Reduce

// const numbers = [1, 2, 3, 4];

// let total = 0;
// for( let n of numbers ){
//   total += n;
// }
// console.log(total);

// const total = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(total);

// function arrayFromRange(min, max) {
//   let output = [];
//   for (let i = min; i <= max; i++) {
//     output.push(i);
//   }
//   return output;
// }

// const range = arrayFromRange(1, 5);
// console.log(range);

// Includes

// function includes(array, searchElement) {
//   return array.includes(searchElement);
// }

// const inc = includes([1, 2, 3, 4], 2);
// console.log(inc);

// Except

// function except(array, excluded) {
//   let output = [];
//   for (let n of array) {
//     if (!excluded.includes(n)) {
//       output.push(n);
//     }
//   }
//   return output;
// }

// const numbers = except([1, 2, 3, 4, 5], [1, 2]);
// console.log(numbers);

// Movies

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

console.log(movies);

const filteredMovie = movies.filter(
  (movie) => movie.year === 2018 && movie.rating > 4
);
const sortedMovie = filteredMovie.sort((a, b) => {
  return b.rating - a.rating;
});

// const pickTitle = sortedMovie.forEach((movie) => console.log(movie.title));

// for (let movie of sortedMovie) {
//   console.log(movie.title);
// }

sortedMovie.map((movie) => movie.title).forEach((movie) => console.log(movie));
