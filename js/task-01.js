const allCategoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", allCategoriesEl.length);
const allTitlesEl = document.querySelectorAll("h2");
allTitlesEl.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
