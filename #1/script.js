// 'use strict';

// key events challenge
const inputEl = document.querySelector('input');

const addDiv = (e) => {
  const divEl = document.createElement('div');
  divEl.textContent = `${inputEl.value} (key:${e.key}) keyCode:${e.keyCode}`;
  document.body.appendChild(divEl);
  inputEl.value = '';
  console.log(divEl);
};

inputEl.addEventListener('keypress', addDiv);
