# ----------- Part 1: Initial List and Basic Operations -----------

# Step 1: Starting string
car_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Step 2: Convert string to list
manufacturers = car_string.split(", ")
print("Car manufacturers list:", manufacturers)

# Step 3: Count number of manufacturers
print(f"Number of manufacturers: {len(manufacturers)}")

# Step 4: Reverse alphabetical order (Z-A)
reverse_order = sorted(manufacturers, reverse=True)
print("Manufacturers in reverse alphabetical order (Z-A):")
print(reverse_order)

# Step 5: Count manufacturers with the letter 'o'
with_o = [name for name in manufacturers if 'o' in name.lower()]
print(f"Number of manufacturers with 'o': {len(with_o)}")

# Step 6: Count manufacturers without the letter 'i'
without_i = [name for name in manufacturers if 'i' not in name.lower()]
print(f"Number of manufacturers without 'i': {len(without_i)}")

# ----------- Bonus Part 1: Handle Duplicates -----------

# List with duplicates
manufacturers_with_dupes = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# Remove duplicates while keeping order
seen = set()
unique_manufacturers = []
for m in manufacturers_with_dupes:
    if m not in seen:
        unique_manufacturers.append(m)
        seen.add(m)

# Create comma-separated string with no line breaks
csv_string = ", ".join(unique_manufacturers)
print("\nUnique manufacturers (comma-separated):")
print(csv_string)
print(f"Number of unique companies: {len(unique_manufacturers)}")

# ----------- Bonus Part 2: A-Z Sorted with Reversed Letters -----------

# Sort in ascending order and reverse each name's letters
sorted_reversed = [name[::-1] for name in sorted(unique_manufacturers)]
print("\nManufacturers A-Z with reversed names:")
print(sorted_reversed)
