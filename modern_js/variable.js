// function sayHello() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// sayHello();

function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);
}

sayHello();

/*
There is a difference between var and let as shown above, if you use var, the variable can be accessed within the function, 
however if you use let / const, the variable can only be accessed within the block.
var can be declared as local / global variables but let and const is block-scoped.
*/
