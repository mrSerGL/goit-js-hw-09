const refs = {
  bodyRef: document.querySelector('body'),
  btnStartRef: document.querySelector('button[data-start]'),
  btnStopRef: document.querySelector('button[data-stop]'),
};

let currentBodyColor = getRandomHexColor();
refs.bodyRef.style.backgroundColor = currentBodyColor;

refs.btnStartRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStartRef.disabled = true;
});

refs.btnStopRef.addEventListener('click', () => {
  clearInterval(timerId);
  refs.btnStartRef.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
