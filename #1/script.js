// 'use strict';

// add item
const btn = document.querySelector('button');
const randomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

const changeColor = () => {
  let temp = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
    255
  )})`;
  document.body.style.backgroundColor = temp;
};

btn.addEventListener('click', changeColor);

const spanEl = document.querySelectorAll('span');

spanEl.forEach(function (el) {
  el.style.border = '1px solid black';
  el.style.width = '80vW';
  el.style.padding = '20px';
  el.addEventListener('click', (e) => {
    let temp = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
      255
    )})`;

    console.dir(e);
    console.log(e.target);
    console.log(this);
    console.log(el);
    el.style.backgroundColor = temp;
    el.style.color = 'white';
    el.style['font-weight'] = 'bold';
    el.innerText = temp;
  });
});
