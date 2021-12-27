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
  console.log(temp);
};

btn.addEventListener('click', changeColor);
