const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tebleBody: document.querySelector('.js-results-table > tbody'),
};

let raceResults;

refs.startBtn.addEventListener('click', onStart);

function onStart() {

    // const promises = horses.map(horse =>startHorse(horse));
const promises = horses.map(startHorse); // сокращенная запись строки сверху

raceStarted();

Promise.all(promises)
  .then(results => {
    console.table(sortResults(results));
    // console.log(`заезд окончен, победитель ${results[0].horse}!`);
    
    raceResults = results;
    raceFinished();

    
  })
  .catch(trouble => console.log(`we have trouble`));
}

function startHorse(horse) {
    return new Promise((resolve, reject) => {
      const time = getRandomTime(1000, 3000);
  
      setTimeout(() => {
        resolve({ horse, time });
        reject({ horse, time });
      }, time);
    });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortResults(data) {
  return data.sort((a, b) => a.time - b.time);
}

function createTrMarkUp(data) {
  data.map((index, horse, time) => {
    const trMarkUp = `
    <tr>
           <th>${index}</th>
           <th>${horse}</th>
           <th>${time}</th>
         </tr>
    `;
  });
}

function raceStarted() {

   refs.progressField.textContent =    'Заїзд почався, ставки не приймаются!';

  
  }

function raceFinished() {
      
    refs.progressField.textContent = `Заїзд закінчівся, переміг ${raceResults[0].horse} з часом ${raceResults[0].time} ms. ` ; 
       
}


// console.log(results
//   '%c заезд начался, ставки не принимаются!',
//   'coror: green; font-size: 14px;'
// );
