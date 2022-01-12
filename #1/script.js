'use strict';

// getBoundingClientRect

const btn = document.querySelector('.btn');
btn.getElementsByClassName.position = 'absolute';
const elPosition = btn.getBoundingClientRect();
let speed = 1;

const move = (e) => {
  if (e.key === 'ArrowUp') {
    elPosition.y -= speed;
  }
  if (e.key === 'ArrowDown') {
    elPosition.y += speed;
  }
  if (e.key === 'ArrowLeft') {
    elPosition.x -= speed;
  }
  if (e.key === 'ArrowRight') {
    elPosition.x += speed;
  }
  btn.innerHTML = `x:${elPosition.x} <br> y:${elPosition.y}`;
  btn.style.left = elPosition.x + 'px';
  btn.style.top = elPosition.y + 'px';
};

// Object properties
for (let index in elPosition) {
  console.log(index, elPosition[index]);
}

document.addEventListener('keydown', move);
