const accountId = 12345;
let accountEmail = "ipsi123@gmail.com";
var accountPassword = "1234567";
accountCity = "Jaipur";
let accountState;
// accountId = 2; (not allowed)
//const cannot be changed
accountEmail= "12345@@gmail.com"
//one way to print all the variables individually
// console.log(accountId);
// console.log(accountEmail);
//another way to print using console table
console.table([accountEmail,accountId,accountPassword,accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/