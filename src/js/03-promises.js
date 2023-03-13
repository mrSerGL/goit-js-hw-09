import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
const delayInputRef = formRef.elements['delay'];
const stepInputRef = formRef.elements['step'];
const amountInputRef = formRef.elements['amount'];

let delay = 0;
let step = 0;
let amount = 0;
let currentDelay = delay;

formRef.addEventListener('submit', onBtnCreate);

function onBtnCreate(event) {
  event.preventDefault();

  delay = Number(delayInputRef.value);
  step = Number(stepInputRef.value);
  amount = Number(amountInputRef.value);

  event.currentTarget.reset();

  createAllPromises(delay, step, amount);
}

function createAllPromises(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    const position = i;

    createPromise(i, currentDelay);
    currentDelay += step;
  }
}

function createPromise(position, currentDelay) {
  setTimeout(() => {
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.5;

if (shouldResolve) {
  resolve({ position, delay: currentDelay });
} else {
  reject({ position, delay: currentDelay });
}
    });

promise
.then(({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
});
  }, currentDelay);
}


