let form = document.querySelector("form");
let submitButton = document.querySelector("button");
let errorInfo = document.querySelector("span");

let currentDate = new Date();
let fHour = 00;
let sHour = 11;
let fMinute = 00;
let sMinute = 59;
let cHour = currentDate.getHours();
let cMinute = currentDate.getMinutes();
let cYear = currentDate.getFullYear();

form.addEventListener('submit', function(event) {
    if (!(cHour >= fHour || cHour <= sHour) && (cMinute >= fMinute || cMinute <= sMinute)) {
        errorInfo.textContent = `Registration Has Ended. Keep Tab with Next Opening.`;
        event.preventDefault();
    } else {
        errorInfo.textContent = `Registration Successful!`;
        event.preventDefault();
    }
});

// function errorMsg() {

// }

// console.log(currentDate);