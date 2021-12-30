// 'use strict';

// Add List Item
const mainList = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
const inputEl = document.querySelector('input');

listItems.forEach((el) => {
  el.addEventListener('click', () => {
    let strike = el.classList.toggle('strike');
    if (strike) {
      let span = document.createElement('span');
      span.innerText = ' X ';
      el.appendChild(span);
      span.addEventListener('click', () => {
        el.parentElement.removeChild(el);
      });
    } else {
      el.getElementsByTagName('span')[0].remove();
    }
  });
});

inputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputEl.value.length > 0) {
    let li = document.createElement('li');
    li.textContent = inputEl.value;
    mainList.appendChild(li);
    inputEl.value = '';
  }
});
