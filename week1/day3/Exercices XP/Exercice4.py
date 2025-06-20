class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()  # Sort alphabetically
        self.grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = []
            self.grouped_animals[first_letter].append(animal)

    def get_groups(self):
        print("Animal Groups:")
        for letter, group in self.grouped_animals.items():
            print(f"{letter}: {group}")
ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Lion")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Bear")

ramat_gan_safari.get_animals()

ramat_gan_safari.sort_animals()
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()
