// function declaration
function sayHello()
{
    console.log('------------');
    console.log('hello');
    console.log('------------');
}

function sayHelloWithName(name)
{
    console.log('-------');
    console.log('hello '+ name);
    console.log('------')
}

sayHelloWithName('bob');
sayHelloWithName('beth');
sayHelloWithName('mr Tibbles');


sayHello();

// let sam prosledio da pokazuje na sayheelo 
// tek sa a() sam pozvao funkciju 
let a =sayHello;
a();
a();
a();


function calculateTax(amount)
{
    let result = amount * 0.0825;
    return result;
}

 let tax=  calculateTax(100);
 console.log(tax);

