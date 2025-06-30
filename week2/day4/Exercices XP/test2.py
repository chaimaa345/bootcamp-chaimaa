print("Testing started...")

# Example test
from menu_manager import MenuManager

item = MenuManager.get_by_name("Burger")
if item:
    print(f"Found: {item.name} - {item.price} MAD")
else:
    print("Item not found.")

all_items = MenuManager.all_items()
for item in all_items:
    print(f"{item.name}: {item.price} MAD")

