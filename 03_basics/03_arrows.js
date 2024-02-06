const user = {
    username:"ipi",
    price: 100,
    welcome : function(){
        console.log(`${this.username}, welcome `)
    }

}
user.welcome()
user.username="sachin"
user.welcome()

const chai = () => {
    let username = "ipsita"
    console.log(this)
}
chai()

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))