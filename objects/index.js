/*
Creating new object
*/
const obj = {
    property1: value1, // property name may be an identifier
    2: value2, // or a number
    "property n": value3, // or a string
};

const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

/*
Accessing the object
*/
let person = {
    name: "Ivan",
    age: 24,
};

// Dot notation to access property
console.log(person.name);

// Bracket notation to access property
console.log(person[`name`]);

/*
Enumerating properties
*/
// for...in loops. This method traverses all of the enumerable string properties of an object as well as its prototype chain.
function showProps(obj, objName) {
    let result = "";
    for (const i in obj) {
        // Object.hasOwn() is used to exclude properties from the object's
        // prototype chain and only show "own properties"
        if (Object.hasOwn(obj, i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}

// Object.keys(). This method returns an array with only the enumerable own string property names ("keys") in the object myObj, but not those in the prototype chain.
function showProps(obj, objName) {
    let result = "";
    Object.keys(obj).forEach((i) => {
        result += `${objName}.${i} = ${obj[i]}\n`;
    });
    console.log(result);
}

// Object.getOwnPropertyNames(). This method returns an array containing all the own string property names in the object myObj, regardless of if they are enumerable or not.
function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];

    while (objectToInspect !== null) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        objectToInspect = Object.getPrototypeOf(objectToInspect);
    }

    return result;
}

/*
Deleting properties
*/
// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log("a" in myobj); // false

