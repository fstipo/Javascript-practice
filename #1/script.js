'use strict';

const msg = ['Hello', 'Bye', 'Hi', 'Good morning', 'Hello beautiful'];

const randomMsg = (arr) => {
  let temp = arr[Math.floor(Math.random() * arr.length)];
  return temp;
};

const randomColor = (num) => {
  const randomNumber = (num) => Math.floor(Math.random() * num);
  let temp = `rgb(${randomNumber(num)},${randomNumber(num)},${randomNumber(
    num
  )})`;
  return temp;
};

for (let i = 0; i < 10; i++) {
  const divEl = document.createElement('div');
  divEl.style.fontSize = '24px';
  divEl.style.padding = '14px';
  divEl.style.backgroundColor = randomColor(255);
  divEl.innerHTML = randomMsg(msg);
  document.body.appendChild(divEl);
}

randomColor(2);
