// 'use strict';

// Event Bubbling and Capturing

const divElements = document.querySelectorAll('div');
const outputEl = document.querySelector('section');

for (let i = 0; i < divElements.length; i++) {
  const el = divElements[i];
  el.style.border = '1px solid red';
  el.style.width = '150px';
  el.style.padding = '20px';
  el.style.margin = '20px';
  el.v = i + 1;
  el.addEventListener('click', capture, true);
  el.addEventListener('click', bubble, false);
}

function output(msg) {
  outputEl.innerHTML += `${msg} <br/>`;
}

function bubble() {
  output('bubble:' + this.v);
}

function capture() {
  output('capture:' + this.v);
}
