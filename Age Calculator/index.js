
let calculate = document.querySelector("#cal");

let ageYear = document.querySelector("#years");
let ageMonth = document.querySelector("#months");
let ageDay = document.querySelector("#days");

ageYear.innerHTML = "--";
ageMonth.innerHTML = "--";
ageDay.innerHTML = "--";

calculate.addEventListener("click", () => {
  let birthDay = parseInt(document.querySelector("#birthDay").value);
  let birthMonth = parseInt(document.querySelector("#birthMonth").value);
  let birthYear = parseInt(document.querySelector("#birthYear").value);

  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let ageInYear = currentYear - birthYear;
  let ageInMonth = currentMonth - birthMonth;
  let ageInDay = currentDay - birthDay;

  // Adjust for negative values in months and days
  if (ageInDay < 0) {
    ageInMonth--;
    ageInDay += new Date(currentYear, currentMonth, 0).getDate();
  }

  if (ageInMonth < 0) {
    ageInYear--;
    ageInMonth += 12;
  }

  ageYear.innerHTML = ageInYear;
  ageMonth.innerHTML = ageInMonth;
  ageDay.innerHTML = ageInDay;
});

