import random

# Track wins and losses
wins = 0
losses = 0

print("🎲 Welcome to the Number Guessing Game! 🎲")

while True:
    user_input = input("Enter a number between 1 and 9 (or type 'quit' to exit): ")

    # Exit condition
    if user_input.lower() == 'quit':
        break

    # Validate input
    if not user_input.isdigit():
        print("❌ Invalid input. Please enter a number between 1 and 9.")
        continue

    user_number = int(user_input)

    if user_number < 1 or user_number > 9:
        print("❌ Please enter a number within the range 1 to 9.")
        continue

    # Generate random number
    random_number = random.randint(1, 9)

    # Compare and give feedback
    if user_number == random_number:
        print("✅ Winner! 🎉")
        wins += 1
    else:
        print(f"❌ Better luck next time. The correct number was {random_number}.")
        losses += 1

# Print game summary
print("\n📊 Game Summary:")
print(f"🏆 Wins: {wins}")
print(f"💔 Losses: {losses}")
print("Thanks for playing!")
