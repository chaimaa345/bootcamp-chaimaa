// shop.js

// Import products from products.js
const products = require('./Exercice1Product');

// Function to search for a product by name
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

  if (product) {
    console.log("✅ Product found:");
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`❌ Product "${productName}" not found.`);
  }
}

// Test the function with different product names
findProductByName("Laptop");
findProductByName("T-shirt");
findProductByName("Blender"); // Not in the list
