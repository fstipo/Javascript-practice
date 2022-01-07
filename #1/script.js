'use strict';

const player = {
  speed: 50,
  x: 400,
  y: 300,
};

const build = () => {
  player.el = document.createElement('button');
  player.el.innerText = player.y;
  player.el.classList.add('btn');
  player.el.style.position = 'absolute';
  document.body.appendChild(player.el);
};
window.addEventListener('DOMContentLoaded', build);
document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.key === 'ArrowUp') {
    player.y -= player.speed;
    player.el.innerText = player.y;
    player.el.style.backgroundColor = 'gray';
  }
  if (e.key === 'ArrowDown') {
    player.y += player.speed;
    player.el.innerText = player.y;
    player.el.style.backgroundColor = 'purple';
  }
  if (e.key === 'ArrowLeft') {
    player.x -= player.speed;
    player.el.innerText = player.x;
    player.el.style.backgroundColor = 'red';
  }
  if (e.key === 'ArrowRight') {
    player.x += player.speed;
    player.el.innerText = player.x;
    player.el.style.backgroundColor = 'green';
  }

  player.el.style.top = player.y + 'px';
  player.el.style.left = player.x + 'px';

  console.dir(player.el);
});
