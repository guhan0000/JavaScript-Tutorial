// try {
//   let a = [10, 40, 2];
//   console.log(add(a));

//   //   console.log("division is performed");
// } catch (exception) {
//   console.log(exception.message);
// } finally {
//   console.log("end");
// }

let ageField = document.getElementById("ip1");

p1 = document.getElementById("p1");
ageField.addEventListener("change", () => {
  try {
    let age = Number(ageField.value);
    if (age < 18) {
      throw new Error("age must be greater than 18");
    } else {
      p1.innerText = "you are eligible";
      //   console.log(age);
    }
  } catch (err) {
    p1.innerText = "";
    setTimeout(window.alert(err.message), 2000);
  }
  // let p = document.createElement("p");
  // document.body.appendChild(p);
});
