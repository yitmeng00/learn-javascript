const first = [1, 2, 3];
const second = [4, 5, 6];

// // old way
// const combined = first.concat(second);

// modern js
const combined = [...first, ...second];

// // Another example
// const first = { name: "Mosh" };
// const second = { job: "Instructor" };

// const combined = { ...first, ...second, location: "Australia" };

console.log(combined);
