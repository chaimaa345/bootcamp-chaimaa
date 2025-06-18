for i in range(1, 21):
    print(i)
# Create a list of numbers from 1 to 20
numbers = list(range(1, 21))

# Loop through using index and check if the index is even
for index in range(len(numbers)):
    if index % 2 == 0:
        print(numbers[index])
