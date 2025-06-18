# Initial list of sandwich orders
sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich",
    "Pastrami sandwich"
]

# The deli has run out of pastrami
print("The deli has run out of pastrami.")

# Remove all occurrences of "Pastrami sandwich"
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# List to hold finished sandwiches
finished_sandwiches = []

# Prepare the remaining sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print(f"I made your {current_sandwich.lower()}")
    finished_sandwiches.append(current_sandwich)

# Optional: print finished_sandwiches list
# print("Finished sandwiches:", finished_sandwiches)