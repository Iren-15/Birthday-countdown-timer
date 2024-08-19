const arrayVideo = ["video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4", "video7.mp4",];

const videoID = setInterval(changeVideo, 4000);
let userYear;

let i=0;
function changeVideo() {
    document.querySelector(".video-body").src = arrayVideo[i];
    i++;
    if (i >= arrayVideo.length) {
        i=0;
    }
}

let music = document.querySelector(".music");
let btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.innerHTML = "Пауза";
  } else {
    music.pause();
    btn.innerHTML = "Слухати";
  }
})

function countDay() {
const myDay = new Date();
if (myDay.getMonth() < 2) {
  userYear = myDay.getFullYear();
}
else {
  userYear = myDay.getFullYear() + 1;
}

const userDay = new Date(userYear, 02, 01, 00, 00);
console.log(userDay);
const diff = userDay - myDay;

const msInDay = 24 * 60 * 60 * 1000;
const msInHour = 60 * 60 * 1000;
const msInMinute = 60 * 1000;
const msInSecond = 1000;

const daysDisplay = Math.floor(diff / msInDay);
const hoursDisplay = Math.floor((diff % msInDay) / msInHour);
const minutesDisplay = Math.floor((diff % msInHour) / msInMinute);
const secondsDisplay = Math.floor((diff % msInMinute) / msInSecond);
document.querySelector(".days").textContent = daysDisplay;
document.querySelector(".hours").textContent = hoursDisplay;
document.querySelector(".minutes").textContent = minutesDisplay;
document.querySelector(".seconds").textContent = secondsDisplay;

const dayUkr = function declOfNum(number, titles) {
    cases = [2,0,1,1,1,2];
    return titles[(number%100>4 && number%100<20)? 2
        : cases[(number%10<5)? number%10 :5]]
}
const dayUkrDisplay = dayUkr(daysDisplay, ["день", "дні", "днів"]);
document.querySelector(".days-txt").innerHTML = `${dayUkrDisplay}`;
const hourUkrDisplay = dayUkr(hoursDisplay, ["година", "години", "годин"]);
document.querySelector(".hours-txt").innerHTML = `${hourUkrDisplay}`;
const minutesUkrDisplay = dayUkr(minutesDisplay, ["хвилина", "хвилини", "хвилин"]);
document.querySelector(".minutes-txt").innerHTML = `${minutesUkrDisplay}`;
const secondsUkrDisplay = dayUkr(secondsDisplay, ["секунда", "секунди", "секунд"]);
document.querySelector(".seconds-txt").innerHTML = `${secondsUkrDisplay}`;

if (myDay.getMonth() === 2 || myDay.getMonth() === 3 || myDay.getMonth() === 4) {
    timerEnd();
}
}

const timerID = setInterval(countDay, 1000);

function timerEnd() {
    document.querySelector(".header").textContent = "ВЖЕ ВЕСНА!!!";
    document.querySelector(".header").classList.add("spring-txt");
    document.querySelector(".video-body").src = "video3.mp4";
    document.querySelector(".music").src = "song2.mp3";
    music.play();
    btn.innerHTML = "Пауза";
    document.querySelector(".container-timer").style.display = "none";
    clearInterval(timerID);
    clearInterval(videoID);
}







