import time
import os
import copy

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = self.create_empty_grid()

        if initial_state:
            for x, y in initial_state:
                self.grid[x][y] = 1

    def create_empty_grid(self):
        return [[0 for _ in range(self.cols)] for _ in range(self.rows)]

    def display(self):
        os.system("cls" if os.name == "nt" else "clear")
        for row in self.grid:
            print("".join(["⬛" if cell else "⬜" for cell in row]))
        print()

    def get_neighbour_count(self, x, y):
        directions = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),         (0, 1),
            (1, -1), (1, 0), (1, 1)
        ]
        count = 0
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if (0 <= nx < self.rows) and (0 <= ny < self.cols):
                count += self.grid[nx][ny]
        return count

    def next_generation(self):
        new_grid = copy.deepcopy(self.grid)

        for x in range(self.rows):
            for y in range(self.cols):
                neighbors = self.get_neighbour_count(x, y)
                if self.grid[x][y] == 1:
                    if neighbors < 2 or neighbors > 3:
                        new_grid[x][y] = 0  # Die
                else:
                    if neighbors == 3:
                        new_grid[x][y] = 1  # Become alive

        self.grid = new_grid

    def run(self, generations=10, delay=0.5):
        for _ in range(generations):
            self.display()
            self.next_generation()
            time.sleep(delay)
# Define initial "blinker" pattern (vertical line that toggles to horizontal)
blinker = [
    (5, 4),
    (5, 5),
    (5, 6),
]

game = GameOfLife(rows=15, cols=15, initial_state=blinker)
game.run(generations=20, delay=0.3)
