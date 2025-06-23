def get_full_name(first_name, last_name, middle_name=""):
    # Capitalize each part
    first = first_name.capitalize()
    last = last_name.capitalize()

    if middle_name:
        middle = middle_name.capitalize()
        full_name = f"{first} {middle} {last}"
    else:
        full_name = f"{first} {last}"

    return full_name
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
# Output: John Hooker Lee

print(get_full_name(first_name="bruce", last_name="lee"))
# Output: Bruce Lee
