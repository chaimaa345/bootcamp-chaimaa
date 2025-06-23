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

# Step 2: Create dog instances
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Luna", 4, 18)

# Step 3: Test methods
print(dog1.bark())
print(f"{dog2.name}'s speed: {dog2.run_speed():.2f}")
print(dog1.fight(dog2))
print(dog3.fight(dog1))
