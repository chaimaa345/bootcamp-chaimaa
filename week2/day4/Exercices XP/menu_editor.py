from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n🍽️ Restaurant Menu Manager")
        print("[V] View an Item")
        print("[A] Add an Item")
        print("[D] Delete an Item")
        print("[U] Update an Item")
        print("[S] Show the Full Menu")
        print("[X] Exit")
        choice = input("Choose an option: ").strip().upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'X':
            print("\n👋 Exiting. Here is the final menu:")
            show_restaurant_menu()
            break
        else:
            print("❌ Invalid choice. Please try again.")

def add_item_to_menu():
    name = input("Enter the name of the new item: ").strip()
    try:
        price = int(input("Enter the price of the new item: "))
        item = MenuItem(name, price)
        item.save()
        print("✅ Item was added successfully.")
    except ValueError:
        print("❌ Invalid price. Please enter a number.")

def remove_item_from_menu():
    name = input("Enter the name of the item to delete: ").strip()
    item = MenuItem(name, 0)  # price not needed for deletion
    try:
        item.delete()
        print("✅ Item was deleted successfully.")
    except Exception as e:
        print("❌ Error deleting item:", e)

def update_item_from_menu():
    current_name = input("Enter the name of the item to update: ").strip()
    item = MenuManager.get_by_name(current_name)
    if not item:
        print("❌ Item not found.")
        return

    new_name = input("Enter the new name: ").strip()
    try:
        new_price = int(input("Enter the new price: "))
        item.update(new_name, new_price)
        print("✅ Item was updated successfully.")
    except ValueError:
        print("❌ Invalid price. Please enter a number.")
    except Exception as e:
        print("❌ Error updating item:", e)

def view_item():
    name = input("Enter the item name to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"✅ Found item: {item.name} - {item.price} MAD")
    else:
        print("❌ Item not found.")

def show_restaurant_menu():
    print("\n📋 Restaurant Menu:")
    items = MenuManager.all_items()
    if not items:
        print("The menu is empty.")
    for item in items:
        print(f"- {item.name}: {item.price} MAD")

# Entry point
if __name__ == "__main__":
    show_user_menu()
