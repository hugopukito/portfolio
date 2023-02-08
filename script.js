const btnSwitch = document.getElementById("btn-switch");
const english = document.getElementById("english");
const french = document.getElementById("french");

let isEnglish = true;

btnSwitch.addEventListener("click", function () {
  if (isEnglish) {
    english.style.display = "none";
    french.style.display = "block";
    isEnglish = false;
  } else {
    english.style.display = "block";
    french.style.display = "none";
    isEnglish = true;
  }
});