// for

/*
syntax;

for (let index = 0; index < array.length; index++) {
    const element = array[x];

}
*/

// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// console.log(i);
// we cann't use i outside the for loop
// console.log(i); // ReferenceError: i is not defined

// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     if(i == 3){
//         console.log("4 is best number");
        
//     }
//     console.log(array[i]);
// }

// we can also use loop inside loop

// const array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         console.log(`i: ${array[i]}, j: ${array[j]}`);
//     }
// }


// break and continue
// break: exit the loop
// continue: skip the current iteration and continue with the next one

// const array = [1, 2, 3, 4, 5];
// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log("detected 5");
//         break; // exit the loop when index is 5 
//     }
//     console.log(`value of i is ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log("detected 5");
//         continue; // skip the current iteration when index is 5
//     }
//     console.log(`value of i is ${index}`);
// }