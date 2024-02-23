// A module can have multiple named exports.
// Named exports are useful when you want to export several values or functions from a module.
// When importing a named export, you need to use the exact name specified in the module.
// Use named exports when you have multiple functionalities or when you want consumers to be able to pick and choose which parts of your module they want to import.
import { Student } from "./functions.js";

console.log(Student);
