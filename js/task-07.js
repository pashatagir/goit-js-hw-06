const inputEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");
inputEl.addEventListener("input", function (event) {
  outputEl.style.fontSize = event.currentTarget.value + "px";
});
