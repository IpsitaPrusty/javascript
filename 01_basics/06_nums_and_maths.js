const score=400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const hund = 1000000
console.log(hund.toLocaleString('en-IN'));

//*******************mathss***************/

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(9.3));
console.log(Math.min(2,3,4));
console.log(Math.random());//values lies between 0 and 1
console.log((Math.floor(Math.random()*10)) + 1);

const min = 10
const max = 20
//+1 is there so that we will not get the value as 0
console.log(Math.floor(Math.random() * (max-min + 1)) + min)