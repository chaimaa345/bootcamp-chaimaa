users = {
    "alice": "alice123",
    "bob": "bobpass",
    "charlie": "charliepwd"
}

logged_in = None

while True:
    action = input("\nType 'login', 'signup', or 'exit': ").lower().strip()

    if action == "exit":
        print("👋 Goodbye!")
        break

    elif action == "login":
        username = input("Enter username: ").strip()
        password = input("Enter password: ").strip()

        if username in users and users[username] == password:
            print("✅ You are now logged in.")
            logged_in = username
        else:
            print("❌ Invalid login.")
            signup_choice = input("Do you want to sign up? (yes/no): ").lower().strip()
            if signup_choice == "yes":
                while True:
                    new_username = input("Choose a new username: ").strip()
                    if new_username not in users:
                        break
                    print("❌ Username already exists. Try again.")

                new_password = input("Choose a password: ").strip()
                users[new_username] = new_password
                print(f"✅ User '{new_username}' signed up successfully.")

    elif action == "signup":
        while True:
            new_username = input("Choose a new username: ").strip()
            if new_username not in users:
                break
            print("❌ Username already exists. Try again.")

        new_password = input("Choose a password: ").strip()
        users[new_username] = new_password
        print(f"✅ User '{new_username}' signed up successfully.")

    else:
        print("❌ Invalid option.")
