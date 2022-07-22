# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#CHORDS_SEEDS
#Chord_Progression categories:
chord_cat1 = 'uplifting - ebulient - lighthearted' 
chord_cat2 = 'brooding - dark - mysterious' 
chord_cat3 = 'angular - odd - atmospheric' 

puts 'seeding chords...'

ChordProgression.create(category: chord_cat1, chords: "Gmaj, Amaj, Cmaj, Dmaj", author: "Tom - Austin, TX")
ChordProgression.create(category: chord_cat1, chords: "Emaj, Amaj, Dmaj Gbmaj", author: "Mike St. Clair - Austin, TX")
ChordProgression.create(category: chord_cat1, chords: "Asus, Dmaj, Asus, Dmaj", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat1, chords: "Emaj - E7 - F#min - B7", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat1, chords: "Cmaj - Fmaj - D7 - Gmaj", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat1, chords: "G6sus2 - Em7 - EbMaj7 - C6/9", author: "Christopher Cox - Los Angeles, CA")
ChordProgression.create(category: chord_cat1, chords: "D#11 - C#m(b13) - Bm7 - C#m(b13) ", author: "Christopher Cox - Los Angeles, CA")
ChordProgression.create(category: chord_cat2, chords: "Bm, F#m, Em, F#m", author: "Tom - Austin, TX")
ChordProgression.create(category: chord_cat2, chords: "Gmin, Emin, F#min, C#min", author: "Mike St. Clair - Austin, TX")
ChordProgression.create(category: chord_cat2, chords: "Emin - Gmaj7 - F#min7(b5) - Amin6", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat2, chords: "Dbmaj7 - Cmaj7 - Abmin - Gbmaj7", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat2, chords: "A9 - Abmin - Dbmin - Bmaj7", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat2, chords: "Bm - F#/A# - Am6 - G#m7", author: "Christopher Cox - Los Angeles, CA")
ChordProgression.create(category: chord_cat3, chords: "Dmaj7, Amaj7, F#m, Gmaj", author: "Tom - Austin, TX")
ChordProgression.create(category: chord_cat3, chords: "Cmaj, Ebmaj, Abmaj, Gbmaj", author: "Mike St. Clair - Austin, TX")
ChordProgression.create(category: chord_cat3, chords: "Gmaj7 - Emin - Bb(b5) - Fmaj7", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat3, chords: "F#aug9 - E9 - Amaj6 - Dbmin", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat3, chords: "Eb7 - Ddim - Db7b5 - Cmin", author: "Abram Shook - Austin, TX")
ChordProgression.create(category: chord_cat3, chords: "Am - C/G - Fm7/9 - EbMaj7", author: "Christopher Cox - Los Angeles, CA")

#ENIGMA_SEEDS
enigma_cat1 = "on production/arrangement"
enigma_cat2 = "on melodic/harmonic/tonal elements"
enigma_cat3 = "random"

puts "seeding enigmas..."

Enigma.create(category: enigma_cat1, enigma: "Re-write a song on a different instrument", author: "Tom - Austin, TX")
Enigma.create(category: enigma_cat1, enigma: "Set a timer for 7 minutes, play through and loop one section of a song and change one element with each repetition.", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat1, enigma: "Write a series of lyric fragments on a piece of paper. Tear the paper in half, throw one half away, use half of the lyric fragments from the half page you kept.", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat1, enigma: "replace the drummers sticks with chopsticks", author: "Abram Shook - Austin, TX")


Enigma.create(category: enigma_cat2, enigma: "Record a choir of harmonic voices, then take out the main/lead voice and write something new", author: "Tom - Austin, TX")
Enigma.create(category: enigma_cat2, enigma: "Use a harmonica to dictate the key and chords of the song your writing", author: "Tom - Austin, TX")
Enigma.create(category: enigma_cat2, enigma: "Describe a landscape using three sounds.", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat2, enigma: "Write a bridge keeping one common tone between all chords.", author: "Christopher Cox - Los Angeles, CA")

Enigma.create(category: enigma_cat3, enigma: "Keep a journal during altered states of consciousness then let those journal entries inform your recording/writing process", author: "Tom - Austin, TX")
Enigma.create(category: enigma_cat3, enigma: "Take the first word that comes to mind, and then use the letters that word as the first letters for a list of words. 
Then design a story inspired by those words. ex; TRASH = Teachers Rationing Apples Surrounded by Heroes", author: "Mike St. Clair - Austin, TX")
Enigma.create(category: enigma_cat3, enigma: "Write 8 random lyric couplets then combine them into longer verses.", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat3, enigma: "Make your chorus monochromatic.", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat3, enigma: "Tape a note down on a polyphonic synth and write a progression around the drone. ", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat3, enigma: "Write/sing the lyrics of one section in your song in a different language. ", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat3, enigma: "Write lyrics describing a scene from your favorite film without mentioning specific characters or settings.", author: "Christopher Cox - Los Angeles, CA")
Enigma.create(category: enigma_cat3, enigma: "Think of a letter...now write a song without using that letter", author: "Abram Shook - Austin, TX")


#LYRIC_SEEDS
lyric_cat1 = "observational - worldly - nomadic"  
lyric_cat2 = "hopeful - elevated - serene"
lyric_cat3 = "boozy - despondent - lovelorn"
lyric_cat4 = "abstract - esoteric - uneven"

puts "seeding lyrics..."

LyricSnippet.create(category: lyric_cat1, lyrics: "Smoked fresh cigs at the summit, sipped spots of bitter tea and carried on", author: "Tom - Austin, TX")
LyricSnippet.create(category: lyric_cat1, lyrics: "Oh, sometimes I feel when that soft wind blows, It's trying to lift me up
And sake me out of these woes, Yeah, I keep my head up when I start to get down, Cause I ain't never gotten nothing, Just because I wore a frown", author: "Mike St. Clair - Austin, TX")
LyricSnippet.create(category: lyric_cat1, lyrics: "You’ve got me talking like it’s simpler times, When a man could be a prophet, And his words could save a life", author: "Mike St. Clair - Austin, TX")
LyricSnippet.create(category: lyric_cat1, lyrics: "Wear down the places you love like a river through a canyon", author: "Christopher Cox - Los Angeles, CA")
LyricSnippet.create(category: lyric_cat1, lyrics: "The evening tapped the window and I jumped out of my skin", author: "Christopher Cox - Los Angeles, CA")
LyricSnippet.create(category: lyric_cat2, lyrics: "All the swirls of sunshine on my skin and soaking in", author: "Tom - Austin, TX")
LyricSnippet.create(category: lyric_cat3, lyrics: "Like a moon caught drifting, without a planet", author: "Tom - Austin, TX")
LyricSnippet.create(category: lyric_cat3, lyrics: "Nice of you to try and save me as I was saving you", author: "Christopher Cox - Los Angeles, CA")
LyricSnippet.create(category: lyric_cat4, lyrics: "The little elf wandering the forest in my head", author: "Tom - Austin, TX")
LyricSnippet.create(category: lyric_cat4, lyrics: "Your voice sang like a motorcycle", author: "Christopher Cox - Los Angeles, CA")
LyricSnippet.create(category: lyric_cat4, lyrics: "I want a life without keys, I need a life without locks", author: "Christopher Cox - Los Angeles, CA")

#USERS
puts "seeding users..."
User.create(username:"Abram Shook", profile_pic: "", bio: "", password_digest:"", email: "", city: "", state: "", country: "" )
