let availableTerms = [
  "Restaurants near me",
  "Hotels near me",
  "Cafes near me",
  "Parks near me",
  "Museums near me",
  "Bars near me",
  "Gyms near me",
  "Grocery stores near me",
  "Pharmacies near me",
  "Bookstores near me",
  "Movie theaters near me",
  "Gas stations near me",
  "Banks near me",
  "Hospitals near me",
  "Schools near me",
];

const resultBox = document.getElementById("resultBox");
const inputField = document.getElementById("inputField");

inputField.onkeyup = function () {
  let result = []; //stores filtered keywords
  let input = inputField.value; //gets the value of the textbox on key up event
  if (input.length) {
    result = availableTerms.filter((term) => {
    return term.toLowerCase().includes(input.toLowerCase());
    });
    // console.log(result);
  }
  display(result);

  // if the search box is empty then the results box should be cleared and the blank space must not be displayed so we used this to clear the blank space if (!result.length){ resultBox.innerHTML=""; } else we used this to clear the blank space if (!result.length){ resultBox.innerHTML=""; }

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((term) => {
    return `<li onclick=selectInput(this)> ${term} </li>`;
  });
  resultBox.innerHTML = `<ul> ${content.join("")}</ul>`;
}

function selectInput(list) {
  inputField.value = list.innerText;
  resultBox.innerHTML = "";
}
