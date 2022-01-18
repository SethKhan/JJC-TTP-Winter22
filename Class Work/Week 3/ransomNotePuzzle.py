# Seth Khan - Ransome Note Puzzle
# function to check if words are in the magazine, takes in parameters(magazine, ransomeNote)
def ransom_note(magazine, ransomNote):
    # Loop through every word in ransomNote
    for word in ransomNote:
        # If word is found in the magazine, remove it.
        if word in magazine:
            magazine.remove(word)
            for word in magazine:
                print(word + ' are not in the magazine')
        # If word is not found return false.
        else:
            for word in magazine:
                print(magazine + ' are not in the magazine')
    
    

# Test - Use split() function to divide string by words.
magazine = "take me home right now".split()
ransomNote = "take right home".split()
ransom_note(magazine, ransomNote)