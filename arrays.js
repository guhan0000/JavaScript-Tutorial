arr = [0, 10, -4.3, 7.34, false, "guhan", undefined, [3, "t"]];
console.log(arr);

console.log(arr[-2]);

let arr1 = new Array(10, 20, 30, 40, 50);
console.log(arr1[-1]); //undefined
console.log(arr1.at(-2));

let arr3 = Array.of(1, 4, 5, 1, 8, 6, "l");
console.log(arr3);
arr3[0] = "guhan";
console.log(arr3);
arr3.push("don");
console.log(arr3);
arr3.pop();
console.log(arr3);
let res = arr3.shift();
console.log(arr3);
arr3.unshift("kavi");
console.log(arr3);
console.log(arr3.length);
console.log(arr3.indexOf("kav")); //-1
console.log(arr3.indexOf(6));
let newArr = [1, 1, 2, 3, 2, 5];
console.log(newArr.indexOf(2)); // first matching index
let bikes = ["bajaj", "honda", "hero", "yamaha", "ktm"];
console.log(bikes.includes("ktm"));
console.log(newArr.find(5));

