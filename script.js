const directions = document.querySelectorAll(".divDirection i");
const color01 = document.querySelector("#color01");
const color02 = document.querySelector("#color02");
const btnGerar = document.querySelector("button");
const output = document.querySelector("textarea");
let direction = "to top";

directions.forEach((item) => {
  item.onclick = () => {
    document.querySelector(".active").classList.remove("active");

    item.classList.add("active");

    direction = item.getAttribute("data-dir");
  };
});

btnGerar.onclick = () => {
  const gradient = `linear-gradient(${direction}, ${color01.value}, ${color02.value})`;

  document.body.style.backgroundImage = gradient;
  output.value = gradient;
};
