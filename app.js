let btn = document.querySelector(".background_button");
let background = document.querySelector("#body");
let colors = ["green", "red", "blue", "yellow", "purple", "pink"];

btn.addEventListener("click", changeColor);

let count = 0;
function changeColor() {
  count++;
  if (colors.length == count) {
    count = 0;
  }
  btn.style.colors = colors[count];
  background.style.background = colors[count];
}
