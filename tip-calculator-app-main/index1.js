let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let customTip = document.querySelector("#custom-tip");
let tipDisplay = document.querySelector("#calTip");
let totalDisplay = document.querySelector("#Total");
let tipcal = 0;
let totalcal = 0;

function tip(tipPer) {
    if (tipPer == "5") {
        tipcal = (bill.value * 0.05) / people.value;
        totalcal = Number(bill.value) + (Number(bill.value) * 0.05) / Number(people.value);
        console.log("5%");
    } else if (tipPer == "10") {
        tipcal = (bill.value * 0.1) / people.value;
        totalcal = Number(bill.value) + (Number(bill.value) * 0.1) / Number(people.value);
        console.log("10%");
    } else if (tipPer == "15") {
        tipcal = (bill.value * 0.15) / people.value;
        totalcal = Number(bill.value) + (Number(bill.value) * 0.15) / Number(people.value);
        console.log("15%");
    } else if (tipPer == "25") {
        tipcal = (bill.value * 0.25) / people.value;
        totalcal = Number(bill.value) + (Number(bill.value) * 0.25) / Number(people.value);
        console.log("25%");
    } else if (tipPer == "50") {
        tipcal = (bill.value * 0.5) / people.value;
        totalcal = Number(bill.value) + (Number(bill.value) * 0.5) / Number(people.value);
        console.log("50%");
    } else {
        console.log("Enter the val");
    }
}
if (tipPer==false){
    alert("Click tip Percetange to")
}
function handleCustom() {
    tipDisplay.innerHTML = `${Number((bill.value * customTip.value) / people.value)}`;
    console.log(customTip.value)
    totalDisplay.innerHTML = `${Number(Number(bill.value) + (Number(bill.value) * customTip.value) / Number(people.value))}`;
    console.log("Custom Tip");
}

function calculateval() {
    tipDisplay.innerHTML = `${Number(tipcal.toFixed(2))}`;
    totalDisplay.innerHTML = `${Number(totalcal.toFixed(2))}`;
}

function resetVal() {
    tipDisplay.innerHTML = `$ 0.00`;
    totalDisplay.innerHTML = `$ 0.00`;
}
// let switchCheckbox = document.getElementById("mySwitch");
let body=document.querySelector('body')
let darkMode=document.querySelector('.enableDarkMode')
let darkMode1=document.querySelector('.enableDarkMode')
let cont=document.querySelector('.container')

switchCheckbox.addEventListener("change", function() {
    if (this.checked) {
      console.log("Switch is ON");
      body.classList.add('enableDarkMode')
      cont.classList.add('enableDarkMode-container')
      // Add your logic for when the switch is ON
    } else {
      console.log("Switch is OFF");
      // Add your logic for when the switch is OFF
      body.classList.remove('enableDarkMode')
      cont.classList.remove('enableDarkMode-container')
    }
  });
  let switchCheckbox = document.getElementById("mySwitch");

  // Add an event listener to detect changes in the checkbox state
  switchCheckbox.addEventListener("change", function() {
    // Get the body and container elements
    let body = document.body;
    let cont = document.querySelector('.container');

    if (this.checked) {
      console.log("Switch is ON");
      body.classList.add('enableDarkMode');
      cont.classList.add('enableDarkMode-container');
      // Add your logic for when the switch is ON
    } else {
      console.log("Switch is OFF");
      // Add your logic for when the switch is OFF
      body.classList.remove('enableDarkMode');
      cont.classList.remove('enableDarkMode-container');
    }
  });