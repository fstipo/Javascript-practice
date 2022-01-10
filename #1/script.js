'use strict';

const player = {
  speed: 50,
  x: 50,
  y: 50,
};

const move = (e) => {
  if (e.key === 'ArrowUp') {
    player.y -= player.speed;
    player.el.innerHTML = `x: ${player.x} <br> y: ${player.y}`;
  }
  if (e.key === 'ArrowDown') {
    player.y += player.speed;
    player.el.innerHTML = `x: ${player.x} <br> y: ${player.y}`;
  }

  if (e.key === 'ArrowLeft') {
    player.x -= player.speed;
    player.el.innerHTML = `x: ${player.x} <br> y: ${player.y}`;
  }
  if (e.key === 'ArrowRight') {
    player.x += player.speed;
    player.el.innerHTML = `x: ${player.x} <br> y: ${player.y}`;
  }
  player.el.style.position = 'absolute';
  player.el.style.left = player.x + 'px';
  player.el.style.top = player.y + 'px';
};

document.addEventListener('DOMContentLoaded', () => {
  player.el = document.createElement('div');
  player.el.innerText = 'X';
  player.el.classList.add('btn');
  document.body.appendChild(player.el);
  document.addEventListener('keydown', move);
});
