from datetime import datetime

# Ask the user for their birthdate
birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

# Convert input to a datetime object
birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
print(birthdate)
# Get the current year and calculate age
today = datetime.today()
age = today.year - birthdate.year
print(age)


# Number of candles = last digit of age
candles_count = age % 10
candles = 'i' * candles_count
tiree = "_" * ((9 - candles_count) // 2)
candle_line = f"{tiree}{candles}{tiree}"

# Cake body
cake = f"""   
    {candle_line}
   |:H:a:p:p:y:|
 __|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
"""

# Check for leap year
def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Display one or two cakes
if is_leap(birthdate.year):
    print(cake * 2)
else:
    print(cake)