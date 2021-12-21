// 'use strict';

// Element classes

const listItem = document.querySelectorAll('li');
console.log(listItem);

listItem.forEach((el) => {
  el.classList && (el.innerText = el.classList);
  el.classList.contains('first') || (el.innerText = 'no Class');
  el.classList.add('test2');
  el.classList.remove('test2');
  el.classList.toggle('test3');
  el.classList.add('test1');
  el.classList.add('test4');
});
