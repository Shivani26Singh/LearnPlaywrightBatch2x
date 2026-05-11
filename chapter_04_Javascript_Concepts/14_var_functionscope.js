var a = 10; // Global Scope
console.log(a); // 10
// Defination of the function
function printHello() {
    console.log("Hello!");
    var a = 20; // Local Scope
    console.log(a); // 20  
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);  //F -> 30
}

console.log("G ->", a);    //G -> 10

printHello();