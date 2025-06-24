# --- Challenge 1 : Sorting ---

# Input: comma separated words
input_string = input("Enter comma separated words: ")

# Split input string, strip whitespace, sort using list comprehension
sorted_words = ",".join(sorted([word.strip() for word in input_string.split(",")]))
print("Sorted words:", sorted_words)


# --- Challenge 2 : Longest Word ---

def longest_word(sentence):
    # Split the sentence into words (punctuation counts as part of the word)
    words = sentence.split()
    # Find the longest word by length
    longest = max(words, key=len)
    return longest

# Example usage:
print(longest_word("Margaret's toy is a pretty doll."))  # ➞ "Margaret's"
print(longest_word("A thing of beauty is a joy forever."))  # ➞ "forever."
print(longest_word("Forgetfulness is by all means powerless!"))  # ➞ "Forgetfulness"
print(longest_word("We admired the beauty of the sunset")) 