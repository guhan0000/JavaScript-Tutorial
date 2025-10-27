// let text_content = document.getElementById("demo").textContent;
// console.log(demo); // gives / sets raw text

// let pTextContent = document.getElementById("para1").textContent;
// console.log(pTextContent);

// let pTextContent2 = (document.getElementById("para2").textContent =
//   "<b>paragraph 2</b>"); //sets like <b>paragraph 2</b>

// innerText
// respects styling

// let pInnerText = document.getElementById("para1").innerText;
// console.log(pInnerText); // gets plain text

// let pInnerText2 = (document.getElementById("para1").innerText = "<b>guhan</b>"); //<b>guhan</b> is set

let pInnerText3 = document.getElementById("para3").innerText;
console.log(pInnerText3);

let pInnerHtml = document.getElementById("para2").innerHTML;
console.log(pInnerHtml);
let pInnerHtml2 = (document.getElementById("para2").innerHTML =
  "<q>guhan is a great man</q>");
