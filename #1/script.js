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

const randomNum = (num) => Math.floor(Math.random() * num);

for (let i = 0; i < 10; i++) {
  let divEl = document.createElement('div');
  divEl.innerText = randomGreeting(msg);
  divEl.style.fontSize = '24px';
  divEl.style.padding = '10px';
  // Color with RGB
  // divEl.style.backgroundColor = `rgb(${randomNum(256)},${randomNum(
  //   256
  // )},${randomNum(256)})`;

  // Color with hex
  const hexColor = `#${Math.random().toString(16).slice(-6)}`;
  divEl.style.backgroundColor = hexColor;
  document.body.appendChild(divEl);
}
