'use strict';

const message = ['Hello', 'Hi', 'Bye Bye', 'Bla bla', 'Aloha', 'Good Night'];
const divEl = document.querySelector('div');
const randomText = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
divEl.style.backgroundColor = 'yellow';
divEl.style.textAlign = 'center';
divEl.style.fontSize = '56px';
divEl.style.width = '50%';
divEl.innerText = randomText(message);
divEl.addEventListener('click', () => {
  divEl.innerText = randomText(message);
});

for (let i = 0; i < 10; i++) {
  console.log(randomText(message));
}
