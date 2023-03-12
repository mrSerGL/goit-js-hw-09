const refs = {
  bodyRef: document.querySelector('body'),
  btnStartRef: document.querySelector('button[data-start]'),
  btnStopRef: document.querySelector('button[data-stop]'),
};

let timerId = null;


// startChangeColor();
disableBtnStop();

refs.btnStartRef.addEventListener('click', () => {
  startChangeColor(); 
  timerId = setInterval(() => {
    startChangeColor();
  }, 1000);
  disableBtnStart();

  
});

refs.btnStopRef.addEventListener('click', () => {
  clearInterval(timerId);
  disableBtnStop();

  
});

function startChangeColor() {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function disableBtnStop() {
  refs.btnStartRef.disabled = false;
  refs.btnStopRef.disabled = true;
}

function disableBtnStart() {
  refs.btnStartRef.disabled = true;
  refs.btnStopRef.disabled = false;
}
