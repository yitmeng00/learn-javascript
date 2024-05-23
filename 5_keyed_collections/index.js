/*
Maps and Sets
*/
// Map Object
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
    console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

// Set object
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
    console.log(item);
}
// 1
// "some text"

/* The for ... of loop */
let petsArray = ["cat", "dog", "hamster"];
for (let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
}
let petsSet = new Set(["cat", "dog", "hamster"]);
for (let pet of petsSet) {
    console.log(pet); // -> cat -> dog -> hamster
}
let petsMap = new Map([
    ["cats", 1],
    ["dogs", 3],
    ["hamsters", 2],
]);
for (let pet of petsMap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> cats -> dogs -> hamsters
}
