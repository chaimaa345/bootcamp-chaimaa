import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def definition(self):
        print("A circle is a shape with all points at the same distance from its center.")

# Example of usage
c1 = Circle(3)

print("Radius:", c1.radius)
print("Perimeter:", c1.perimeter())
print("Area:", c1.area())
c1.definition()