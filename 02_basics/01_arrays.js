//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman", "Ironman"]


const myArr2 = new Array(1,2,3,4)

//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)  //shifts all the elements and add the values to intial

myArr.shift()  //9 got removed

// console.log(myArr.includes(9)); //Bool type o/p

// console.log(myArr.indexOf(2));  //gives -1 if not present

// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice ad splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);


//slice does not affect the original array whereas the splice actually cuts the original array



