from menu_item import MenuItem

item = MenuItem('Tacos', 45)
item.save()

item.update('Maxi Tacos', 55)

item.delete()

