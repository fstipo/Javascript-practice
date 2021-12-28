// 'use strict';

// Mouse events
const mainList = document.querySelector('ul');
const listItemsEl = document.querySelectorAll('li');
const inputEl = document.querySelector('input');
const btn = document.querySelector('button');

const addListItem = () => {
  const li = document.createElement('li');
  li.innerText = inputEl.value;
  mainList.appendChild(li);
  inputEl.value = '';
};

btn.addEventListener('click', addListItem);

inputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputEl.value.length > 1) {
    addListItem();
  }
});

listItemsEl.forEach((el) => {
  el.addEventListener('click', () => {
    const addClass = el.classList.toggle('strike');
    if (addClass) {
      let span = document.createElement('span');
      span.textContent = ' X ';
    }
  });
});
