// let salary = 26200;
// let yearsOfExperience = 1;
// let hTags = document.getElementsByTagName("h2");
// // export {salary,yearsOfExperience};
// console.log(hTags);
// // document.getElementsByTagName("h2").innerText = "****"; cause error
// // for (let i = 0; i < hTags.length; i++) {
// //   hTags[i].innerText = "****/*****";
// // }
// document.querySelectorAll("h2").innerHTML = "$$$$$$"; // selects the first h2

// Dom Selection
// Single element Selection
let p1 = document.getElementById("para1");
p1.textContent = "Hello! This is Paragraph1";
document.querySelector(".para2").innerText = "Hey Para 2 here!!";
// querySelector can select the first id,class,tag
document.querySelector("#sp1").innerText = "Span1 here";
document.querySelector("span").innerText = "what up its span2";
// here at span tags the querySelector selects the same span tag so the one that present in the last is executed.
// the there is 2 spans so the query selector selects the first span

// multiple elements seletion
// 1. getElementsByClassName

let headings = document.getElementsByClassName("heading");
console.log(headings);

// getElementsByTagName
let pTags = document.getElementsByTagName("p");
console.log(pTags);

let h = document.querySelectorAll("h1");
console.log(h);
let p = document.querySelectorAll("p");
console.log(p);
let h1 = document.querySelectorAll(".heading");
console.log(h1);

let a = document.getElementById("a1");
console.log(a); // gives first <a> facebook

let a1 = document.querySelectorAll("#a1");
console.log(a1); // selects all the <a> tag having a1 as id

let a2 = document.querySelectorAll(".anchor");

console.log(a2);
console.log(document.querySelectorAll("a"));
