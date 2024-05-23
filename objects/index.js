/*
Creating new object
*/
const obj = {
    property1: "value1", // property name may be an identifier
    2: "value2", // or a number
    "property n": "value3", // or a string
};

const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

/*
Deleting properties
*/
delete myobj.a;
console.log("a" in myobj); // false

/*
Accessing the object
*/
// Dot notation to access property
console.log(obj.property1);

// Bracket notation to access property
console.log(obj[`property n`]);

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

/*
When you use a `for...in` loop to iterate over the properties of `obj`, 2 will log out first before property 1 because of the ECMAScript specification sequence:
1. Integer keys (array indices) in ascending numerical order.
2. String keys that are non-integer in the order they were added to the object.
3. Symbol keys (not relevant in your example).
*/
showProps(obj, "Test Object");

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

console.log(listAllProperties(obj));

/*
Prevent adding properties
*/
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
Object.freeze(obj);
// Prevents the addition of new properties to an object.
Object.preventExtensions(obj);
// Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
Object.seal(obj);
