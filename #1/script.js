'use strict';

// getBoundingClientRect

// const BandList =

const inputEl = document.querySelector('input');
const btn = document.querySelector('.btn');

if (localStorage.getItem('bandList')) {
  let temp = localStorage.getItem('bandList');
  console.log(temp);
} else {
  localStorage.setItem('bandList', []);
}

const bandList = [];

const addItem = () => {
  const item = inputEl.value;
  bandList.push(item);
  let temp = JSON.stringify(bandList);
  inputEl.value = '';
  localStorage.setItem('bandList', temp);
  console.log(bandList);
};

btn.addEventListener('click', addItem);
