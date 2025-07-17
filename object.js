// // singleton
// object.create

// const { use } = require("react")


// // object literals

// let mysml = Symbol("mysml");

// const jsUser = {
//     name: "John Doe",
//     "full name": "Johnathan Doe",
//     [mysml]: "This is a symbol property",
//     age: 30,
//     location: "New York",
    
// }


// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysml]); 

// changing the value of a email
// jsUser.email = "JohnathanDoe@gmail.com"// jsUser.email = "JohnathanDoe@email.com";
// freeze(jsUser);// it will freeze the object, no more changes can be made

// jsUser.email = "JohnathanDoe@gmail.com"// this will not work, as the object is frozen
// console.log(jsUser.email); // undefined, as the email property was not set

// jsUser.greeing = function(){
//     console.log("hello, Js User");
// }

// jsUser.greeing2 = function(){
//     console.log(`hello, Js User ${this.name}`);
// }

// console.log(jsUser.greeing());




// const tinder = new Object();

// const tinder = {}
// tinder.id = "12345";
// tinder.name = "Tinder";
// tinder.age = 5;
// tinder.location = "San Francisco";
// tinder.isActive = true;

// console.log(tinder);

// const regularUser = {
//     email : "Some@chatgpt.com",
//     userName : "ChatGPT",
//     password : "12345678",
    // fullName: {
//         userName: {
//             firstName : "Chat",
//             lastName : "GPT"
        // }
//     }
// }
// console.log(regularUser);/*{
//   email: 'Some@chatgpt.com',
//   userName: 'ChatGPT',
//   password: '12345678',
//   fullName: { userName: { firstName: 'Chat', lastName: 'GPT' } }
// }*/
// console.log(regularUser.email);// some@chatgpt.com
// console.log(regularUser.fullName);// { userName: { firstName: 'Chat', lastName: 'GPT' } }
// console.log(regularUser.fullName.userName);// { firstName: 'Chat', lastName: 'GPT' }
// console.log(regularUser.fullName.userName.firstName);// Chat
// console.log(regularUser.fullName.userName.lastName);// GPT

// used when you are not sure if the property exists or not
// console.log(regularUser.fullName?.userName);// it will not throw an error if fullName is undefined
// console.log(regularUser.fullName?.userName?.firstName);// it will not throw an error if fullName or userName is undefined
// console.log(regularUser.fullName?.userName?.lastName);// it will not throw an error if fullName or userName is undefined


// // obj asign

// const obj1 = {
//     name: "John",
//     age: 30}

// const obj2 = {
//     location: "New York",
//     isActive: true
// }

// const obj3 = {obj1,obj2};
// console.log(obj3); // { obj1: { name: 'John', age: 30 }, obj2: { location: 'New York', isActive: true } }

// // see the difference between Object.assign and above method
// // The above method creates a new object with obj1 and obj2 as properties,
// // while Object.assign merges the properties of obj1 and obj2 into a new object.
// // The new object will have all properties from both obj1 and obj2,
 

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4); // { name: 'John', age: 30, location: 'New York', isActive: true

// const obj5 = Object.assign(obj1, obj2);
// console.log(obj5); // { name: 'John', age: 30, location: 'New York', isActive: true }
// console.log(obj1); // { name: 'John', age: 30, location: 'New York', isActive: true }
// obj1 is modified, as Object.assign modifies the first argument
// obj2 is not modified, as Object.assign does not modify the second argument
// This is because Object.assign creates a new object with the properties of the first argument
// and merges the properties of the second argument into it.
// If you want to keep the original objects unchanged, you should use Object.assign({}, obj1, obj2)
// This creates a new object with the properties of obj1 and obj2, without modifying either of them.
// This is useful when you want to create a new object with the properties of both objects without modifying the original objects,
// as modifying the original objects can lead to unexpected behavior in your code,
// especially if they are used elsewhere in your code.
// This is because Object.assign modifies the first argument and returns it,
// so if you want to keep the original objects unchanged, you should not use Object.assign directly
// on the original objects.
// Instead, you should create a new object with the properties of both objects,

// console.log(obj1 == obj4); // true, as obj1 and obj4 are the same object now
// so its the reason we use Object.assign({}, obj1, obj2) to create a new object

// spread operator
// const obj6 = {...obj1, ...obj2};
// console.log(obj6); // { name: 'John', age: 30, location: 'New York', isActive: true }
// console.log(obj1); // { name: 'John', age: 30 }
// console.log(obj2); // { location: 'New York', isActive: true }
// obj1 and obj2 are not modified, as the spread operator creates a new object with the properties of both objects
// This is useful when you want to create a new object with the properties of both objects without modifying the original objects,
// as modifying the original objects can lead to unexpected behavior in your code,
// especially if they are used elsewhere in your code.
// The spread operator is a more concise way to merge objects than Object.assign,
// and it is also more readable and easier to understand.
// It is also more efficient, as it does not create a new object with the properties of both objects,
// but instead creates a new object with the properties of both objects in a single step.
// This is because the spread operator creates a new object with the properties of both objects,
// while Object.assign creates a new object with the properties of the first object and merges the properties
// of the second object into it.



// const users = [
//     {
//         id : 12345,
//         email : "aksh@gmail.com"   
//     },
//     {
//         id : 12345,
//         email : "aksh@gmail.com"   
//     },
//     {
//         id : 12345,
//         email : "aksh@gmail.com"   
//     },
//     {
//         id : 12345,
//         email : "aksh@gmail.com"   
//     },
//     {
//         id : 12345,
//         email : "aksh@gmail.com"   
//     }
// ]

// users[1].email 
// // console.log(tinderuser);


// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));


// console.log(tinder.hasOwnProperty("id")); // true


const course ={
    course: "JavaScript",
    duration: "3 months",
    price: 1000,
    instructor: "John Doe",
}

// corse.instructor we can access the instructor property directly

const {instructor: instruct} = course; //we can give difftrent easy name insatead of instructor 

// console.log(instructor); // John Doe 
console.log(instruct); // John Doe

// {
//     name: jstar,
//     course_name: "JavaScript",
//     duration: "3 months",
//     price: "free"
// }