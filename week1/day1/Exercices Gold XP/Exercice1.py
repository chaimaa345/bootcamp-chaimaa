# Ask the user for a month number
month = int(input("Enter the number of the month (1 to 12): "))

# Determine the season
if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:
    season = None

# Output the result
if season:
    print(f"The season is {season}.")
else:
    print("Invalid month. Please enter a number between 1 and 12.")
