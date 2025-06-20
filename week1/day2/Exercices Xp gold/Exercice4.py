names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

# Convert both input and list items to lowercase for comparison
lower_names = [name.lower() for name in names]
user_name_lower = user_name.lower()

if user_name_lower in lower_names:
    index = lower_names.index(user_name_lower)
    print(f"{names[index]} found at index {index}")
else:
    print(f"{user_name} is not in the list.")
