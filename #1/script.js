// 'use strict';

// key events

// const keys = {};

// document.addEventListener('keydown', onKeyDown);
// document.addEventListener('keyup', onKeyUp);

// function onKeyDown(e) {
//   e.preventDefault();
//   console.log(`(Key down) key: ${e.key}, keyCode: ${e.keyCode}`);
//   keys[e.keys] = true;
//   console.log(keys);
// }

// function onKeyUp(e) {
//   e.preventDefault();
//   console.log(`(Key up) key: ${e.key}, keyCode: ${e.keyCode}`);
//   console.dir(e);
//   keys[e.keys] = false;
//   console.log(keys);
// }

const inputEl = document.querySelector('input');

inputEl.addEventListener('keypress', addItem);

function addItem(e) {
  //   document.querySelector('h1').innerText = inputEl.value;
  if (inputEl.value.length >= 10) {
    inputEl.style.backgroundColor = 'red';
  } else {
    inputEl.style.backgroundColor = 'white';
  }
  if (e.keyCode === 13 && inputEl.value.length > 1) {
    e.preventDefault();
    document.querySelector('h1').innerText = inputEl.value;
  }
}
