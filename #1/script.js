'use strict';

// Local Storage

const btn = document.querySelector('.btn');
let rect = btn.getBoundingClientRect();

for (let key in rect) {
  console.log(key, rect[key]);
}

const move = (e) => {
  console.log(e.key);
  if (e.key === 'ArrowDown') {
    rect.y -= 5;
    btn.style.top = rect.y + 'px';
    console.log(rect.y);
  }
};

document.addEventListener('keydown', move);
