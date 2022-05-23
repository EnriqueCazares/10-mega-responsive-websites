document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1-icons i");
const leftArrow = document.querySelector(
  ".section-1-row-2 .fas.fa-arrow-left.left-arrow"
);
const rightArrow = document.querySelector(
  ".section-1-row-2 .fas.fa-arrow-right.right-arrow"
);

let i = 1;

let interval = setInterval(runSlides, 5000);

function runSlides() {
  i++;

  const icon = document.querySelector(".section-1-icons .change");

  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else if (i === 0) {
    icons[icons.length - 1].classList.add("change");
    i = icons.length;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(runSlides, 2000);
}

leftArrow.addEventListener("click", () => {
  i--;
  runSlides();
  resetInterval();
});

rightArrow.addEventListener("click", () => {
  i++;
  runSlides();
  resetInterval();
});
