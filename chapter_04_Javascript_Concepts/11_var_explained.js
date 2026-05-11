var a = 10;// Global SCOPE
// var is function scoped
console.log(a);

function printHello() {
    console.log("Hello!");
    var a = 20; // 20
    console.log(a);
    if (true) {
        console.log(a);  //20
        var a = 30;
        console.log(a); // 30
    }

}

printHello();

var a = 50;
console.log(a);