"use strict";
//Create variables to store
let StoreName = "ElectroShop";
let StoreDescription = "Your go-to destination for the latest everyday electronics—from high-performance laptops and smart TVs to smartphones, tablets, and premium audio gear, backed by competitive prices and reliable customer support.";
let Currency = "JD";
let NumberOfAvailableProducts = 5;
let IsOpen = true;
//Part 3: Arrays and Multi-Type Arrays
//1. Create an array containing the names of at least five electronic products.
let productNames = ["Tablet", "Headphones", "Smartphone", "TV", "Laptop"];
let Products = [
    { name: productNames[0], price: 150, availability: true },
    { name: productNames[1], price: 20, availability: true },
    { name: productNames[2], price: 350, availability: false },
    { name: productNames[3], price: 400, availability: true },
    { name: productNames[4], price: 600, availability: true }
];
//Part 4: Conditional Statements and Loops
//1. Check whether the store is open or closed and display an appropriate message.
if (IsOpen == true) {
    console.log("We are Open! Welcome to ElectroShop");
}
else
    console.log("Currently Closed.");
//2. Check a product price:
if (Products[0].price > 500) {
    console.log("Expensive Product");
}
else if (Products[0].price > 100 && Products[0].price <= 500) {
    console.log("Medium Price");
}
else
    console.log("Affordable Product");
//3. Use a loop to display all product names stored in your products array.
productNames.forEach(e => console.log(e));
//4. Count how many products have a price greater than 100.
let priceGreater = Products.filter(e => e.price > 100);
//3. Day 2 – Functions and Product Management
//Part 5: Function Parameters and Return Types
//1. calculateDiscount
function calculateDiscount(originalprice, discountPercentage) {
    const discountAmount = (originalprice * discountPercentage) / 100;
    return originalprice - discountAmount;
}
console.log(calculateDiscount(200, 5));
//2. checkProductAvailability
function checkProductAvailability(quantity) {
    if (quantity > 0)
        console.log("In Stock ");
    else
        console.log("Out of Stock ");
}
checkProductAvailability(0);
//3. displayStoreMessage
function displayStoreMessage(message) {
    console.log(message);
}
displayStoreMessage("Welcome to the shop");
// Part 6: Optional and Default Parameters
function displayProductInfo(name, price, Currency = "USD", description) {
    console.log(`the product name :${name}`);
    console.log(`price: ${price}`);
    if (description != null)
        console.log(`description :${description}`);
    console.log(`Currency:${Currency}`);
}
displayProductInfo("tv", 600, "JO");
//Part 7: Rest Parameters
function calculateTotalPrice(...productPrices) {
    let total = 0;
    productPrices.forEach(e => total += e);
    return total;
}
console.log(calculateTotalPrice(100, 200, 300));
let electronicProducts = [
    { name: "Laptop", description: "Core i5, 8GB RAM", price: 650 },
    { name: "Headphones", description: "Wireless Bluetooth headphones", price: 75 },
    { name: "Keyboard", description: "Mechanical gaming keyboard", price: 45 }
];
let container = document.getElementById("container");
let btn = document.getElementById("btn");
function load() {
    if (container) {
        container.innerHTML = "";
        for (let product of electronicProducts) {
            container.innerHTML += `
   <tr scope="row">
   <td>${product.name}</td>
   <td>${product.description}</td>
   <td>${product.price}</td>
   </tr>`;
        }
    }
}
btn?.addEventListener("click", load);
