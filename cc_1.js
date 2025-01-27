// Task 1: Variable //
let employeeName = "Malcartier";
const employeeID = 1234;
var isActive = true;

console.log(employeeName);  // Malcartier
console.log(typeof employeeName);  
console.log(employeeID);    
console.log(typeof employeeID);    
console.log(isActive);      
console.log(typeof isActive);     


// Task 2: Primitive Data Types //
let productName = 'HMDD Hoodie'
const productPrice = 160.00;
var isAvailable = true;

console.log(productName); // HMDD Hoodie
console.log(typeof productName); // string
console.log(productPrice); // 160.00
console.log(typeof productPrice); // number
console.log(isAvailable); // true
console.log(typeof isAvailable); // boolean

// Task 3: Number Data Type //
let accountBalance = 3000;

accountBalance += 500;
console.log(accountBalance); // 3500

accountBalance -= 500;
console.log(accountBalance); // 3000

accountBalance *= 1.05;
console.log(accountBalance); // 3150

accountBalance /= 2;
console.log(accountBalance) // 1575


// Task 4: String Data Type // 
let customerName = "Saquon Barkley";

let welcomeMessage = 'Welcome back' + customerName

console.log(welcomeMessage); // Welcome back Saquon Barkley

// Task 5: String Data Type //
let isLoggedIn =true
let hasAccess = isLoggedIn && true;

if (hasAccess) {
    console.log("Access has been granted.")
} else {
    console.log("Access has been denied.");
}


