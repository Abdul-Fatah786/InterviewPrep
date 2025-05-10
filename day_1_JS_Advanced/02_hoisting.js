sayHello(); // ✅ Works! Output: Hello!

function sayHello() {
    console.log("Hello!");
}

sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};


console.log(x); // ✅ Output: undefined
var x = 5;


var x;       // hoisted
console.log(x); // undefined
x = 5;



console.log(y); // ❌ ReferenceError
let y = 10;

console.log(z); // ❌ ReferenceError
const z = 20;



{
    console.log(a); // ✅ undefined (because 'var' is hoisted)
    var a = 10;
}

{
    console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
    let b = 20;
}
