import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return list(reversed(self.letters))

    def get_sorted(self):
        return sorted(self.letters)

    def generate_random_list(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]

# Example of usage
mylist = MyList(['b', 'a', 'd', 'c'])

print("Original list:", mylist.letters)
print("Reversed list:", mylist.get_reversed())
print("Sorted list:", mylist.get_sorted())
print("Random number list:", mylist.generate_random_list())