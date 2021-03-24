// const firstName = 'Adam';
// const lastName = 'Smith';

// const fullName = `My name is ${firstName} ${lastName}`;

// console.log(fullName);

// Factory Functions

// A factory function is a function that returns a new object. //

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}

const circle1 = createCircle(5);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);
