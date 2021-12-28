// 'use strict';

// key events

const inputEl = document.querySelector('input');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const changeHeading = (e) => {
  e.preventDefault;

  if (e.key === 'Enter' && inputEl.value.length > 4) {
    h1.innerText = inputEl.value;
    h1.style.backgroundColor = 'yellow';
  } else if (inputEl.value.length <= 4) {
    h1.style.backgroundColor = 'white';
  }
};

inputEl.addEventListener('keypress', changeHeading);

// const keys = {};

// const onKeyDown = (e) => {
//   keys[e.key] = true;
//   console.dir(e);
//   console.log(keys);
// };

// const onKeyUp = (e) => {
//   keys[e.key] = false;
//   console.dir(e.keyCode);
//   console.dir(e.key);
//   console.log(keys);
// };

// document.addEventListener('keydown', onKeyDown);
// document.addEventListener('keyup', onKeyUp);
