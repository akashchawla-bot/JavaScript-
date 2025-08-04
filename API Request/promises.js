// fetch('https://somthing.com').then().catch().finally()

const PromiseOne =new Promise(function(resolve, reject){
    // Do an async task
    // DB calls,cryptography
    setTimeout(function(){
        console.log('Async task is Completed');
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log("Promise Consume");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
    
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "AKASH CHAWLA", email: "chawlaakash024@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
    
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Akash", Password: "123"})
        }else{
            reject('ERROR: somthing went wrong')
        }
    },1000)
})

promisefour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(() => console.log("The Promise is Resolved or Rejected")) // it always runs


//  we can also do using async or await

const promisefive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javaScript", Password: "135"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(params) {
    try{
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))