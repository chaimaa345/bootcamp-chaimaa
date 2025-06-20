class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        output = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            output += f"{animal} : {count}\n"
        output += "\n    E-I-E-I-0!"
        return output

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_list = self.get_animal_types()
        sentence_parts = []

        for animal in animal_list:
            name = animal
            if self.animals[animal] > 1:
                if not name.endswith('s'):
                    name += 's'
            sentence_parts.append(name)

        if len(sentence_parts) == 1:
            animal_str = sentence_parts[0]
        elif len(sentence_parts) == 2:
            animal_str = f"{sentence_parts[0]} and {sentence_parts[1]}"
        else:
            animal_str = ", ".join(sentence_parts[:-1]) + f" and {sentence_parts[-1]}"

        return f"{self.name}'s farm has {animal_str}."


# Test the code
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print()
print(macdonald.get_short_info())