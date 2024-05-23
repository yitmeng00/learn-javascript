/*
Numbers
*/
// decimal, binary, octal, and hexadecimal.

/*
Number object
*/
// property
Number.MAX_VALUE; // (The largest positive representable number (1.7976931348623157e+308))
Number.MIN_VALUE; // (The smallest positive representable number (5e-324))
Number.NaN; // (Special "not a number" value)
Number.NEGATIVE_INFINITY; // (Special negative infinite value; returned on overflow)
Number.POSITIVE_INFINITY; // (Special positive infinite value; returned on overflow)
Number.EPSILON; // (Difference between 1 and the smallest value greater than 1 that can be represented as a Number (2.220446049250313e-16))
Number.MIN_SAFE_INTEGER; // (Minimum safe integer in JavaScript (−2^53 + 1, or −9007199254740991))
Number.MAX_SAFE_INTEGER; // (Maximum safe integer in JavaScript (+2^53 − 1, or +9007199254740991))

// method
Number.parseFloat();
Number.parseInt();
Number.isFinite();
Number.isInteger();
Number.isNaN();
Number.isSafeInteger();
toExponential();
toFixed();
toPrecision();

/*
Math object
*/
Math.PI;
Math.sin(1.56);

// method
abs(); // Absolute value
sin(), cos(), tan(); // Standard trigonometric functions; with the argument in radians.
asin(), acos(), atan(), atan2(); // Inverse trigonometric functions; return values in radians.
sinh(), cosh(), tanh(); // Hyperbolic functions; argument in hyperbolic angle.
asinh(), acosh(), atanh(); // Inverse hyperbolic functions; return values in hyperbolic angle.
pow(), exp(), expm1(), log(), log10(), log1p(), log2(); // Exponential and logarithmic functions.
floor(), ceil(); // Returns the largest/smallest integer less/greater than or equal to an argument.
min(), max(); // Returns the minimum or maximum (respectively) value of a comma separated list of numbers as arguments.
random(); // Returns a random number between 0 and 1.
round(), fround(), trunc(), sqrt(), cbrt(), hypot(); // Rounding and truncation functions.
sqrt(), cbrt(), hypot(); // Square root, cube root, Square root of the sum of square arguments.
sign(); // The sign of a number, indicating whether the number is positive, negative or zero.
clz32(), imul(); // Number of leading zero bits in the 32-bit binary representation. The result of the C-like 32-bit multiplication of the two arguments.

/*
Date object
*/
function JSClock() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    let temp = String(hour % 12);
    if (temp === "0") {
        temp = "12";
    }
    temp += (minute < 10 ? ":0" : ":") + minute;
    temp += (second < 10 ? ":0" : ":") + second;
    temp += hour >= 12 ? " P.M." : " A.M.";
    return temp;
}

JSClock();

// Date and time formatting
// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

// Local timezone vary depending on your settings
// In CEST, logs: 07/17/14, 02:00 AM GMT+2
// In PDT, logs: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));
