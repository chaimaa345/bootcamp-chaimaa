import re

paragraph = "Effective communication is essential in every professional environment this is the reality."

# Total characters
total_characters = len(paragraph)

# Sentence count using regex to split by sentence-ending punctuation
sentences = re.split(r'[.!?]', paragraph)
sentence_count = len([s for s in sentences if s.strip()])

# Word list and count
words = re.findall(r'\b\w+\b', paragraph)
word_count = len(words)

# Unique words (case-insensitive)
clean_words = [word.lower() for word in words]
unique_words = set(clean_words)
unique_word_count = len(unique_words)

# Non-whitespace characters
non_whitespace_characters = len(paragraph.replace(" ", ""))

# Average words per sentence
avg_words_per_sentence = word_count / sentence_count if sentence_count else 0

# Non-unique word count
non_unique_word_count = word_count - unique_word_count

# Output
print("Characters:", total_characters)
print("Non-whitespace characters:", non_whitespace_characters)
print("Sentences:", sentence_count)
print("Words:", word_count)
print("Unique words:", unique_word_count)
print("Non-unique words:", non_unique_word_count)
print("Average words per sentence:", round(avg_words_per_sentence, 2))

