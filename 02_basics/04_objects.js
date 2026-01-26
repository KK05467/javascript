// //const tinderUser = newObject()  //this is singleton object
// const tinderUser= {} //this is non-singleton object


// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser,isLoggedIn = false


// // console.log(tinderUser);

// // const regularUser = {
// //     email: "some@gmail.com",
// //     fullname: {
// //         userfullname: {
// //             firstname: "keertan",
// //             lastname: "kumar"
// //         }
        
// //     }
// // }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {
//     1: "a",
//     2: "b"
// }

// const obj2 = {
//     3: "a",
//     4: "b"
// }

// //onst obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
// //console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//backend provides the info through api i form of json file which is nothing but just like an object with no name and keys as strings. It can be fetched and can be used through fetch function

