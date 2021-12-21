// 'use strict';

// select element , all - foreach , for
// change bgColor , add id, add content
// remove element, get attribute, set attribute href

const h1El = document.getElementById('myID');
console.log(h1El);

const spanEl = document.getElementsByTagName('span');
console.log(spanEl);

for (let i = 0; i < spanEl.length; i++) {
  console.log(spanEl[i]);
  spanEl[i].style.backgroundColor = 'green';
}

const listEl = document.querySelectorAll('a');
console.log(listEl);

listEl.forEach((el, i) => {
  console.log(el);
  el.id = 'list' + (i + 1);
  el.textContent = 'list item #' + i;
  if (el.getAttribute('class')) console.log(el.getAttribute('class'), i);
  el.setAttribute('href', 'https://www.torrenthr.org/browse2.php');
});
h1El.remove();
