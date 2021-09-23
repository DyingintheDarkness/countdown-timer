const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
let countDownDate = new Date("Dec 20, 2021 00:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  day.innerText = days;
  hour.innerText = hours;
  min.innerText = minutes;
  sec.innerText = seconds;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

