import math

# Step 1: Define the Pagination class
class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError(f"Invalid page number: {page_num}. Must be between 1 and {self.total_pages}")
        self.current_idx = page_num - 1

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        return "\n".join(self.get_visible_items())


# Step 2: Use the Pagination class
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print("Page 1:", p.get_visible_items())
p.next_page()
print("Page 2:", p.get_visible_items())
p.last_page()
print("Last Page:", p.get_visible_items())

try:
    p.go_to_page(10)
except ValueError as e:
    print("❗ Error:", e)
