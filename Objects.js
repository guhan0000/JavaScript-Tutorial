const bike = {
  brand: "bajaj",
  model: "pulsar 150",
  color: "black",
  tankCapacity: 13,
  engine: 150,
};
console.log(bike);
console.log(bike.brand);
console.log(bike["model"]);
bike["model"] = "NS 200";
console.log(bike);
delete bike["model"];
console.log(bike);
delete bike.engine;
console.log(bike);
console.log("**************************");

// ****** can be defined using the Object Constructor*******

let car = new Object();
console.log(car);
car.brand = "Hyundai";
car.model = "creta Nline";
car["year"] = 2035;
car.fuel = "petrol";
car.color = "black";
console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
const values = Object.values(car);
for (let value of values) {
  console.log(value);
}
console.log(bike);

console.log(Object.entries(bike));
const person = { name: "Alice", age: 25 };
console.log(Object.entries(person));
let myVehicles = Object.assign(car, bike);
console.log(myVehicles); // assign the non duplicate values consider duplicate takes source values incase of duplicates
console.log(bike);
const p1 = {
  name: "guhan",
  age: 25,
  occupation: "Engineer",
  color: "dark brown",
  place: "pudukkottai",
};
let mobile = {
  model: "pixel",
  brand: "Google",
  ram: 8,
  rom: 256,
  color: "black",
};
console.log(mobile);
mobile.age = 1;
console.log(Object.assign(mobile, p1));
console.log(p1);
p1.age = 29;
Object.freeze(p1);

delete p1["name"];
console.log(p1);
//freeze prevents adding, removing, modifying objects.

// seal prevents only adding and removing allows modification

const p2 = { name: "ewr", age: 21, color: "white" };
console.log(p2);

Object.seal(p2);
p2.occupation = "doctor";
p2.age = 25;
console.log(p2);

let s101 = {
  rollNo: 101,
  name: "guhan",
  class: 8,
  sec: "A",
  grades: { tam: 85, eng: 90, mat: 80, sci: 90, soc: 95 },
  total: function () {
    let sum = 0;
    for (let sub in this.grades) {
      sum += this.grades[sub];
    }
    return sum;
  },
};

console.log(s101.total());
