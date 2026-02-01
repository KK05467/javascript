const userEmail = "keertan@email.com"

if(userEmail) {
    console.log("USer have email")
}

else{
    console.log("Don't have user email")
}

//Empty arrays are considered to be true while empty strings are considered to be false

//*************Falsy values****************

//false, 0, -0, BigInt 0n, "", null, undefined, NaN


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
    if(Object.keys(emptyObj).length === 0){
        console.log("Object is empty")
    }


// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10

//val - null ?? 15

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 10


console.log(val1);


//Ternary Operator

// condition ? true : false

