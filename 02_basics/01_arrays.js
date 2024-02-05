//array
const myarr = [0,1,2,3,4,5]
console.log(myarr[3])
const myHeros = ["hi",'hello']
const a = new Array(1,2,3,4)
console.log(a[5]);

//array methods
myarr.push(6)
console.log(myarr)
myarr.pop()
console.log(myarr)

myarr.unshift(9)//it adds the value in the beginning
console.log(myarr)
myarr.shift()
console.log(myarr)//it removes the shifted element
console.log(myarr.includes(4));
console.log(myarr.indexOf(5));

const newArr =  myarr.join()
console.log(newArr);//converts to string
console.log(typeof newArr);
console.log(myarr)

//slice ,splice
 