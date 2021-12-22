// 'use strict';

// Element classes

const listItems = document.querySelectorAll('li');
// console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  // console.log(listItems[i].className);
  listItems[i].textContent = listItems[i].className
    ? listItems[i].className
    : 'No Class';
  const el = listItems[i];
  el.classList.add('test');
  el.classList.toggle('first');
  el.classList.remove('test');
  el.classList.replace('first', 'abrakadabra');
  console.log(el);
}
