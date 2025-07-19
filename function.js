//  functions.js

// function sayMyName (){
//     console.log("A");
//     console.log("K");
//     console.log("A");
//     console.log("S");
//     console.log("H");
// }

// sayMyName(); //print "A K A S H" in console

// function addition(num1, num2) {
//     console.log(num1 + num2);
// }

// addition(5, 10); //print 15 in console
// addition(5, "10") //print 510 in console
// // addition(5, null) //print 5 in console

// function addition(num1, num2) {
//     const result = num1 + num2;
//     console.log("this will be executed");//thsi will be executed
//     return result;
//     console.log("this will not be executed"); //this console log will not be executed because of the return statement
//     // return statement ends the function execution
//     // if this is writen befor the return statement, it will execute
//     
//     one more way to write this executable code is 
    // return num1 + num2; //this will return the sum of num1 and num2
    // this is a more concise way to write the function
    // it is also more readable and easier to understand
// }

// const result = addition(5, 10); //result will be 15
// console.log(result); //print 15 in console


// function login(username) {
//     return `${username} has logged in successfully.`;
// }

// console.log(login("Akash")); //print "Akash has logged in successfully." in console

// function calculatePrice(...num1){
//     return num1;
// }

// console.log(calculatePrice(10,200,500,190,150)); //print 10 in console

// const user ={
//     username: "Akash",
//     gmail: "akash@gmail.com"
// }

// function displayUser({username, email}) {
//     console.log(`Username: ${username}, Email: ${email}`);
// }

// // displayUser(user); //print "Username: Akash, Email:

// displayUser({
//     username: "Akash",
//     email: "akash@gmail.com"
// });

// const myNewArrys =[200, 300, 400, 500];

// function returnSecondvalue(MyNewArray) {
//     return MyNewArray[1];
// }

// // console.log(returnSecondvalue(myNewArrys)); //print 300 in console
// console.log(returnSecondvalue([100, 200, 300, 400])); //print 200 in console

// // Immediately invoked function expression

// // when we write 2 iife we have to use ; after the first iife

// (function chai() {
//     // named iife
//     console.log(`DB Connected`);
// })();

// ((name) => {
//     // unnamed iife
//     console.log(`DB Connected ${name}`);
// })(`Akash`)//paramearters passed to iief