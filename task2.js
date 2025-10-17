// 1
let numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.forEach((num) => {
  console.log(num * 2);
});
// console.log(doubledNumbers);

// 2
let people = ["Alice", "Bob", "Charlie"];
let greetPeople = people.forEach((name) => {
  console.log(`Hello ${name}!`);
});

// 3
const arr = [2, 4, 6];
let squaredArr = arr.map((num) => {
  return num * num;
});
console.log(squaredArr);

// 4
const players = [
  { name: "A", score: 50 },
  { name: "B", score: 70 },
];
let scores = players.map((player) => {
  return player.score + 10;
});
console.log(scores);

// 5
let arr2 = [5, -3, 10, -7, 8];
let positiveNums = arr2.filter((num) => {
  return num > 0;
});
console.log(positiveNums);

// 6
const employees = [
  { name: "John", experience: 3 },
  { name: "Jane", experience: 8 },
  { name: "Mike", experience: 6 },
];
let empRes = employees.filter((obj) => obj.experience > 5);
console.log(empRes);

// 7
const items = [
  { name: "A", price: 100 },
  { name: "B", price: 250 },
  { name: "C", price: 150 },
];

let prices = items.reduce((acc, cv) => {
  acc += cv.price;
  return acc;
}, 0);

console.log(prices);

//8
const products = [
  { name: "Shirt", price: 500 },
  { name: "Pants", price: 1200 },
  { name: "Shoes", price: 100 },
];
let prodRes = products.find((obj) => {
  return obj.price > 1000;
});
console.log(prodRes);

//9
const colors = ["red", "blue", "red", "green", "blue", "red", "yellow"];

let occurences = colors.reduce((acc, cv) => {
  if (acc[cv]) {
    acc[cv] += 1;
  } else {
    acc[cv] = 1;
  }
  return acc;
}, {});
console.log(occurences);

// 10
const students = [
  { name: "John", score: 72 },
  { name: "Jane", score: 85 },
  { name: "Sam", score: 90 },
  { name: "Mike", score: 65 },
  { name: "Lucy", score: 95 },
];
let count = 0;
let totalMarks = students.reduce((acc, cv) => {
  //   let total = 0;

  if (cv.score > 80) {
    acc += cv.score;
    count++;
  }
  return acc;
}, 0);
let avg = totalMarks / count;
console.log(avg);

let ages = [10, 12, 1];
let isAllEvenAges = ages.every((num) => num % 2 === 0);
console.log(isAllEvenAges);
console.log(`boolean${isAllEvenAges}`);

let marks = 99;
switch (marks) {
  case marks > 90 && marks >= 100:
    console.log("Grade A");
    break;
  default:
    console.log("invalid");
}
