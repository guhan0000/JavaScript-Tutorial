let fruits = ["apple", "banana", "orange", ["apple", "banana"]];
fruits = fruits.flat();
console.log(fruits);

let occurence = fruits.reduce((acc, cv) => {
  if (acc[cv]) {
    acc[cv]++;
  } else {
    acc[cv] = 1;
  }
  return acc;
}, {});
console.log(occurence);
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];
let aciveUsers = users.filter((obj) => {
  return (obj.active = true);
});
console.log(aciveUsers);
