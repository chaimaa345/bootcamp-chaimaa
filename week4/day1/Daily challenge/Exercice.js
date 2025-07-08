let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

// ✅ Arrow function to display fruits
const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

// ✅ Arrow function to clone and modify
const cloneGroceries = () => {
  // Pass by value (primitive)
  let user = client;
  client = "Betty";

  console.log("User:", user); // Still "John" → because primitive types are copied by value
  console.log("Client:", client); // "Betty"

  // Pass by reference (objects)
  let shopping = groceries;

  // Change totalPrice
  shopping.totalPrice = "35$";

  // Change paid
  shopping.other.paid = false;

  console.log("Modified groceries object:", groceries);
};

/* Run the functions */
displayGroceries();
cloneGroceries();
