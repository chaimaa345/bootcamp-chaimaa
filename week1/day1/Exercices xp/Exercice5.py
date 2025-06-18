favorite_numbers = {3, 7}

favorite_numbers.add(15)
favorite_numbers.add(16)

favorite_numbers.remove(16)  # Remove the last added number

# Step 4: Create your friend's favorite numbers set
friend_fav_numbers = {12, 7, 42, 99}

# Combine sets without duplicates
our_fav_numbers = favorite_numbers.union(friend_fav_numbers)

print("My favorite numbers:", favorite_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers combined:", our_fav_numbers)