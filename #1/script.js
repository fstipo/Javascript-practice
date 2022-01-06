'use strict';

const changeColor = (el) => {
  let hexNum = Math.random().toString(16).substr(-6);
  document.body.style.backgroundColor = `#${hexNum}`;
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', changeColor);
