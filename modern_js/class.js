// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// const person = new Person("Ivan");

/*
For now if you want create 1 more class which contain the walk method, you need to create again the same method, 
there are 2 ways to solve this: inheritance and composition
*/

// Inheritance
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("Ivan", "Software Engineering");
console.log(teacher);
