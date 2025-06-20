# Step 1: Create a dictionary of birthdays
birthdays = {
    "Alice": "1990/05/12",
    "Bob": "1985/11/23",
    "Charlie": "1992/07/01",
    "Diana": "1998/03/15",
    "Elias": "2000/09/09"
}

# Step 2: Welcome message
print("🎉 Welcome to the Birthday Look-up App! 🎉")
print("You can look up the birthdays of the people in the list!\n")

# Step 3: Ask for a name
name = input("Enter a person's name: ")

# Step 4: Look up the birthday and respond
if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    print(f"Sorry, we don't have {name}'s birthday in the list.")
