const menu = [
  { type: "starter", name: "Houmous with Pita" },
  { type: "starter", name: "Vegetable Soup with Houmous peas" },
  { type: "dessert", name: "Chocolate Cake" }
];

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

// 1. Check for at least one dessert
const hasDessert = menu.some(item => item.type === "dessert");
console.log(hasDessert ? "At least one dessert is on the menu." : "No dessert found.");

// 2. Check if all items are starters
const allStarters = menu.every(item => item.type === "starter");
console.log("All items are starters:", allStarters);

// 3. Add a main course if missing
const hasMain = menu.some(item => item.type === "main");
if (!hasMain) {
  menu.push({
    type: "main",
    name: "Grilled Potatoes with Eggs"
  });
}

// 4. Add vegetarian property
menu.forEach(item => {
  const lowerName = item.name.toLowerCase();
  const isVegetarian = vegetarian.some(vegWord => lowerName.includes(vegWord));
  item.vegetarian = isVegetarian;
});

console.log(menu);
