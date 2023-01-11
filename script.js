/*Podpięte elementy html */
const settingsBtn = document.querySelector(".settings-btn");
const saveBtn = document.querySelector(".save");

const settingsArea = document.querySelector(".settings");
const eventNameInput = document.querySelector("#event-name");
const eventName = document.querySelector(".event");
// const eventDay = document.querySelector("#event-day");
const eventDay = document.getElementById("event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const imageLink = document.querySelector("#event-image");
const imageSection = document.querySelector(".image-section");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

/*Data i czas - przypisawanie zmiennych */
let newMonth = parseInt(eventMonth.value);
let newDay = parseInt(eventDay.value);
let newYear = parseInt(eventYear.value);

function setDate() {
    newMonth = parseInt(eventMonth.value);
    newDay = parseInt(eventDay.value);
    newYear = parseInt(eventYear.value);

    console.log(newMonth, newDay, newYear);
}

/*Eventy */
settingsBtn.addEventListener("click", showSettings);
saveBtn.addEventListener("click", () => {
    changeImg();
    changeEventName();
    setDate();
});

setDate();

/*Funkcje */
function showSettings() {
    settingsArea.classList.toggle("active");
}

function changeImg() {
    console.log(imageLink.value);
    imageSection.style.backgroundImage = `url(${imageLink.value})`;
}

function changeEventName() {
    eventName.textContent = eventNameInput.value;
}

/*DATY SKRYPT*/
function updateCounter() {
    var currentTime = new Date(); // ustawienie daty za pomocą tekstu (miesiąc/dzień/rok)
    var userTime = new Date(`${newMonth} ${newDay} ${newYear}`);

    var result = userTime.getTime() - currentTime.getTime();
    console.log(result); // różnica w milisekundach

    let seconds = Math.floor(result / 1000) % 60;
    let minutes = Math.floor(result / 1000 / 60) % 60;
    let hours = Math.floor(result / 1000 / 60 / 60) % 24;
    let days = Math.floor(result / 1000 / 60 / 60 / 24);

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
}

//setInterval w osobnym miejscu
setInterval(updateCounter, 1000);
