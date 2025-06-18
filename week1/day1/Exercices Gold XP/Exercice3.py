# Define your name with proper casing
my_name = "Chaimaa"

# Keep asking until the correct name is entered (case-insensitive)
user_input = ""

while user_input.lower() != my_name.lower():
    user_input = input("Enter your name: ")

print("Correct! That's my name.")
