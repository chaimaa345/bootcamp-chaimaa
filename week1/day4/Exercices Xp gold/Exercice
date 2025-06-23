class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance
        self.username = None
        self.password = None
        self.authenticated = False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Deposit amount must be positive")
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print("Login successful")
        else:
            print("Login failed")
            raise Exception("Invalid username or password")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0):
        super().__init__(balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Insufficient balance. Cannot go below minimum balance.")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")


class ATM:
    def __init__(self, account_list, try_limit=2):
        if not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("All accounts must be instances of BankAccount or its subclasses")
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit. Defaulting to 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n=== ATM Menu ===")
            print("1. Log in")
            print("2. Exit")
            choice = input("Choose an option: ")

            if choice == "1":
                username = input("Username: ")
                password = input("Password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting ATM. Goodbye!")
                break
            else:
                print("Invalid choice. Try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            try:
                account.authenticate(username, password)
                self.show_account_menu(account)
                return
            except:
                continue

        self.current_tries += 1
        print(f"Login failed. Attempt {self.current_tries}/{self.try_limit}")
        if self.current_tries >= self.try_limit:
            print("Too many failed attempts. Shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\n--- Account Menu ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Logout")
            choice = input("Choose an option: ")

            if choice == "1":
                try:
                    amount = int(input("Enter amount to deposit: "))
                    account.deposit(amount)
                except Exception as e:
                    print("Error:", e)

            elif choice == "2":
                try:
                    amount = int(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                except Exception as e:
                    print("Error:", e)

            elif choice == "3":
                print("Logging out...")
                account.authenticated = False
                break
            else:
                print("Invalid choice. Try again.")
# Sample accounts
acc1 = BankAccount(100)
acc1.username = "chaimaa"
acc1.password = "1234"

acc2 = MinimumBalanceAccount(200, 50)
acc2.username = "hasna"
acc2.password = "abcd"

# Start ATM
atm = ATM([acc1, acc2], try_limit=3)
