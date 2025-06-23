import random

# --- Gene ---
class Gene:
    def __init__(self, value=None):
        self.value = value if value in [0, 1] else random.choice([0, 1])

    def mutate(self):
        self.value = 1 - self.value  # Flip 0 to 1 or 1 to 0

    def __repr__(self):
        return str(self.value)


# --- Chromosome ---
class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]  # 10 genes

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:  # 50% chance to mutate each gene
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __repr__(self):
        return ''.join(str(gene) for gene in self.genes)


# --- DNA ---
class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]  # 10 chromosomes

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(chromo.is_all_ones() for chromo in self.chromosomes)

    def __repr__(self):
        return '\n'.join(str(chromo) for chromo in self.chromosomes)


# --- Organism ---
class Organism:
    def __init__(self, environment_probability=0.2):
        self.dna = DNA()
        self.environment = environment_probability  # Probability DNA mutates per generation

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

    def has_perfect_dna(self):
        return self.dna.is_all_ones()

    def __repr__(self):
        return str(self.dna)

def test_evolution():
    organisms = [Organism(environment_probability=0.3) for _ in range(10)]
    generations = 0

    while True:
        generations += 1
        for organism in organisms:
            organism.mutate()
            if organism.has_perfect_dna():
                print("🎉 Perfect DNA found!")
                print(f"🧬 Generations needed: {generations}")
                print("🧬 Final DNA:")
                print(organism)
                return

# Run the test
test_evolution()
def test_evolution():
    organisms = [Organism(environment_probability=0.3) for _ in range(10)]
    generations = 0

    while True:
        generations += 1
        for organism in organisms:
            organism.mutate()
            if organism.has_perfect_dna():
                print("🎉 Perfect DNA found!")
                print(f"🧬 Generations needed: {generations}")
                print("🧬 Final DNA:")
                print(organism)
                return

# Run the test
test_evolution()

