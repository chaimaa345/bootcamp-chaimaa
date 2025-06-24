import random

class Game:
    def get_user_item(self):
        options = {
            "1": "rock",
            "2": "paper",
            "3": "scissors"
        }

        while True:
            print("\nChoose your move:")
            for key, value in options.items():
                print(f"{key}) {value.capitalize()}")

            choice = input("Enter the number of your choice: ")

            if choice in options:
                return options[choice]
            else:
                print("Invalid choice. Please select 1, 2, or 3.")

    def get_computer_item(self):
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "scissors" and computer_item == "paper") or \
             (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"

    def play(self):
        user = self.get_user_item()
        computer = self.get_computer_item()
        result = self.get_game_result(user, computer)

        print(f"\nYou selected {user}. The computer selected {computer}.")
        if result == "win":
            print("You win!")
        elif result == "loss":
            print("You lose.")
        else:
            print("It's a draw.")

        return result
