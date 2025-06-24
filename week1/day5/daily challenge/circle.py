import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius {self.radius:.2f}"

    def __repr__(self):
        return f"Circle({self.radius})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

    def __le__(self, other):
        if isinstance(other, Circle):
            return self.radius <= other.radius
        return NotImplemented

    def __ge__(self, other):
        if isinstance(other, Circle):
            return self.radius >= other.radius
        return NotImplemented
c1 = Circle(3)
c2 = Circle(4)
c3 = Circle(3)

print(c1)                        # Circle with radius 3.00
print("Diameter:", c1.diameter) # 6
print("Area:", c1.area)         # ~28.27

c1.diameter = 10
print("New radius:", c1.radius)  # 5.0

c4 = c1 + c2
print(c4)                        # Circle with radius 9.00

print(c1 == c3)  # False
print(c2 > c1)   # False
print(c1 < c2)   # True

circles = [c2, c1, c4, c3]
circles.sort()
print(circles)  # [Circle(3), Circle(4), Circle(5.0), Circle(9.0)]