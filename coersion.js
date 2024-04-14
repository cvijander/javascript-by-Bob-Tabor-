let a =7;
let b ='6';
b =parseInt( b,10);
let c = a+ b;
console.log('Answer ' + c);

let d = parseInt('bob',10);
let e =isNaN(d);  // is not a number
console.log(d);   // ovo ne moze da se radi posto nije broj
console.log(e);  //zato je true