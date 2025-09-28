let msg = (name) => {
  return name + " is a good guy";
};
console.log(msg("guhan"));

let square = (n1) => n1 * n1;
console.log(square(5));

let cube = (num) => {
  return num * num * num;
};
console.log(cube(5));
// ****Anonymous functions*****
// Named function expression
let res = function canVote(age) {
  if (age >= 18) {
    return true;
  } else return false;
};
console.log(res(13));
function calculate(operation, num1, num2) {
  return operation(num1, num2);
}
function add(n1, n2) {
  return n1 + n2;
}
function diff(n1, n2) {
  return n1 - n2;
}

console.log(calculate(add, 1, 7));
// here
//  calculate is a higher order function
// add, diff are callback functions
//********closure********** */
function outerFunction() {
  let age = 23;
  function innerFunction() {
    age = 24;
    console.log(age);
  }
  return innerFunction();
}
// outerFunction();
const variable = outerFunction();
console.log(variable());
