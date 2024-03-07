document.addEventListener("DOMContentLoaded", function () {
  // Get the input and live view elements
  const inputName = document.getElementById("holderName");
  const inputCardNumber = document.getElementById("holderCard");
  const inputMMexp = document.getElementById("expMM");
  const inputYYexp = document.getElementById("expYY");
  const inputCVC = document.getElementById("cvc");

  const Name = document.getElementById("Name");
  const cardNumberDisplay = document.getElementById("cardNo");
  const expMM = document.getElementById("MM");
  const expYY = document.getElementById("YY");
  const CVC = document.getElementById("cvcDisp");
  inputName.addEventListener("input", function () {
    Name.textContent = inputName.value;
  });

  inputCardNumber.addEventListener("input", function () {
    if (inputCardNumber.value.length > inputCardNumber.maxLength) {
      inputCardNumber.value = inputCardNumber.value.slice(
        0,
        inputCardNumber.maxLength
      );
    }

    let formattedInput = inputCardNumber.value.replace(/\D/g, "").slice(0, 16);

    // Add space after every 4 characters
    formattedInput = formattedInput.replace(/(\d{4})/g, "$1 ");

    // Update the card number display with the formatted input
    cardNumberDisplay.textContent = formattedInput.trim();
  });

  inputMMexp.addEventListener("input", function () {
    if (inputMMexp.value.length > 2) {
      inputMMexp.value = inputMMexp.value.slice(0, 2);
    }
    expMM.textContent = inputMMexp.value;
  });
  inputYYexp.addEventListener("input", function () {
    if (inputYYexp.value.length > 2) {
      inputYYexp.value = inputYYexp.value.slice(0, 2);
    }
    expYY.textContent = inputYYexp.value;
  });
  inputCVC.addEventListener("input", function () {
    if (inputCVC.value.length > 3) {
      inputCVC.value = inputCVC.value.slice(0, 3);
    }
    CVC.textContent = inputCVC.value;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the input and live view elements
  const inputElement = document.getElementById("textInput");
  const liveViewElement = document.getElementById("liveView");

  // Add an input event listener to the input field
  inputElement.addEventListener("input", function () {
    // Update the live view with the input field value
    liveViewElement.textContent = inputElement.value;
  });
});


  const form = document.getElementsByTagName(".ipField");
  const card2 = document.querySelector('.thankyou');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the default form submission
  });


function toggleVisibility() {
  if (form.classList.contains("hidden")) {
    card2.classList.add("visible");
    form.classList.remove("hidden");
  } else {
    card2.classList.add("hidden");
    form.classList.remove("visible");
  }
}
