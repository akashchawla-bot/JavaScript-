// singleton
object.create


// object literals

let mysml = Symbol("mysml");

const jsUser = {
    name: "John Doe",
    "full name": "Johnathan Doe",
    [mysml]: "This is a symbol property",
    age: 30,
    location: "New York",
    
}


console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser["full name"]);
console.log(jsUser[mysml]); 

// changing the value of a email
// jsUser.email = "JohnathanDoe@gmail.com"// jsUser.email = "JohnathanDoe@email.com";
freeze(jsUser);// it will freeze the object, no more changes can be made

jsUser.email = "JohnathanDoe@gmail.com"// this will not work, as the object is frozen
console.log(jsUser.email); // undefined, as the email property was not set

