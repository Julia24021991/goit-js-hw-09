const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

btnStart.addEventListener('click', () => {
    timerId = setInterval(getRandomHexColor, 1000);
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
});

function getRandomHexColor() {
    const hexColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    document.body.style.background = hexColor;
}