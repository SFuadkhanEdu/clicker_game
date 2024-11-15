const cookie = document.querySelector("img");
const score = document.querySelector("span");
const c_u_1 = document.querySelector(".c_u_1");
const c_u_2 = document.querySelector(".c_u_2");
const p_u_1 = document.querySelector(".p_u_1");
const p_u_2 = document.querySelector(".p_u_2");
let score_per_click = 1;
let score_per_sec = 0;
cookie.addEventListener("click", () => {
  cookie.style.transform = "scale(1.5)";
  setTimeout(() => {
    cookie.style.transform = "scale(1)";
  }, 100);
  score.textContent = parseInt(score.textContent) + score_per_click;
});

const timer = setInterval(() => {
  score.textContent = parseInt(score.textContent) + score_per_sec;
  console.log("SPC: " + score_per_click);
  console.log("SPS: " + score_per_sec);
}, 1000);

addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    return;
  }
  const button = document.querySelector(`.${e.target.className}`);
  const price = parseInt(
    button.parentElement.parentElement.children[1].textContent
  );
  const price_element = button.parentElement.parentElement.children[1];
  if (score.textContent < price) alert("NOT ENOUGH POINTS");
  else {
    price_element.textContent = ((parseFloat(price) / 5) * 6).toFixed(2);
    score.textContent -= price;
    switch (e.target.className) {
      case "c_u_1":
        score_per_click += 2;
        break;
      case "c_u_2":
        score_per_click += 10;
        break;

      case "p_u_1":
        score_per_sec += 1;
        break;

      case "p_u_2":
        score_per_sec += 7;
        break;
      default:
        break;
    }
  }
});
