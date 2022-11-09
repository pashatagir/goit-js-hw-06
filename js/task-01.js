const allCategoriesEl = document.querySelectorAll(".item");

const allHeadingEl = document.querySelectorAll("h2");

const listInCategoryEl = document.querySelectorAll(".item ul");

console.log("Number of categories:", allCategoriesEl.length);

console.log("Category:", allHeadingEl[0].textContent);
console.log("Elements:", listInCategoryEl[0].querySelectorAll("li").length);

console.log("Category:", allHeadingEl[1].textContent);
console.log("Elements:", listInCategoryEl[1].querySelectorAll("li").length);

console.log("Category:", allHeadingEl[2].textContent);
console.log("Elements:", listInCategoryEl[2].querySelectorAll("li").length);
