import requests
import random
import psycopg2

# Database config — update if needed
DB_CONFIG = {
    'dbname': 'resto',      # ← change this if needed
    'user': 'postgres',
    'password': '1234',
    'host': 'localhost',
    'port': '5432'
}

def get_countries_data():
    url = "https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population"
    headers = {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
    }
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()


def insert_country(cur, country):
    """Insert one country record"""
    name = country.get('name', {}).get('common', 'Unknown')
    capital = country.get('capital', ['Unknown'])[0] if country.get('capital') else 'Unknown'
    flag = country.get('flags', {}).get('png', '')
    subregion = country.get('subregion', 'Unknown')
    population = country.get('population', 0)

    query = """
    INSERT INTO countries (name, capital, flag, subregion, population)
    VALUES (%s, %s, %s, %s, %s);
    """
    cur.execute(query, (name, capital, flag, subregion, population))
    print(f"✅ Inserted: {name}")

def main():
    try:
        # Fetch data from the API
        countries = get_countries_data()

        # Pick 10 random countries
        sample = random.sample(countries, 10)

        # Connect to PostgreSQL
        conn = psycopg2.connect(**DB_CONFIG)
        cur = conn.cursor()

        for country in sample:
            try:
                insert_country(cur, country)
            except Exception as e:
                print("❌ Error inserting:", e)

        conn.commit()
        cur.close()
        conn.close()
        print("🎉 Done inserting 10 countries!")

    except Exception as e:
        print("❌ Error during execution:", e)

if __name__ == "__main__":
    main()


