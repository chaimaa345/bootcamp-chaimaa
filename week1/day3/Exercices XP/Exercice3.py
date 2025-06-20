class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics  # store the list of lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
# Creating a Song object with lyrics
stairway = Song([
    "There’s a lady who's sure","all that glitters is gold","and she’s buying a stairway to heaven"
])

# Calling the method to print each lyric line
stairway.sing_me_a_song()