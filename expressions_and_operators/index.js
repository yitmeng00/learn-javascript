/*
Operators
*/

/* Assignment operators */
// Assignment
let a = 2;
let b = `hello`;

// Addition assignment
a = 5;
console.log((a = a + 3));
console.log((a += 3));

// Subtraction assignment
a = 5;
console.log((a = a - 3));
console.log((a -= 3));

// Multiplication assignment
a = 5;
console.log((a = a * 3));
console.log((a *= 3));

// Division assignment
a = 5;
console.log((a = a / 3));
console.log((a /= 3));

// Remainder assignment
a = 5;
console.log((a = a % 3));
console.log((a %= 3));
// The value left after the division

// Exponentiation assignment
a = 5;
console.log((a = a ** 3));
console.log((a **= 3));
// a to the power of 3

// Left shift assignment
a = 5; // 00000000000000000000000000000101
a <<= 2; // 00000000000000000000000000010100
console.log(a); // Expected output: 20

// Right shift assignment
a = 5; //  00000000000000000000000000000101
a >>= 2; //  00000000000000000000000000000001
console.log(a); // Expected output: 1

b = -5; //  11111111111111111111111111111011
b >>= 2; //  11111111111111111111111111111110
console.log(b); // Expected output: -2

// Unsigned right shift assignment
a = 5; //  00000000000000000000000000000101
a >>>= 2; //  00000000000000000000000000000001
console.log(a); // Expected output: 1

b = -5; // -00000000000000000000000000000101
b >>>= 2; //  00111111111111111111111111111110
console.log(b); // Expected output: 1073741822

// Bitwise AND assignment
a = 5;
console.log((a = a & 3));
console.log((a &= 3));

// Bitwise XOR assignment
a = 5;
console.log((a = a ^ 3));
console.log((a ^= 3));

// Bitwise OR assignment
a = 5;
console.log((a = a | 3));
console.log((a |= 3));

// Logical AND assignment
a = 1;
b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0

// Logical OR assignment
a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= "title is empty.";
console.log(a.title);
// Expected output: "title is empty"

// Nullish coalescing assignment
a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

/* Comparison operators */
const var1 = 3;
const var2 = 4;

// Equal (==)
3 == var1;
"3" == var1;
3 == "3";

// Not equal (!=)
var1 != 4;
var2 != "3";

// Strict equal (===) compare typeof
3 === var1;
"3" === var1;

// Strict not equal (!==)
var1 !== "3";
3 !== "3";

// Greater than (>)
var2 > var1;
"12" > 2;

// Greater than or equal (>=)
var2 >= var1;
var1 >= 3;

// Less than (<)
var1 < var2;
"2" < 12;

// Less than or equal (<=)
var1 <= var2;
var2 <= 5;

/* Arithmetic operators */
/*
Remainder (%)
Increment (++)
Decrement (--)
Unary negation (-)
Unary plus (+)
Exponentiation operator (**)
*/

/* Bitwise operators */
/*
Bitwise AND (a & b)
Bitwise OR (a | b)
Bitwise XOR (a ^ b)
Bitwise NOT (~ a)
Left shift (a << b)
Sign-propagating right shift (a >> b)
Zero-fill right shift (a >>> b)
*/

/* Logical operators */
/*
Logical AND (&&) expr1 && expr2
Logical OR (||)	expr1 || expr2
Logical NOT (!)	!expr
*/

/* BigInt operators */
// BigInt addition
const x = 1n + 2n; // 3n
// Division with BigInts round towards zero
const y = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const z = 40000000000000000n >> 2n; // 10000000000000000n
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead

/* String operators */
let mystring = "alpha";

/* Conditional (ternary) operators */
// condition ? val1 : val2
const age = 15;
const status = age >= 18 ? "adult" : "minor";

/* Unary operators */
// delete object.property;
// delete object[propertyKey];
// delete objectName[index];

/* Relational operators */
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true

/* Basic expressions */
// this
this["propertyName"];
this.propertyName;

// new
const objectName = new ObjectType(param1, param2, /* …, */ paramN);

// super
super(args); // calls the parent constructor.
super.functionOnParent(args);
