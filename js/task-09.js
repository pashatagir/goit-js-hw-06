function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  output: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  refs.output.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.output.textContent;
}
