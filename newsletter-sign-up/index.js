let card_1 = document.getElementById("card");
let card_2 = document.getElementById("thanks");

function openpopup() {
   // Get the email input value
   const emailInput = document.getElementById("email").value;

   // Check if the entered value is a valid email
   if (isValidEmail(emailInput)) {
      card_2.classList.add("success-popup");
      card_1.classList.add("main-popup");
   } else {
      // Invalid email, show an error message or take appropriate action
      alert('Please enter a valid email address.');
   }
}

function closepopup() {
    card_2.classList.remove("success-popup");
    card_1.classList.remove("main-popup");
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Email update
const emailInput = document.getElementById("email"); 
const output = document.getElementById("mail");     

emailInput.addEventListener("input", function () {
  const inputValue = emailInput.value;
  output.textContent = `${inputValue}`;
});
