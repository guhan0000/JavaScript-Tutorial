console.log("hello guhan");
// console.log(2+2);
var num = 10;
// console.log(num+2);
let a = 100;
var str = "guhan";
const age = 23;

// console.log(a);
// console.log(
//   str + " is " + age + " years old and gonna live for " + a + " years"
// );

// var num1;
// let num2;
// const num3 = 0;
// console.log(num1);
// console.log(num2);
// console.log(num3);//***********var*****************
var firstName = "Guhan";
var lastName;
console.log(firstName);
var lastName;
lastName = "Muthuramalingam";
lastName = "rames"; // reinitialization not possible
console.log(lastName);
console.log(firstName + " " + lastName);
// console.log(lastName="M");
var lastName = "Morgan"; // redeclaration
console.log(lastName);

/* var
declaration 
initialization
re declaration also possible
*/
// ************let*******************
let pin = 5252;
let cardNum;
pin = 1144; // reinitialization possible
cardNum = 6541202578964520;
console.log(cardNum);
console.log(pin);
// let pin=5878; redeclaration is not possible

// *************const*****************
const percentile = 91.8;
// const cuttOff; definition alone is not possible
console.log(percentile);

// scope
const capacity = 20;
let name = "Creta";
var manufacturer = "Hyundai";
// ********function scope***********
function greet() {
  var seats = 6;
  const doors = 4;
  let music = true;
  console.log("hello dude");
  console.log(
    name + " " + " by " + manufacturer + " has " + capacity + " litres tank"
  );
}
greet();
console.log(capacity);
console.log(name);
console.log(manufacturer);
// console.log(seats);
// console.log(doors);
// console.log(music)
// ***********block scope*********
if (true) {
  var bikeManufacturer = "yamaha";
  let bikeName = "MT-15";
  const bikecapacity = 12;
  console.log(bikeManufacturer + bikeName + bikecapacity);
}
console.log(bikeManufacturer);
console.log(bikeName);
console.log(bikecapacity);
