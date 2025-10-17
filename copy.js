import { salary, yearsOfExperience } from "./dom.js";
/*let a = 10;
let b = 2;
console.log(a);
console.log(b);
b = a;
b++;
console.log(b);
console.log(a);
// shallow copy
// reference is copied / stored not actual values modification in copy reflects on original

// deep copy
// value is copied / stored changes in copy doesn't affect the original

let arr = [1, 3, 5, 7];
let copyArr = arr;
console.log(arr);
console.log(copyArr);
copyArr.pop();
console.log(copyArr);
console.log(arr);
// here [Shallow Copy performed] pop operation done in copyArr is reflected on arr

copyArr = [...arr];
console.log(arr);
console.log(copyArr);
copyArr.push(34324);
console.log(copyArr);
console.log(arr);
arr[0] = [3, 3];
console.log(copyArr);
console.log("***********************************");

let original = [1, 3, 5, [7, 9], 11];
let duplicate = [...original];
console.log(original);
console.log(duplicate);
duplicate[0] = "guhan";
console.log("original", original);
console.log("duplicate", duplicate);
duplicate[3][0] = "hello";
console.log("original", original);
console.log("duplicate", duplicate);

let deepCopy = structuredClone(original);

console.log("original", original);
console.log(deepCopy);
deepCopy[3][1] = "javascript";

console.log("original", original);
console.log(deepCopy);
*/
const obj = {
  fname: "Guhan",
  lname: "M",
  age: 23,
  qualification: "ug",
  isSingle: true,
};
console.log(obj);
obj.address = { city: "chennai", state: "TN", country: "IND" };
console.log(obj);

let copiedObj = { ...obj };
copiedObj.gender = "male";
console.log("copiedObj", copiedObj);
console.log("obj", obj);

copiedObj.address.city = "coimbatore";
console.log(copiedObj);
console.log(obj);

let duplicateObj = JSON.parse(JSON.stringify(obj));
duplicateObj.lname = "Muthuramalingam";
console.log(duplicateObj); // deepcopy performed
console.log(obj);
console.log(salary);
console.log(yearsOfExperience);
document.getElementsByName("h2[0]").innerText = salary;
