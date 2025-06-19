def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")

# Step 3: Call the function with and without the country argument

describe_city("Reykjavik", "Iceland")  # Providing both city and country
describe_city("Paris")                 # Only city, country uses default value
describe_city("Cairo", "Egypt")        # Another example with both values
