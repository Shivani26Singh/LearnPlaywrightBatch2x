//Post-increment

let a = 5;

console.log(a++); // 5 // first print a, then increment a
console.log(a);   // 6  // a is now 6

// /Pre-increment

let a = 5;

console.log(++a); // 6  // first increment a, then print a
console.log(a);   // 6  //  a is still 6

//Post-decrement
let b = 5;

console.log(b--); // 5  // first print b, then decrement b
console.log(b);   // 4  // b is now 4

//Pre-decrement
let b = 5;

console.log(--b); // 4  // first decrement b, then print b
console.log(b);   // 4  // b is still 4

let x = 10;
console.log(x++ + ++x);  // 10 + 12 = 22

// Pre Increment
let a = 10;
let b = ++a; // (increment the a by 1)

// Pre increment -> ++a ->. increse the value and then assign.
console.log(b);  // 11
console.log(a); //  11

// Post Increment
let a = 10;
let b = a++; // (increment the a by 1)
// Post increment -> a++ ->. assign the value and then increase.
console.log(b);  // 10
console.log(a);  // 11

// Decrement
let a = 10;
let b = --a; // (decrement the a by 1)
console.log(b); // 9
console.log(a);  // 9

let a = 10;
let b = a--; // (decrement the a by 1)
console.log(b); // 10
console.log(a);  // 9