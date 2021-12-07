let temp;
// String
temp = 10;
temp = String(10);
temp = String([1, 2, 3, 4]);
temp = (100).toString();

// Number
temp = Number('50');
temp = Number(true);
temp = Number(false);
temp = Number([1, 2, 3, 4]);

// Type Coercion
temp = 10;
temp = temp + 5;
temp = temp + 'five';
console.log(temp);

'Hello' + 'World';
'5' + 5;
5 + '5';
'Hello' - 'World';
'10' - 5;

typeof '10';
typeof 10;
typeof false;
typeof null;
typeof undefined;

temp = 5;
typeof temp;
a = String(temp);
typeof a;
let b = (100).toString();
console.log(b);
typeof b;

const c = '150';
const d = Number(c);

typeof c;
typeof d;

console.log(typeof c, typeof d);

let ab = '5';
let cd = '15';

console.log(ab + cd);
console.log(cd - ab);
