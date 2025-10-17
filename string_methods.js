str = "Hello Guhan"; // here var str="hello";
console.log(str.length);
let upper = str.toUpperCase();
console.log(upper);

const bikeName = "Pulsar 150";
console.log(bikeName.toLocaleLowerCase());
console.log(str.charAt(52)); // <empty string>
console.log(str.indexOf("G")); //6
console.log(str.indexOf("z")); // -1 bcoz 'z' is not present in the string str
console.log(str.indexOf("l")); //2 gives the first index of 'l'
console.log(str.indexOf("Guhan")); //6
console.log(str.indexOf("guh")); //-1 guh is not present and JavaScript is Case Sensitive
console.log(str.charAt(-1)); // <empty string>
console.log(str.lastIndexOf("l")); // 3
console.log(str.lastIndexOf("Guhan"));
console.log(bikeName.includes("pulsar")); //false
console.log(str.includes("Guhan")); //true
const isStart = bikeName.startsWith("P"); //true
isStart1 = bikeName.startsWith("Puls"); //true
// const age = 10;
// age = 12;
// console.log(age);
console.log(bikeName.endsWith("r 150")); //true
console.log(str.slice(6, 11)); // Guhan (0 - n-1) 'Guhan'
console.log(str.slice(6, 573489)); // here even though the end value is greater than the length of the string , "Guhan" is returned

const brand = "Bajaj";
console.log(brand.slice(-5)); // Bajaj
console.log(brand.slice(2)); //'jaj' frst index is always starting index
console.log(brand.slice(-5, 1)); //B
console.log(brand.slice(-5, 0)); //<empty string>

const car = "Creta";
console.log(car.substring(0, 3));
console.log(car.substring(5)); // <empty string>
var myCar = car.replace("Creta", "Hyundai Creta");
console.log(car + "***" + myCar);
str1 = "Hello Guhan Hello";
console.log(str1.replace("Hello", "Hi"));
console.log(str1.replaceAll("Hello", "Hi"));

let msg = "           Welcome to the World of     GBU Mamey     ";
console.log(msg.length); //53
trimmed = msg.trim();
console.log(trimmed.length);
let msg1 = "          guhan is a good boy            ";
let res = msg1.trimStart();
res = res + msg1.trimEnd();
console.log(res);

let address = "50,Thinayakudi,Pudukkottai,TamilNadu,India";
let split = address.split(); // Array [ "50,Thinayakudi,Pudukkottai,TamilNadu,India" ]
split = address.split("");
console.log(split);
// Array(42) [ "5", "0", ",", "T", "h", "i", "n", "a", "y", "a", … ]
console.log(address.split(","));
let fname = "Guhan";
let lname = "Muthuramalingam";
console.log(fname.concat(lname));
