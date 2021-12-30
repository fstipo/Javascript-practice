// 'use strict';

// Add List Item
const mainList = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
const inputEl = document.querySelector('input');

const myList = (e) => {
  let el = e.target;
  let elClass = el.classList.toggle('strike');
  if (elClass) {
    let span = document.createElement('span');
    span.innerText = ' X ';
    el.appendChild(span);
    span.addEventListener('click', () => {
      span.parentElement.remove();
    });
  } else {
    el.getElementsByTagName('span')[0].remove();
  }
};

const newItem = (e) => {
  if (e.code === 'Enter' && inputEl.value.length > 0) {
    const li = document.createElement('li');
    li.addEventListener('click', myList);
    li.innerText = inputEl.value;
    mainList.appendChild(li);
    inputEl.value = '';
  }
};

listItems.forEach((el) => el.addEventListener('click', myList));
inputEl.addEventListener('keypress', newItem);
