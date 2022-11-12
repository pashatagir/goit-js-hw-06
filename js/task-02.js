const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeOneItemMarkup = (ingredients) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredients;
  return itemEl;
};

const makeAllItemsMarkup = ingredients.map(makeOneItemMarkup);

const listEl = document.querySelector("#ingredients");

listEl.append(...makeAllItemsMarkup);
