// 'use strict';

// Element manipulation

// remove div with class pickMe
const divPickMeEl = document.querySelector('.pickMe');
divPickMeEl.style['background-color'] = 'yellow';
divPickMeEl.remove();

// Update list items IDs with count

// const liListEl = document.querySelectorAll('li');
// console.log(liListEl);
// liListEl.forEach((el, i) => {
//   el.id = `li${i + 1}`;
//   el.textContent = 'list item #' + i;
//   if (el.getAttribute('class')) {
//     console.log(el.getAttribute('class'));
//   }
// });

const liList = document.querySelectorAll('a');
liList.forEach((el) => {
  el.setAttribute('href', 'https://www.muzika.hr/');
  console.log(el);
});
