for i in range(1, 21):
    print(i)

# Create a list of numbers from 1 to 20
numbers = list(range(1, 21))


for index, value in enumerate(numbers):
    if index % 2 == 0:
        print(value)