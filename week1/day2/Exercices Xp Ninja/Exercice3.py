# Morse Code Translation Table
MORSE_CODE_DICT = {
    'A': '.-',     'B': '-...',   'C': '-.-.',
    'D': '-..',    'E': '.',      'F': '..-.',
    'G': '--.',    'H': '....',   'I': '..',
    'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',
    'P': '.--.',   'Q': '--.-',   'R': '.-.',
    'S': '...',    'T': '-',      'U': '..-',
    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',
    '0': '-----',  '1': '.----',  '2': '..---',
    '3': '...--',  '4': '....-',  '5': '.....',
    '6': '-....',  '7': '--...',  '8': '---..',
    '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..',
    "'": '.----.', '!': '-.-.--', '/': '-..-.',
    '(': '-.--.',  ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.',  '-': '-....-', '_': '..--.-',
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
    ' ': '/'  # Space between words represented as "/"
}

# Reverse dictionary for decoding
REVERSED_MORSE_DICT = {value: key for key, value in MORSE_CODE_DICT.items()}

# Function: English to Morse
def english_to_morse(text):
    text = text.upper()
    morse_code = []
    for char in text:
        if char in MORSE_CODE_DICT:
            morse_code.append(MORSE_CODE_DICT[char])
        else:
            morse_code.append('?')  # Unknown character
    return ' '.join(morse_code)

# Function: Morse to English
def morse_to_english(code):
    words = code.strip().split(' / ')  # Split words
    decoded_words = []

    for word in words:
        letters = word.split()
        decoded_letters = [REVERSED_MORSE_DICT.get(letter, '?') for letter in letters]
        decoded_words.append(''.join(decoded_letters))

    return ' '.join(decoded_words).capitalize()

# Example Usage
if __name__ == "__main__":
    # Example 1: English → Morse
    message = "Hello world"
    morse = english_to_morse(message)
    print("English:", message)
    print("Morse  :", morse)

    # Example 2: Morse → English
    decoded = morse_to_english(morse)
    print("Decoded:", decoded)
