from deep_translator import GoogleTranslator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translations = {}

for word in french_words:
    translation = GoogleTranslator(source='fr', target='en').translate(word)
    translations[word] = translation

print(translations)


