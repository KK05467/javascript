//singleton
//object.create

//object literals


const mySym = Symbol("key1")


const JsUser = {
    name:"Keertan", //here 'name' is key and Keertan is value
    "full name": "Keertan Kumar",
    [mySym]: "mykey1",  //to use it as symbol write mySym in square brackets else the type is string
    age:18,
    location: "Mokama",
    email: "keertan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)

// console.log(JsUser["email"])  //preferred

//we cant access the full name attribute using the dot operator thus to use the second operator

// console.log(JsUser[mySym])  //o/p is string

JsUser.email = "keertan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
