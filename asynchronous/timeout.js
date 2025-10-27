let box = document.getElementById("box");
let timer;
// box.addEventListener("mouseover", changeColor);
// function changeColor() {
//   //   box.style.backgroundColor = "blue";
//   box.classList.add("transformation");
// }
box.addEventListener("mouseover", () => {
  timer = setTimeout(() => {
    box.classList.add("transformation");
  }, 5000);
});
box.addEventListener("mouseout", () => {
  clearTimeout(timer);
  box.classList.remove("transformation");
  console.log("timeout cleared");
});
