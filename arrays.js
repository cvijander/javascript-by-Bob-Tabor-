let a =[4,8,15,16,23,42];
let b = ['david','eddie','alex', 'michael'];

console.log(a[0]);
console.log(a[1]);
console.log(a);

a[0] =7;
console.log(a);

console.log(typeof a);


let c = [4, 'alex',true];
console.log(c);

console.log(b[4]); // undefined tj ne postoji array of bounds 

console.log(a.length); // actual number, NOT zero based

a[10] =45;
console.log(a);
console.log(a.length);


a.push(77);
console.log(a);
