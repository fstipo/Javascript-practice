'use strict';

const greetings = ['Hello', 'Bye Bye', 'Stop', 'Good Evening', '🚀🔴', '🎃😬'];

const randomGreeting = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const randomNumber = (num) => Math.floor(Math.random() * num);

for (let i = 0; i <= 10; i++) {
  let divEl = document.createElement('div');
  divEl.innerText = randomGreeting(greetings);
  divEl.style.fontSize = '24px';
  divEl.style.padding = '14px';
  divEl.style.width = '170px';
  // divEl.style.backgroundColor = `rgb(${randomNumber(256)},${randomNumber(
  //   256
  // )},${randomNumber(256)})`;
  divEl.style.backgroundColor = '#' + Math.random().toString(16).slice(-6);
  document.body.appendChild(divEl);
  console.log(randomNumber(10));
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Document is loaded 💥');
});
window.addEventListener('DOMContentLoaded', () => {
  console.log('Window is loaded 🚀');
});
