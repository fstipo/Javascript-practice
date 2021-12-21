// 'use strict';

// Element classes

const listItem = document.querySelectorAll('li');
console.log(listItem);

listItem.forEach((el) => {
  console.log(el);
  el.innerText = el.className ? el.className : 'no Class';
  el.classList.add('test');
  el.classList.toggle('first');
  el.classList.remove('test');
  el.classList.replace('first', 'test5');
});
