
# Initialize an empty list to store toppings
toppings = []

print("Welcome to the Pizza Toppings Bot!")
print("Type 'quit' when you are done.\n")

# Loop to collect toppings
while True:
    topping = input("Enter a topping: ")
    if topping.lower() == 'quit':
        break
    print(f"Adding {topping} to your pizza.")
    toppings.append(topping)

# Calculate the total cost
base_price = 10.00
topping_price = 2.50
total_cost = base_price + (len(toppings) * topping_price)

# Print summary
print("\nYour pizza will have the following toppings:")
for t in toppings:
    print(f"- {t}")

print(f"\nTotal cost: ${total_cost:.2f}")