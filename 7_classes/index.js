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

/*
For the above code we have multiple classes defined in the same file
we can separate each class into separate files and we call it as a module.
*/

class Bird {
    constructor(name) {
        this.name = name;
    }

    chirp() {
        console.log("chirp");
    }

    static fly() {
        console.log("fly");
    }
}

const bird = new Bird("Seagull");
console.log(bird.chirp());
console.log(Bird.fly());
// static method can direct call, but normal method need to intialize the class before call it

