class MenuManager:
  def __init__(self):
      self.menu = [
          {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
          {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
          {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
          {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
          {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
      ]

  def add_item(self, name, price, spice, gluten):
      new_dish = {"name": name, "price": price, "spice": spice, "gluten": gluten}
      self.menu.append(new_dish)
      print(f"{name} has been added to the menu.")

  def update_item(self, name, price, spice, gluten):
      for dish in self.menu:
          if dish["name"].lower() == name.lower():
              dish["price"] = price
              dish["spice"] = spice
              dish["gluten"] = gluten
              print(f"{name} has been updated.")
              return
      print(f"{name} not found in the menu.")

  def remove_item(self, name):
      for dish in self.menu:
          if dish["name"].lower() == name.lower():
              self.menu.remove(dish)
              print(f"{name} has been removed from the menu.")
              return
      print(f"{name} not found in the menu.")


manager = MenuManager()

manager.add_item("Pizza", 12, "C", True)
manager.update_item("Soup", 11, "A", False)
manager.remove_item("Salad")