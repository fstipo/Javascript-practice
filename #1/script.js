// 'use strict';

// add item
const inputEl = document.querySelector('input');
const btn = document.querySelector('button');
const itemList = document.querySelector('.second');
console.log(inputEl);
console.log(btn);
console.log(itemList);

const addItem = () => {
  console.log(inputEl.value);
  const li = document.createElement('li');
  li.innerText = inputEl.value;
  if (inputEl.value.length > 3) {
    itemList.appendChild(li);
  }
};

btn.addEventListener('click', addItem);
