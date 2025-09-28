// // void function
// function print() {
//   console.log("hello");
// }
// // it supports hoisting
// // console.log(10);
// // print();
// for (let i = 0; i < 5; i++) {
//   print();
// }
// console.log(cutoff(91, 92, 82));
console.log(show());

function print() {
  console.log("hello");
}

for (let i = 0; i < 5; i++) {
  print();
}
// parameters

function findPercentage(marks) {
  let percentile = (marks / 600) * 100;
  return Math.round(percentile);
}
console.log(findPercentage(551));

// rest parameter ...lengths  stores multiple args as an array named lengths
function getSize(...lengths) {
  return lengths;
}

console.log(getSize(35, 25, 32, 38, 25));
function getScores(first, second, third, ...cont) {
  console.log(Number(first) + "\n" + Number(second) + "\n" + Number(third));
  for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
  }
}
getScores(34, 33, 57, 21, 3, 0, 34, 89, 33, 56, 89, 129);
// anonymous function function without name
let cutoff = function (mat, phy, che) {
  console.log("Cuttoff Calculation");

  let result = mat + (phy + che) / 2;
  return Math.round(result, 2);
};
console.log(cutoff(91, 92, 82));
function show() {
  return "guhan";
}
console.log(show());
// Named function expression
let res = function canVote(age) {
  if (age >= 18) {
    return true;
  }
};
console.log(canVote(23));
// IIFE Imediately Invoked Function Expression

(function () {
  console.log("IIFE runs immediately!");
})();

function calculation(operation, num1, num2) {
  return (operation(num1, num2));
}
function sum(n1, n2) {
  return n1 + n2;
}
function diff(n1, n2) {
  return n1 - n2;
}
console.log(calculation(sum, 10, 17));
