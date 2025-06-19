# Define the function
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")

# Call the function as required

make_shirt()  # Uses default values: large, I love Python
make_shirt(size="medium")  # Overrides size only
make_shirt(size="small", text="Custom message.")  # Overrides both