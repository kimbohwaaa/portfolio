const moreBtn = document.querySelector(".moreBtn");
const moreBox = document.querySelector(".moreBox");
const closeBtn = document.querySelector(".closeBtn");

moreBtn.addEventListener("click", () => {
  moreBox.classList.toggle("on");
});

closeBtn.addEventListener("click", () => {
  moreBox.classList.remove("on");
});
