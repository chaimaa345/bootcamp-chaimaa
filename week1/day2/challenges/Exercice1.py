# Ask the user for a word
word = input("Enter a word: ")

# Create an empty dictionary to store letter positions
letter_positions = {}

# Iterate over the word using index
for index, letter in enumerate(word):
    if letter in letter_positions:
        # Append the index to the list if the letter is already in the dictionary
        letter_positions[letter].append(index)
    else:
        # Create a new entry with the letter as key and the index in a list
        letter_positions[letter] = [index]

# Print the resulting dictionary
print(letter_positions)
