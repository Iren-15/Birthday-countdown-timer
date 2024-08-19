// var stringDate = prompt ('Введите дату в формате ДД.ММ.ГГГГ', ''),
// t = stringDate.split ('.'),
// myYear = t [2],
// myMonth = parseInt (t [1]) - 1,
// myDate =  parseInt (t [0]);
// alert (new Date (myYear, myMonth, myDate));

let inputDay = prompt("Введіть день свого народження:", "01");


let inputMonth = prompt("Введіть місяць свого народження:", "03");
while ((inputDay.length != 2) || (inputMonth.length != 2) || (isNaN(inputMonth))) {
    alert('Введено не вірне значення. Спробуйте знову.');
    inputDay = prompt("Введіть день свого народження:", "01");
    inputMonth = prompt("Введіть місяць свого народження:", "03");
}

const dayNow = new Date();
const monthNow = dayNow.getMonth()+1;
const yearNow = dayNow.getFullYear();


if (Number(inputMonth) > monthNow) {
    nextBirthdayYear = yearNow;
}
else if ((Number(inputMonth) === monthNow) && (Number(inputDay) >= dayNow.getDate())) {
  nextBirthdayYear = yearNow;
}
else {
    nextBirthdayYear = yearNow + 1;
}
const userDay = new Date(nextBirthdayYear, inputMonth-1, inputDay);

//const arrayVideo = ["winter.mp4", "winter2.mp4", "winter3.mp4", "spring2.mp4", "spring3.mp4", "spring4.mp4", "summer.mp4", "summer2.mp4", "summer3.mp4", "autumn.mp4", "autumn2.mp4", "autumn3.mp4"];
//const videoID = setInterval(changeVideo, 4000);
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
const diff = userDay - new Date();
console.log(userDay);
console.log(new Date());
console.log(diff);
const msInDay = 24 * 60 * 60 * 1000;
const msInHour = 60 * 60 * 1000;
const msInMinute = 60 * 1000;
const msInSecond = 1000;

const daysDisplay = Math.floor(diff / msInDay);
console.log(daysDisplay);
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

if (Number(inputMonth) === monthNow && Number(inputDay) === dayNow.getDate() && nextBirthdayYear === yearNow) {
     timerEnd();
}
}

const timerID = setInterval(countDay, 1000);

function timerEnd() {
    document.querySelector(".header").textContent = "З ДНЕМ НАРОДЖЕННЯ!!!";
    document.querySelector(".header").classList.add("birthday-txt");
    document.querySelector(".container").classList.add("birthday-container");
    document.querySelector(".container-content").classList.add("birthday-container-content");
    document.querySelector(".video-body").src = "videoHB.mp4";
    document.querySelector(".music").src = "musicHB.mp3";
    music.play();
    btn.innerHTML = "Пауза";
    document.querySelector(".container-timer").style.display = "none";
    clearInterval(timerID);
}









