// 'use strict';

// Element classes

const el = document.querySelector('div.first');
console.dir(el);

console.log(el.children);
// length
console.log(el.children.length);
console.log(el.childNodes.length);

// for loop
for (let i = 0; i < el.children.length; i++) {
  console.log(el.children[i].textContent);
}

for (let i = 0; i < el.childNodes.length; i++) {
  console.log(el.children[i]);
}

// Doesn't work with HTMLCollection
// // forEach
// el.children.forEach((el) => {
//   console.log(el);
// });

el.childNodes.forEach((el) => {
  console.log(el);
});

console.log(el.parentElement);
console.log(el.parentNode);
console.log(el.nextElementSibling);
console.log(el.nextSibling);
console.log(el.previousElementSibling);
console.log(el.previousSibling);
