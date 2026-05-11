const BASE_URL = "https://www.google.com";
//BASE_URL = "https://www.google.com/search";
// TypeError: Assignment to constant variable.

let name = "pending";
name = "done";
console.log(name);  // done
{
    let name = "not pending";
    console.log(name);  // not pending
}

function say() {
    let name = "function scope";
    console.log(name); // function scope
}
say();