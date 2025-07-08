// 🌟 Exercise 1 : Scope

// --- #1 ---
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3; // we are reassigning a within the same function scope
    }
    alert(`inside the funcOne function ${a}`); // Output: 3
}
funcOne();

// #1.2 What will happen if the variable is declared with const instead of let?
// If we use const, reassigning a = 3 will throw an error:
// const a = 5;
// a = 3; // ❌ TypeError: Assignment to constant variable



// --- #2 ---
let a = 0; // global variable

function funcTwo() {
    a = 5; // modifies the global variable
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree();  // Output: "inside the funcThree function 0"
funcTwo();   // changes a to 5
funcThree(); // Output: "inside the funcThree function 5"

// #2.2 What will happen if the variable is declared with const instead of let?
// const a = 0;
// a = 5; // ❌ TypeError: Assignment to constant variable



// --- #3 ---
function funcFour() {
    window.a = "hello"; // attaches a to the global window object
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour();
funcFive();  // Output: "inside the funcFive function hello"



// --- #4 ---
let a4 = 1;

function funcSix() {
    let a4 = "test"; // local variable, shadows outer a4
    alert(`inside the funcSix function ${a4}`); // Output: test
}

funcSix();// Output: "inside the funcSix function test"

// #4.2 What will happen if the variable is declared with const instead of let?
// If const is used instead of let, it still works since we're not reassigning
// const a4 = "test"; // ✅ Still works



// --- #5 ---
let a5 = 2;

if (true) {
    let a5 = 5; // block-scoped variable
    alert(`in the if block ${a5}`); // Output: 5
}

alert(`outside of the if block ${a5}`); // Output: 2

// #5.2 What will happen if the variable is declared with const instead of let?
// Same behavior — works fine since we’re not reassigning
// const a5 = 5; // ✅ Still works
