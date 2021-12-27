// 'use strict';

// Select imgs

const imgEl = document.querySelectorAll('img');
console.log(imgEl);

// for (let i = 0; i < imgEl.length; i++) {
//   imgEl[i].addEventListener('click', resizeImg);
// }

imgEl.forEach((el) => {
  console.log(el);
  el.onclick = resizeImg;
});

function resizeImg() {
  console.log(this);
  console.log(this.src);
  window.open(this.src, 'myImg', 'resizable=yes width=500');
}
