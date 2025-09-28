// console.log(firstName);
// var firstName = "Guhan";
// // const lastName="M";
// let age;
// console.log(add(1, 5));
// function add(a, b) {
//   return a + b;
// }
// console.log(add(9, 7));
// ********primitive datatype***********
let firstName = "Guhan";
let age = 23;
let isStudent = true;
let isMarried = null;
const gender = "M";
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof isStudent);
console.log(typeof gender + " " + gender);
// ********non primitive datatpye*********
let arr1 = ["Guhan", "Muthuramalingam", 23, true, false];
console.log(arr1);
const arr2 = ["mt15", "Google", "Hp", true, 25000];
arr2[4] = 35000;
console.log(arr2);
console.log(arr2[2]);
const ob1 = {
  manufacturer: "Yamaha",
  model: "mt-15",
  year: 2034,
  capacity: 12,
  isGreen: true,
};
console.log(ob1.year);
ob1.manufacturer = false;
console.log(ob1);

function generatePin() {
  var pin = Math.random();
  console.log(pin);
  let pin2 = 0;
}
generatePin();
pin = 23;
console.log(typeof undefined);

console.log(typeof null);