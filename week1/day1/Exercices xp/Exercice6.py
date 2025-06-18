my_tuple = (1, 2, 3)

# Trying to add more integers directly to the tuple will cause an error
# For example, this won't work:
# my_tuple.append(4)  # AttributeError: 'tuple' object has no attribute 'append'

# Why? Because tuples are immutable — you cannot modify them after creation.

# But you can create a new tuple by concatenation:
new_tuple = my_tuple + (4, 5)

print("Original tuple:", my_tuple)
print("New tuple after adding more integers:", new_tuple)