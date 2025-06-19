# Step 1: Import the random module
import random

# Step 2: Define the function
def guess_random_number(user_number):
    # Optional: Validate that number is within the correct range
    if not 1 <= user_number <= 100:
        print("Please enter a number between 1 and 100.")
        return

    # Step 3: Generate a random number between 1 and 100
    random_number = random.randint(1, 100)

    # Step 4: Compare the numbers
    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

# Step 5: Call the function with a number between 1 and 100
guess_random_number(50)  # You can test with other numbers too
