'use strict';

const player = {
  speed: 10,
  x: 692,
  y: 498,
  el: document.querySelector('.btn'),
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Start');
});

document.addEventListener('keydown', (e) => {
  console.log(player.el.offsetLeft);
  console.log(player.el.offsetTop);
  if (e.key === 'ArrowUp') {
    player.y -= player.speed;
  }
  if (e.key === 'ArrowDown') {
    player.y += player.speed;
  }
  if (e.key === 'ArrowLeft') {
    player.x -= player.speed;
  }
  if (e.key === 'ArrowRight') {
    player.x += player.speed;
  }
  player.el.style.position = 'absolute';
  player.el.style.left = player.x + 'px';
  player.el.style.top = player.y + 'px';
});
