'use strict';

// Local Storage

const myObj = {
  firstName: 'Jim',
  lastName: 'Smith',
};

myObj;

let myStr = JSON.stringify(myObj);

if (localStorage.getItem('new')) {
  let cnt = localStorage.getItem('new');
  cnt++;
  localStorage.setItem('new', cnt);
} else {
  localStorage.setItem('new', 1);
}

console.log(localStorage.getItem('new'));
localStorage.setItem('obj', myStr);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  localStorage.removeItem('new');
  let temp = localStorage.getItem('obj');
  const newObj = JSON.parse(temp);
  console.log(newObj);
});
