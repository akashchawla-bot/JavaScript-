// // for of loop

// // ["", "", "", ""]
// // [{}, {}, {}]
// // const greet = "hello world"
// // const arr = [1, 2, 3, 4, 5];

// // for (const num of arr) {
// //     console.log(num);    
// // }

// // for (const num of greet) {
// //     // if (num === " ") {
// //     //     continue; // skip the space character
// //     // }
// //     if (num === "w") break; // exit the loop when 'o' is encountered
// //     console.log(num);    
// // }

// // for (const key in object) {
// //     if (Object.prototype.hasOwnProperty.call(object, key)) {
// //         const element = object[key];
        
// //     }
// // }


// // Maps
// // maps are known for unique keys and values

// const map = new Map()
// map.set(`IN`, `India`)
// map.set(`US`, `United States`)
// map.set(`UK`, `United Kingdom`)
// map.set(`IN`, `India`) // this will not add a new entry because the key is already present

// console.log(map);
// // output: Map(3) { 'IN' => 'India', 'US' => 'United States', 'UK' => 'United Kingdom' }

// for (const [key, value] of map) {
//     console.log(`key: ${key}, value: ${value}`);
// }

// const obj = {
//     'game1': 'cricket',
//     'gamee2': 'football',
// }

// for (const [key, value] of Object.entries(obj)) {
//     console.log(`key: ${key}, value: ${value}`);
// }
// // This will iterate over the entries of the object and log the key-value pairs

// for (const [key, value] of Object) {
//     console.log(`key: ${key}, value: ${value}`);
// }
// // This will throw an error because Object is not iterable

// for (const key in obj) {
//     console.log(`${key} shortcut is for ${obj[key]}`);
    
// }
// // This will iterate over the keys of the object and log the key-value pairs