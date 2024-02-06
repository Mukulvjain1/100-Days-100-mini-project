// to display the rating in the thank you card
const rating = document.querySelector(".rat");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button5 = document.getElementById("btn5");

// Update the class toggling logic
function handleClick(click) {
  rating.innerText = click;

  // Remove "active" class from all buttons
  for (let i = 1; i <= 5; i++) {
    const button = document.getElementById(`btn${i}`);
    button.classList.remove("active");
  }

  // Add "active" class sequentially up to the clicked button
  for (let i = 1; i <= click; i++) {
    const button = document.getElementById(`btn${i}`);
    button.classList.add("active");
  }
}
// to open and close the rating card and thank you card
const ratingCard = document.querySelector(".rating");
const thankyouCard = document.querySelector(".thankyou-card");

function openThankyou() {
  ratingCard.style.display = "none";
  thankyouCard.style.display = "flex";
}

// to keep the selected feedback in active state
let selectedVal = 0;

function handleVal(val) {
  for (let i = 1; i <= 5; i++) {
    const button = document.getElementById(`btn${i}`);
    button.classList.remove("active");
  }

  for (let i = 1; i <= val; i++) {
    const button = document.getElementById(`btn${i}`);
    button.classList.add("active");
  }

  selectedVal = val;

  console.log("Selected Value:", selectedVal);
}
