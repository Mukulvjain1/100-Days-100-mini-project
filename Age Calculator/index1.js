let birthDay = document.querySelector("#birthDay").value;
let birthMonth = document.querySelector("#birthMonth").value;
let birthYear = document.querySelector("#birthYear").value;
let currentYear = new Date();

let calculate = document.querySelector("#cal");

let ageYear = document.querySelector("#years");
let ageMonth = document.querySelector("#months");
let ageDay = document.querySelector("#days");

calculate.addEventListener("click", () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  let ageInYear = currentYear - birthYear;
  let ageInDay = currentDay - birthDay;
  let ageInMonth = currentMonth - birthMonth;
  ageYear.innerHTML=ageInYear;
  ageMonth.innerHTML=ageInMonth;
  ageDay.innerHTML=ageInDay;

});
