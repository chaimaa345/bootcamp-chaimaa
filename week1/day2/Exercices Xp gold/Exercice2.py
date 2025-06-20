numbers = list(range(1, 21))

# Part 1: Print all numbers from 1 to 20
print("All numbers from 1 to 20:")
for number in numbers:
    print(number)

print("\nNumbers with even index:")
# Part 2: Print numbers where the index is even
for index in range(len(numbers)):
    if index % 2 == 0:
        print(numbers[index])