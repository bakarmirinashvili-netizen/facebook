const profileBtn = document.querySelector(".profile");
const dropdownMenu = document.querySelector(".dropdown-menu");

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

window.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});
const seeMoreBtn = document.getElementById("see-more-btn");
const moreItems = document.getElementById("more-items");
const btnText = document.getElementById("btn-text");
const arrow = seeMoreBtn.querySelector("svg");

seeMoreBtn.addEventListener("click", () => {
  if (moreItems.style.display === "none") {
    moreItems.style.display = "block";
    btnText.innerText = "See less";
  } else {
    moreItems.style.display = "none";
    btnText.innerText = "See more";
  }
});
