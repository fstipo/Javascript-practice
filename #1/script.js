// 'use strict';

// Select multiple elements

const secondEl = document.getElementsByClassName('second');
console.log(secondEl, secondEl.length);

const firstEl = document.querySelectorAll('.first');
console.log(firstEl, firstEl.length);

const spanEl = document.getElementsByTagName('span');
console.log(spanEl, spanEl.length);

for (let i = 0; i < secondEl.length; i++) {
  const el = secondEl[i];
  el.style.backgroundColor = 'green';
  console.log(el);
}

firstEl.forEach((el) => {
  return (el.innerText = 'Hey');
});
