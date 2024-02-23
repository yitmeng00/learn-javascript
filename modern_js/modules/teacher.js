import { Person } from "./person.js";

export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

/*
If you console.log(teacher.teach()), you will see teach and undefined, it is because the `teach` method itself doesn't return anything explicitly,
so when you log the result of teacher.teach(), it logs undefined by default. You can modify the method to return a value.
*/