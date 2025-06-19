matrix = [
    ['7','i','i'],
    ['T','s','x'],
    ['h','%','?'],
    ['i',' ','#'],
    ['s','M',' '],
    ['$','a',' '],
    ['#','t','%'],
    ['^','r','!']
]

# Step 1: Read column by column
raw_message = ""
columns = len(matrix[0])
rows = len(matrix)

for col in range(columns):
    for row in range(rows):
        raw_message += matrix[row][col]

# Step 2: Clean the message manually (only letters allowed)
clean_message = ""
i = 0
length = len(raw_message)

while i < length:
    char = raw_message[i]

    if char.isalpha():  # ✅ Only letters (no numbers)
        clean_message += char
        i += 1
    else:
        # Check if it's a symbol between two letters
        if i > 0 and i < length - 1 and raw_message[i-1].isalpha():
            while i < length and not raw_message[i].isalpha():
                i += 1
            if i < length and raw_message[i].isalpha():
                clean_message += " "
        else:
            i += 1

# Step 3: Show final message
print(clean_message)

