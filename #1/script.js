'use strict';

const msg = [
  'Hello',
  'Hi!',
  'Good Evening',
  'Good afternoon',
  'Good Bye',
  'RIP baby',
  '💥🎃🏀🌝',
];

const randomGreeting = (greetings) => {
  return greetings[Math.floor(Math.random() * greetings.length)];
};

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

for (let i = 0; i < 10; i++) {
  let divEl = document.createElement('div');
  divEl.innerText = randomGreeting(msg);
  divEl.style.fontSize = '24px';
  divEl.style.padding = '10px';
  divEl.style.backgroundColor = 'lime';
  document.body.appendChild(divEl);
}
