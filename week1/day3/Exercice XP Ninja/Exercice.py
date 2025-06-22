class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_info = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_info)
        self.call_history.append(call_info)

    def show_call_history(self):
        print("Call History:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        print("Incoming Messages:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, other_phone):
        print(f"Messages from {other_phone.phone_number}:")
        for msg in self.messages:
            if msg["from"] == other_phone.phone_number:
                print(msg)
# Create phone instances
alice = Phone("123-456")
bob = Phone("789-012")

# Make calls
alice.call(bob)
bob.call(alice)

# Show call history
alice.show_call_history()
bob.show_call_history()

# Send messages
alice.send_message(bob, "Hi Bob, it's Alice!")
bob.send_message(alice, "Hey Alice, how are you?")
alice.send_message(bob, "I'm good! Let's catch up later.")

# Show messages
alice.show_outgoing_messages()
alice.show_incoming_messages()
bob.show_outgoing_messages()
bob.show_incoming_messages()

# Show messages from a specific contact
alice.show_messages_from(bob)
