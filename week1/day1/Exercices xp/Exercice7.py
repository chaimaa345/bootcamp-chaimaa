# Initial list
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove "Banana"
basket.remove("Banana")

# Remove "Blueberries"
basket.remove("Blueberries")

# Add "Kiwi" to the end
basket.append("Kiwi")

# Add "Apples" to the beginning
basket.insert(0, "Apples")

# Count how many times "Apples" appear
apples_count = basket.count("Apples")
print("Apples appear", apples_count, "times")

# Empty the list
basket.clear()

# Print the final state of the list
print("Final basket:", basket)
