
import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        connection = None
        cursor = None
        try:
            connection = psycopg2.connect(
                dbname="resto",
                user="postgres",
                password="1234",  # ← mets ici ton mot de passe réel
                host="localhost",
                port="5432"
            )
            cursor = connection.cursor()
            query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s);"
            cursor.execute(query, (self.name, self.price))
            connection.commit()
            print(f"{self.name} saved successfully.")
        except Exception as e:
            print("Error saving item:", e)
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

    def delete(self):
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
            query = "DELETE FROM Menu_Items WHERE item_name = %s;"
            cursor.execute(query, (self.name,))
            connection.commit()
            print(f"{self.name} deleted successfully.")
        except Exception as e:
            print("Error deleting item:", e)
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

    def update(self, new_name, new_price):
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
            query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s;"
            cursor.execute(query, (new_name, new_price, self.name))
            connection.commit()
            print(f"{self.name} updated to {new_name} ({new_price} MAD).")
            self.name = new_name
            self.price = new_price
        except Exception as e:
            print("Error updating item:", e)
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()
