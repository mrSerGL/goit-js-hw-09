import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDateTime: document.querySelector('#datetime-picker'),
  btnStartRef: document.querySelector('button[data-start]'),
};

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
  },
});
let selectedDate = new Date().getTime();
const currentDate = new Date().getTime();
let deltaTime = selectedDate - currentDate;

setDefaults();

function setDefaults() {
  refs.inputDateTime.addEventListener('change', onFpChange);
  checkSelectedData();
  disableBtnStart();
}

function onFpChange(event) {
  selectedDate = fp.selectedDates[0].getTime();
  checkSelectedData();
}

function checkSelectedData() {
  deltaTime = selectedDate - currentDate;

  if (deltaTime < 0) {
    disableBtnStart();
    alert('Please choose a date in the future');
  } else {
    enableBtnStart();
    convertMs(deltaTime);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  changeTimeValues(days, hours, minutes, seconds);
//   return { days, hours, minutes, seconds };
}

function onBtnStart(event) {
 
  disableBtnStart();
  timerId = setInterval(() => {
  convertMs((deltaTime -= 1000));

  }, 1000);
}

function disableBtnStart() {
  refs.btnStartRef.disabled = true;
  refs.btnStartRef.removeEventListener('click', onBtnStart);
}

function enableBtnStart() {
  refs.btnStartRef.disabled = false;
  refs.btnStartRef.addEventListener('click', onBtnStart);
}

function changeTimeValues(days, hours, minutes, seconds ){
    const daysField = document.querySelector('span[data-days]');
    const hoursField = document.querySelector('span[data-hours]');
    const minutesField = document.querySelector('span[data-minutes]');
    const secondsField = document.querySelector('span[data-seconds]');
    daysField.textContent = days;
    hoursField.textContent = hours;
    minutesField.textContent = minutes;
    secondsField.textContent = seconds;
    

}
