'use strict';
const build = () => {
  const player = {
    speed: 50,
    x: 150,
    y: 150,
  };
  player.el = document.createElement('button');
  player.el.innerText = 'X';
  player.el.classList.add('btn');
  document.body.append(player.el);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      player.y -= player.speed;
      player.el.innerText = player.y;
      player.el.style.backgroundColor = 'green';
    }
    if (e.key === 'ArrowDown') {
      player.y += player.speed;
      player.el.innerText = player.y;
      player.el.style.backgroundColor = 'black';
    }
    if (e.key === 'ArrowLeft') {
      player.x -= player.speed;
      player.el.innerText = player.x;
      player.el.style.backgroundColor = 'gray';
    }
    if (e.key === 'ArrowRight') {
      player.x += player.speed;
      player.el.innerText = player.x;
      player.el.style.backgroundColor = 'purple';
    }
    player.el.style.position = 'absolute';
    player.el.style.left = player.x + 'px';
    player.el.style.top = player.y + 'px';
  });
};
window.addEventListener('DOMContentLoaded', build);
