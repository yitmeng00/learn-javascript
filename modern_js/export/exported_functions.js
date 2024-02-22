export function promote() {}

export default class Teacher {
    constructor(name, degree) {
        this.name = name;
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

export class Student {
    constructor(name, degree) {
        this.name = name;
        this.degree = degree;
    }

    learn() {
        console.log("learn");
    }
}
