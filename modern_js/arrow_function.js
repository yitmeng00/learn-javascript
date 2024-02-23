const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

// // normal function
// const activeJobs = jobs.filter(function (job) {
//     return job.isActive;
// });

// modern js arrow function
const activeJobs = jobs.filter((job) => job.isActive);

class Person {
    constructor() {
        this.age = 0;

        setInterval(() => {
            this.age++; // `this` properly refers to the person object
        }, 1000);
    }
}

const p = new Person();

console.log(activeJobs);
console.log(p);
