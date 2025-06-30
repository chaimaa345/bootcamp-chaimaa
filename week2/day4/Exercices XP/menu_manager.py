import psycopg2
from menu_item import MenuItem

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        connection = None
        cursor = None
        try:
            connection = psycopg2.connect(
                dbname="resto",
                user="postgres",
                password="1234",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()
            query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s;"
            cursor.execute(query, (name,))
            result = cursor.fetchone()

            if result:
                item_name, item_price = result
                return MenuItem(item_name, item_price)
            else:
                return None

        except Exception as e:
            print("Error fetching item by name:", e)
            return None

        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

    @classmethod
    def all_items(cls):
        connection = None
        cursor = None
        items = []
        try:
            connection = psycopg2.connect(
                dbname="resto",
                user="postgres",
                password="1234",
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()
            query = "SELECT item_name, item_price FROM Menu_Items;"
            cursor.execute(query)
            results = cursor.fetchall()

            for item_name, item_price in results:
                items.append(MenuItem(item_name, item_price))

            return items

        except Exception as e:
            print("Error fetching all items:", e)
            return []

        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()
