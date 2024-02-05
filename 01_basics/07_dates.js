//dates
let myDate = new Date();
console.log(typeof myDate);//object
console.log(myDate.toString());
console.log( myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2024,8,8)
console.log(myCreateDate.toLocaleDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp) 
console.log(myCreateDate.getTime())
//to get the time in seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: "long", 
})