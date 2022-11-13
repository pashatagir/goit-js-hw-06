const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", function (event) {
  inputEl.classList.add("invalid");
  if (event.currentTarget.value.length == inputEl.dataset.length) {
    inputEl.classList.replace("invalid", "valid");
  }
});
// для того щоб в умові використовувалося суворе порівняння (===) можна
// inputEl.dataset.length привести до числа,
// тобто умова буде виглядати так
// event.currentTarget.value.length === Number(inputEl.dataset.length)
