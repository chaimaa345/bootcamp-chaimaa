# Step 1: Define the Person class
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""  # Initialized as empty; will be set by Family

    def is_18(self):
        return self.age >= 18


# Step 2: Define the Family class
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []  # List to store Person objects

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name  # Assign the family last name
        self.members.append(new_person)        # Add to the family list

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No member found with the name {first_name}")

    def family_presentation(self):
        print(f"Family: {self.last_name}")
        print("Members:")
        for person in self.members:
            print(f"- {person.first_name} ({person.age} years old)")
# Create a family
my_family = Family("Anderson")

# Add members
my_family.born("Emily", 16)
my_family.born("Daniel", 19)
my_family.born("Sophia", 12)

# Check if members are allowed to go out
my_family.check_majority("Emily")    # Should say not allowed
my_family.check_majority("Daniel")   # Should say allowed
my_family.check_majority("Ethan")    # Should say not found

# Show family info
my_family.family_presentation()
