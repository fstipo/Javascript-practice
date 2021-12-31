// 'use strict';

// Add List Item
const mainList = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
const inputEl = document.querySelector('input');

const myList = (e) => {
  const el = e.target;
  const strike = el.classList.toggle('strike');
  if (strike) {
    const span = document.createElement('span');
    span.textContent = ' X ';
    el.appendChild(span);
    span.addEventListener('click', () => {
      el.parentNode.removeChild(el);
    });
  } else {
    el.getElementsByTagName('span')[0].remove();
  }
};

const addItem = (e) => {
  if (e.key === 'Enter' && inputEl.value.length > 0) {
    const li = document.createElement('li');
    li.addEventListener('click', myList);
    li.textContent = inputEl.value;
    mainList.appendChild(li);
    inputEl.value = '';
  }
};

listItems.forEach((el) => {
  el.addEventListener('click', myList);
});

inputEl.addEventListener('keypress', addItem);
