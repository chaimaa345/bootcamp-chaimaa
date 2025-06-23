import random

# We assume the Dog class is already defined as before.
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}"

# Step 2: Create PetDog class
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)  # Reuse Dog constructor
        self.trained = False  # New attribute

    def train(self):
        print(self.bark())  # Use Dog's bark method
        self.trained = True  # Mark the dog as trained

    def play(self, *args):
        dog_names = [self.name] + list(args)
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
# Create PetDog instances
dog1 = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 3, 15)
dog3 = PetDog("Max", 4, 20)

# Test train()
dog1.train()  # Fido is barking → trained becomes True

# Test play()
dog1.play(dog2.name, dog3.name)  
# Output: "Fido, Buddy, Max all play together"

# Test do_a_trick()
dog1.do_a_trick()  # Only works if trained is True (prints one random trick)
dog2.do_a_trick()  # Buddy is not trained → nothing happens