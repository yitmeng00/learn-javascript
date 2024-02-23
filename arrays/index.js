/*
Creating an array
*/
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];

let person = ["Ivan", "Evan"];

// Bracket notation to access element
console.log(person[1]);

// Calculate array length
console.log(person.length);

/*
Iterating over arrays
*/
// using for loop
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// using foreach
const colours = ["red", "green", "blue"];
colours.forEach((color) => console.log(color));

/*
Array methods
*/
// concat()
let myArray1 = ["1", "2", "3"];
myArray1 = myArray1.concat("a", "b", "c");
// myArray1 is now ["1", "2", "3", "a", "b", "c"]

// join()
const myArray2 = ["Wind", "Rain", "Fire"];
const list = myArray2.join(" - "); // list is "Wind - Rain - Fire"

// push()
const myArray3 = ["1", "2"];
myArray3.push("3"); // myArray3 is now ["1", "2", "3"]

// pop()
const myArray4 = ["1", "2", "3"];
const last = myArray4.pop();
// myArray4 is now ["1", "2"], last = "3"

// shift()
const myArray5 = ["1", "2", "3"];
const first = myArray5.shift();
// myArray5 is now ["2", "3"], first is "1"

// unshift()
const myArray6 = ["1", "2", "3"];
myArray6.unshift("4", "5");
// myArray6 becomes ["4", "5", "1", "2", "3"]

// slice()
let myArray7 = ["a", "b", "c", "d", "e"];
myArray7 = myArray7.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3

// at()
const myArray8 = ["a", "b", "c", "d", "e"];
myArray8.at(-2); // "d", the second-last element of myArray8

// splice()
const myArray9 = ["1", "2", "3", "4", "5"];
myArray9.splice(1, 3, "a", "b", "c", "d");
// myArray9 is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.

// reverse()
const myArray10 = ["1", "2", "3"];
myArray10.reverse();
// transposes the array so that myArray10 = ["3", "2", "1"]

// flat()
let myArray11 = [1, 2, [3, 4]];
myArray11 = myArray11.flat();
// myArray11 is now [1, 2, 3, 4], since the [3, 4] subarray is flattened

// sort()
const myArray12 = ["Wind", "Rain", "Fire"];
myArray12.sort();
// sorts the array so that myArray12 = ["Fire", "Rain", "Wind"]

// indexOf()
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found

// lastIndexOf()
const b = ["a", "b", "c", "d", "a", "b"];
console.log(b.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(b.lastIndexOf("b", 4)); // 1
console.log(b.lastIndexOf("z")); // -1

// forEach
const c = ["a", "b", "c", "d", "a", "b"];
console.log(c.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(c.lastIndexOf("b", 4)); // 1
console.log(c.lastIndexOf("z")); // -1

// map()
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']

// flatMap()
const b1 = ["a", "b", "c"];
const b2 = b1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(b2); // ['A', 'a', 'B', 'b', 'C', 'c']

// filter()
const c1 = ["a", 10, "b", 20, "c", 30];
const c2 = c1.filter((item) => typeof item === "number");
console.log(c2); // [10, 20, 30]

// find()
const d1 = ["a", 10, "b", 20, "c", 30];
const j = d1.find((item) => typeof item === "number");
console.log(j); // 10

// findLast()
const d2 = ["a", 10, "b", 20, "c", 30];
const k = d2.findLast((item) => typeof item === "number");
console.log(k); // 30

// findIndex()
const e1 = ["a", 10, "b", 20, "c", 30];
const l = e1.findIndex((item) => typeof item === "number");
console.log(l); // 1

// findLastIndex()
const f1 = ["a", 10, "b", 20, "c", 30];
const m = f1.findLastIndex((item) => typeof item === "number");
console.log(m); // 5

// every()
function isNumber(value) {
    return typeof value === "number";
}
const g1 = [1, 2, 3];
console.log(g1.every(isNumber)); // true
const h2 = [1, "2", 3];
console.log(h2.every(isNumber)); // false

// some()
function isNumber(value) {
    return typeof value === "number";
}
const i1 = [1, 2, 3];
console.log(i1.some(isNumber)); // true
const j2 = [1, "2", 3];
console.log(j2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false

// reduce()
const z = [10, 20, 30];
const total = z.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(total); // 60

/*
Array transformations
*/
const inventory = [
    { name: "asparagus", type: "vegetables" },
    { name: "bananas", type: "fruit" },
    { name: "goat", type: "meat" },
    { name: "cherries", type: "fruit" },
    { name: "fish", type: "meat" },
];

const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result.vegetables);
// [{ name: "asparagus", type: "vegetables" }]

/*
Multi-dimensional arrays
*/
const x = new Array(4);
for (let i = 0; i < 4; i++) {
    x[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
        x[i][j] = `[${i}, ${j}]`;
    }
}
