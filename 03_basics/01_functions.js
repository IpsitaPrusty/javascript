//  console.log("hi") 
//  console.log("hi") 
//  console.log("hi") 
//  console.log("hi") 
//  console.log("hi") 
//  console.log("hi") 
//  console.log("hi") 
//instead of doing this we can use a function
function hi(){
    console.log("hi")
    console.log("hi") 
     console.log("hi") 
     console.log("hi") 
     console.log("hi") 
     console.log("hi") 
     console.log("hi") 
     console.log("hi")
}
// hi()
function addTwoNumbers(num1,nu2){//parameters
    console.log(num1+nu2)
}
addTwoNumbers(3,4)//arguments
addTwoNumbers(3,"4")
addTwoNumbers(3,null)


function sum(num1,num2){
    let result = num1+num2
    return result;
}
const result = sum(3,4)
console.log("Result: ",result)
 
function loginUserMessage(username){
    if (username === undefined){
        console.log("please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("ipsita"))

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))

const user = {
    username:"ipsita",
    price:100
}
function handle(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handle(user)
handle({
    username:"ipsita",
    price:100
})
const arr= [2,3,4,5]
function getarray(getArray){
    return getArray[1]
}
console.log(getarray(arr))