// 'use strict';

// Event Bubbling and Capturing

const divElements = document.querySelectorAll('div');
const outputEl = document.querySelector('section');

const random = (num) => Math.floor(Math.random() * num);

const randomColor = `rgb(${random(256)},${random(256)},${random(256)})`;
const msg = divElements.forEach((el, index) => {
  el.style.border = '1px solid green';
  el.style.padding = '20px';
  el.style.width = '120px';
  el.style.width = '120px';
  el.style.margin = '30px';
  el.v = index + 1;
  el.addEventListener(
    'click',
    function () {
      el.style.backgroundColor = randomColor;
      outputEl.innerHTML += `   capturing:  +${this.v} <br>
      `;
    },
    true
  );
  el.addEventListener(
    'click',
    function () {
      this.style.backgroundColor = randomColor;
      outputEl.innerHTML += `   bubble:  -${this.v} <br>`;
    },
    false
  );
});
