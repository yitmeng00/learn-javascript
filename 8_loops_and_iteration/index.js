// for statement
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// do...while statement
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// while statement
let k = 0;
while (k < 5) {
    console.log(k);
    k++;
}

// for...in statement (The for...in statement iterates a specified variable over all the enumerable properties of an object.)
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}

// for...of statement (The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.)
const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value);
}

// labeled statement
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;
        }
        console.log(i, j);
    }
}

// break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
