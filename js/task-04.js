const counterValue = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  dicrement(value) {
    this.value -= 1;
  },
};

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrBtn.addEventListener("click", function () {
  counterValue.dicrement();
  valueEl.textContent = counterValue.value;
});
incrBtn.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
