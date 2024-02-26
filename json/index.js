// JSON.stringify()
// This method is used to convert a JavaScript object into a JSON string.
const person1 = {
    name: "John",
    age: 30,
    city: "New York",
};

const jsonString1 = JSON.stringify(person1);
console.log(jsonString1);
// Output: {"name":"John","age":30,"city":"New York"}

// JSON.parse()
// This method is used to parse a JSON string and convert it into a JavaScript object.
const jsonString2 = '{"name":"John","age":30,"city":"New York"}';

const person2 = JSON.parse(jsonString2);
console.log(person2);
// Output: { name: 'John', age: 30, city: 'New York' }

//
