names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Ask the user for their name
user_name = input("Enter your name: ").strip()

# Normalize both input and list to lowercase for comparison
lower_names = [name.lower() for name in names]

if user_name.lower() in lower_names:
    first_index = lower_names.index(user_name.lower())
    print(f"{names[first_index]} is at index {first_index}.")
else:
    print(f"{user_name} is not in the list.")
