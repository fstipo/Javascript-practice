// 'use strict';

// Mouse events
const listEl = document.querySelector('ul');
const listItemsEl = document.querySelectorAll('li');
const inputEl = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = inputEl.value;
  listEl.appendChild(li);
  inputEl.value = '';
});

listItemsEl.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('strike');
    el.innerHTML = el.textContent + `<span>X</span>`;
    console.log(el.innerText);
  });
});
