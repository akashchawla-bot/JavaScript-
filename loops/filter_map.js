// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);// output print the js ruby java python cpp
//     return item // forEach loop doesn't return value

// })

// console.log(values);


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum1 = myNum.filter( (num) => num >= 5 ) //add filter to myNum create a call back function and pass a condition
// console.log(newNum); // this will print [5, 6, 7, 8, 9, 10]

// const newNum2 = myNum.filter( (num) => {
//     return num >= 5 // we have top add return keyword when we declare the block 
// } ) //add filter to myNum create a call back function and pass a condition
// console.log(newNum); // this will print [5, 6, 7, 8, 9, 10]

/*this will work same as above code this is the way using forEach Loop 
const newNum3 =[]

myNum.forEach( (num) => {
    if (num > 4) {
        newNum3.push(num)
    }    
});

console.log(newNum3);
*/

// const books =[
//     { title: 'book One', genre : 'fiction', publish: 1981, edition: 2004 },
//     { title: 'book two', genre : 'Non-fiction', publish: 1982, edition: 2008 },
//     { title: 'book three', genre : 'history', publish: 1991, edition: 2007 },
//     { title: 'book four', genre : 'non-fiction', publish: 1995, edition: 2010 },
//     { title: 'book five', genre : 'science', publish: 20010, edition: 2014 },
//     { title: 'book six', genre : 'fiction', publish: 1996, edition: 2010 },
//     { title: 'book One', genre : 'history', publish: 1993, edition: 1996 },
// ]

// let userBook = books.filter( (bk) => bk.genre === 'history')

// userBook = books.filter( (bk) => bk.publish >= '2000')
// //            or
// userBook = books.filter( (bk) => {return bk.publish >= '1992'})
// // to add more that 1 filter
// userBook = books.filter( (bk) => {
//     return bk.publish >= '1992' && bk.genre === 'history'
// })


// console.log(userBook);



// chaining

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)

console.log(newNums);

