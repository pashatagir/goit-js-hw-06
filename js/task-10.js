function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  div: document.querySelector("#boxes"),
};
refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener("click", onBtnDestroyClick);
function onBtnCreateClick(event) {
  createBoxes(Number(refs.input.value));
}
function onBtnDestroyClick(event) {
  refs.div.innerHTML = "";
}
function createBoxes(amount) {
  let boxes = ``;
  for (let i = 1; i <= amount; i += 1) {
    boxes += `<div style="
    width: ${20 + i * 10}px;
    height: ${20 + i * 10}px;
    background-color: ${getRandomHexColor()};
">${i}</div>`;
  }
  return refs.div.insertAdjacentHTML("beforeend", boxes);
}
