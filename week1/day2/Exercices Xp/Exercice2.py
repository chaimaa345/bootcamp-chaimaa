family = {}
total_cost = 0

print("Enter family member names and ages. Type 'done' to finish.")

while True:
    name = input("Enter name: ").strip()
    if name.lower() == "done":
        break
    age_input = input(f"Enter age for {name}: ")
    if not age_input.isdigit():
        print("Please enter a valid number for age.")
        continue
    age = int(age_input)
    family[name] = age

print("\nTicket prices:")
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    print(f"{name.capitalize()}'s ticket price: ${price}")
    total_cost += price

print(f"\nTotal cost for the family: ${total_cost}")