const button = document.querySelectorAll("button");
const card = document.querySelector("#card");

button.forEach((button) => {
  button.addEventListener("click", () => {
    card.classList.toggle("signin");
  });
});
