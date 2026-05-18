//condition ? valueIfTrue : valueIfFalse

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);  //adult

age = 15;
result = age >= 18 ? "Adult" : "Minor";
console.log(result);  // minor

let num = 7;

console.log(num % 2 === 0 ? "Even" : "Odd"); // odd

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "PASS" : "FAIL";
console.log(testResult);  // PASS

let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);  // https://staging-api.example.com

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode"); // Launching browser in: headless mode

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(`Response: ${responseTime}ms — ${slaStatus}`); // Response: 850ms — Within SLA


//  Nested Ternary

// Multiple Condition

let is_age = 30;
let is_married = is_age > 18 ? (is_age > 26 ? "Married" : "Not Married") : "Not Eligible";
console.log(is_married);   //  Married

/// --------------------

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);    // Status 404: Client Error


// ---- 


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel); // 7. Temperature: 35 | Feel: Hot