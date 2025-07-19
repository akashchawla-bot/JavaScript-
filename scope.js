//  scope concept
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30
// }

// const { use } = require("react");


// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30, var is function scoped or globally scoped, so it is accessible outside the block

// var is function scoped or globally scoped, so it is accessible outside the block
// let and const are block scoped, so they are not accessible outside the block

// there are two types of scope in javascript
// 1. Global scope - variables declared outside of any function or block
// 2. Local scope - variables declared inside a function or block

// // nested scopes
// function outerFunction() {
//     let outerVariable = "I am from outer function";

//     function innerFunction() {
//         let innerVariable = "I am from inner function";
//         console.log(outerVariable); // I am from outer function
//         console.log(innerVariable); // I am from inner function
//     }

//     innerFunction();
//     // console.log(innerVariable); // ReferenceError: innerVariable is not defined
// }
// outerFunction(); // This will call the outer function and execute the inner function

// same with conditional statements 

// const password = "true";

// if (password == "true"){
//     const x = "I am inside if block";
//     if(x === "I am inside if block")
//     {
//         const y = "I am inside nested if block";
//         console.log("This is true connditional statement");
//     }
    // console.log(y); // I am outside my scope if block
// }

// console.log(x); // ReferenceError: x is not defined, as x is block scoped and not accessible outside the if block

// ******************************interesting***********************

// function addone(num){
//     return num + 1
// }

// console.log(addone(5));

// const addtwo = function(num){
//     return num + 2;
// }

// console.log(addtwo(5));

// **************************
// this and arrow functions
// ********************************

// const user = {
//     userName: "Akash",
//     price: 999,
// welcomeMessage: function() {
//     console.log(`${this.userName} has logged in successfully.`);
//     console.log(this);// this refers to the user object
    
// }
// }

// // user.welcomeMessage(); // Akash has logged in successfully.
// // user.userName = "John";
// // user.welcomeMessage(); // John has logged in successfully. 

// console.log(this); // In the global context, 'this' refers to the global object (window in browsers, global in Node.js)



// function ontop(){
//     let userName = "Akash";
//     console.log(this.userName); // In the global context, 'this' refers to the global object (window in browsers, global in Node.js)
// }

// ontop(); // This will log the global object


// const user = function() {
//     let userName = "Akash";
//     console.log(this.userName);
// }

// user(); // In the global context, 'this' refers to the global object (window in browsers, global in Node.js)

// const user = () => {
//     let userName = "Akash";
//     console.log(this.userName);
// }

// user(); // In the global context, 'this' refers to the global object (window in browsers, global in Node.js)

// const user = () => {
//     let userName = "Akash";
//     console.log(this);
// }

// user(); // 

// const Add = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(Add(4, 5)); // 9

// const Add = (num1, num2) =>  num1 + num2;// Arrow function with implicit return it will assume the return statement

// console.log(Add(4, 5)); // 9

// const myarray =[1,2,3,4,5];

// myarray.forEach(function() {}); // regular function has its own 'this', it refers to the global object in this case

// myarray.forEach(() => {}); //arrow function does not have its own 'this', it inherits 'this' from the parent scope
