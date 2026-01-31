// Immediately Invoked Function Expression (IIFE)


(function chai() {
    console.log(`DB CONNECTED`) 
})(); //; is needed here to end and tell the compiler about the end of context 

// chai()
//IIFE is used to remove the gloal scope pollution means the declaration and all that are supposed to be there in the global scope! 

( (name) =>{
    console.log(`Database Connected ${name}`);
})('keertan')