// # Arrays 

// Arrays in JavaScript are ordered collections of values. They can hold elements of any type (numbers, strings, objects, other arrays, etc.) and are zero-indexed (the first element is at index 0).

// Creating an Array:
// let fruits = ["apple", "banana", "cherry"];

// Accessing Elements:
// console.log(fruits[0]); // "apple"

// Javascript arrays are zero indexed :- the first element of an array is at 0 index, the second is at 1, and so on

// Javascript arrays copy operations creats Shallow copies(A Shallow copy of an object is copy whose propertis share the same refrence)

// Common Methods:

// push() – Add to the end(this method add a new element in the end of the array)
// pop() – Remove from the end(this method removes the last element of the array)
// shift() – Remove from the start(this method removes the first element of the array)
// unshift() – Add to the start(this method adds a new element in the start of the array)
// length – Number of elements(this property returns the number of elements in the array)
// includes() – Check if an element exists(this method checks if an element is present in the array)
// indexOf() – Find the index of an element(this method returns the index of the first occurrence of an element in the array)
// slice() - The slice() method in JavaScript returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included). The original array is not modified.
// splice() - The splice() method in JavaScript changes the contents of an array by removing, replacing, or adding elements in place. It modifies the original array and returns an array of the removed elements.
// join() – Convert to a string(this method joins all elements of the array into a string)  
// forEach() – Loop through elements()
// map(), filter(), reduce() – Functional operations
// concat() – Merge arrays(this method merges two or more arrays into a new array)this method merges two or more arrays into a new array)istead of modifying the original arrays.
// one more way to merge arrays is using spread operator like this:
// let mergedArray = [...array1, ...array2];
// ************************
// ---- Note if we try to add array to an array using push() method it will add the array as a single element, not merge it.
// for example:
// let fruits = ["apple", "banana"];
// let moreFruits = ["cherry", "orange"];
// fruits.push(moreFruits); // ["apple", "banana", ["cherry", "orange"]]
// so the index 2 is array itself as a Element

// ************************

// Example:

// fruits.push("orange"); // ["apple", "banana", "cherry", "orange"]
// let first = fruits.shift(); // "apple", fruits is now ["banana", "cherry", "orange"]

// Arrays are dynamic and can grow or shrink as needed.

// flat() - The flat() method in JavaScript creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. By default, it flattens one level deep, but you can specify a depth to flatten further.
// Example:
// let nestedArray = [1, [2, [3, 4]]];
// let flatArray = nestedArray.flat(); // [1, 2, [3, 4]]
// let deeplyFlatArray = nestedArray.flat(2); // [1, 2, 3, 4]

// Array.isArray() - The isArray() method in JavaScript checks if a value is an array. It returns true if the value is an array, and false otherwise.
// Example:
// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray("not an array")); // false

// Array.from() - The from() method in JavaScript creates a new array instance from an array-like or iterable object. It can also take a mapping function as a second argument to transform the elements while creating the new array.
// Example:
// let str = "hello";
// let arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
// let mappedArr = Array.from(str, char => char.toUpperCase()); // ['H', 'E', 'L', 'L', 'O']