// var we use when we use scopes
if(true){
    let a = 10//error
    const b = 20//error
    var c = 30//it will only print
}

function one(){
    const username = "ipsita"

    function two(){
        const website = "yt"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()
// addTwo(5) => it will show error becx we are giving a value before using in fnction
const addTwo = function(num){
    return num + 2

}
console.log(addTwo(2))