// 'use strict';

// Event Bubbling and Capturing

const divElements = document.querySelectorAll('div');
console.log(divElements);
const outputEl = document.querySelector('section');
console.log(outputEl);

const output = (msg) => {
  outputEl.innerHTML += `${msg} <br>`;
};

divElements.forEach((el, index) => {
  el.style.border = '1px solid red';
  el.style.width = '100px';
  el.style.padding = '20px';
  el.v = index + 1;
  el.addEventListener(
    'click',
    () => {
      output('capture: ' + el.v);
    },
    true
  );
  el.addEventListener(
    'click',
    () => {
      output('bubble:' + el.v);
    },
    false
  );
});
