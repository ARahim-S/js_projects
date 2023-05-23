const el = document.querySelector(".btn");
console.log(el);

let randomNumber = function () {
  return Math.floor(Math.random() * 256);
};

let changeColor = () => {
  let randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  document.body.style.background = randomColor;
};

el.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);
