import random

# Step 1 + Step 4 + Step 5: Generate temperature by season and with floating-point precision
def get_random_temp(season="spring"):
    if season == "winter":
        return round(random.uniform(-10, 16), 1)
    elif season == "spring":
        return round(random.uniform(10, 23), 1)
    elif season == "summer":
        return round(random.uniform(24, 40), 1)
    elif season == "autumn":
        return round(random.uniform(10, 24), 1)
    else:
        return round(random.uniform(-10, 40), 1)  # Default case

# Step 2, 3, and 5: Main function with advice and user input for season
def main():
    month = int(input("Enter the month number (1-12): "))
    
    # Determine season
    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"
    else:
        print("Invalid month. Defaulting to random season.")
        season = "unknown"

    temp = get_random_temp(season)
    print(f"\nThe temperature right now is {temp} degrees Celsius.")

    # Step 3: Temperature-based advice
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather.")
    elif 24 <= temp <= 32:
        print("A bit warm, stay hydrated.")
    elif 32 < temp <= 40:
        print("It’s really hot! Stay cool.")
    else:
        print("Unusual temperature detected.")

# Call the main function
main()
