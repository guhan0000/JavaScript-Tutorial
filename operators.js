console.log(10 == "10");
console.log(1 == true);
const arr = [];
console.log(typeof arr);
let obj1 = {};
console.log(typeof obj1);
// ****************operators***************
console.log(1 + 5);
console.log(typeof ("1" + 6));
console.log(1 - "4");
console.log(1 + "6");
console.log(1 + 9);
console.log(5 - 9);
console.log(5 * 8);
console.log(8 / 2);
console.log(8 / 3);
console.log(5 % 4);
console.log(5 ** 2);
let num1 = 10;
console.log(num1++);
console.log(num1);
let num2 = 5;
console.log(++num2);
num2 **= 2;
console.log(num2);
// ****comparision operator******
console.log(10 == 10); // loose only consider value not type
console.log(10 === 10); // strict will consider both type and value.
console.log(10 === "10"); //false
console.log(10 == 10); //true
console.log(1 == true); // true
console.log(0 == false); //true
console.log(1 === true); //false
console.log(0 === false); //false
console.log(100 === true); //false
// ***!=*** loose checks values only not type
console.log(10 != "10"); //false
console.log(10 != 10); //false
// ****!==**** strict checks both values and type
console.log(10 !== "10"); // true
console.log("******************************************");
console.log(10 < 11); // true
console.log(10 < "11"); //true
console.log(5 >= "5"); // true
console.log("5" > 3); //true
console.log(!true); //false
console.log(!0); //true
console.log(!1); // false
console.log(10 > 5 && 7 < 5); //false
console.log("10" > 5 && !(10 > 100)); //true
console.log(!100); //false
console.log(!-298); // false

// in js all non zero nums are truthy
// so log(!200) gives false
/*
log(0) gives true
*/
let a1 = 10;
let a2 = "20";
console.log(a1 + a2); // 1020 concatenation
let str1 = "kavi";
str1 += "guhan";
console.log(str1);
