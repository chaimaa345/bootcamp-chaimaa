# Ask the user for 3 numbers one by one
num1 = float(input("Input the 1st number: "))
num2 = float(input("Input the 2nd number: "))
num3 = float(input("Input the 3rd number: "))

# Find the greatest number using max()
greatest = max(num1, num2, num3)

# Print the greatest number
print(f"The greatest number is: {greatest}")
