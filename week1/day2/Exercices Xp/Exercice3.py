# 1. Create the initial dictionary
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2. Change the value of number_stores to 2
brand["number_stores"] = 2

# 3. Print a sentence describing Zara’s clients
print(f"Zara's clients include {', '.join(brand['type_of_clothes'])}.")

# 4. Add a new key: country_creation
brand["country_creation"] = "Spain"

# 5. Add "Desigual" to international_competitors if the key exists
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6. Delete the creation_date key
brand.pop("creation_date", None)

# 7. Print the last item in international_competitors
print("Last international competitor:", brand["international_competitors"][-1])

# 8. Print the major colors in the US
print("Major colors in the US:", brand["major_color"]["US"])

# 9. Print the number of keys in the dictionary
print("Number of keys in the brand dictionary:", len(brand))

# 10. Print all the keys of the dictionary
print("Keys in the brand dictionary:", list(brand.keys()))
# 11. Create more_on_zara dictionary
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Merge the dictionaries (update will override values)
brand.update(more_on_zara)

# 13. Print the updated brand dictionary
print("\nUpdated brand dictionary after merge:")
for key, value in brand.items():
    print(f"{key}: {value}")