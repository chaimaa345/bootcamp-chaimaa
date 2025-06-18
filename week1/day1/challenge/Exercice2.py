# Ask the user for a word
word = input("Enter a word: ")

# Initialize the result string
result = ""

# Loop through each character and build the new word
for i in range(len(word)):
    # Add the first character or if current char is different from the previous one
    if i == 0 or word[i] != word[i - 1]:
        result += word[i]

# Print the cleaned-up word
print("Cleaned word:", result)

