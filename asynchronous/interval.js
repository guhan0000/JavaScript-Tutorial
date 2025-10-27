// let interval;
// interval = setInterval(() => {
//   if (i <= 50) {
//     console.log(i);
//   }
//   i++;
// }, 2000);
// console.log(interval);

// clearInterval(interval);
// // let diff;
// diff = function () {
//   console.log("this is diff func");
// };
// let fun1 = diff();// automatially calls bcoz of ()present
// let fun1=diff
// diff() both works
// **********************************

// let counter, delay;
// counter = setInterval(() => {
//   console.log(i);
//   i++;
// }, 1000);
// delay = setTimeout(() => {
//   clearInterval(counter);
//   console.log("pause");
//   clearTimeout(delay);
// }, 5000);
let i = 1;

let counter, delay;
function startCounter() {
  counter = setInterval(() => {
    console.log(i);
    i++;
  }, 1000);

  setTimeout(() => {
    clearInterval(counter);
    console.log("paused");
    setTimeout(() => {
      console.log("resumes");

      startCounter();
    }, 2000);
  }, 5000);
}
startCounter();
