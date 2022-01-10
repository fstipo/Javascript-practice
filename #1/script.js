'use strict';

// Local Storage

if (localStorage.getItem('num')) {
  let cnt = localStorage.getItem('num');
  cnt = Number(cnt);
  cnt++;
  console.log(cnt);
  localStorage.setItem('num', cnt);
} else {
  localStorage.setItem('num', '1');
}

console.log(localStorage.getItem('num'));

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  localStorage.clear();
});

const myObject = { name: 'Franko', lastName: 'Stipanov' };
const myString = JSON.stringify(myObject);

localStorage.setItem('my', myString);

const newString = localStorage.getItem('my');
const newObject = JSON.parse(newString);

console.log(newString);
console.log(newObject.lastName);
