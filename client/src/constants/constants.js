export const enigmaCategories = {
  name: 'enigmas',
  cat1: 'on production/arrangement',
  cat2: 'on melodic/harmonic/tonal elements',
  cat3: 'random',
  cat4: null,
}

export const lyricCategories = {
  name: 'lyrics',
  cat1: 'observational - worldly - nomadic',
  cat2: 'hopeful - elevated - serene',
  cat3: 'boozy - despondent - lovelorn',
  cat4: 'abstract - esoteric - uneven',
}
export const chordCategories = {
  name: 'chords',
  cat1: 'uplifting - ebulient - lighthearted',
  cat2: 'brooding - dark - mysterious',
  cat3: 'angular - odd - atmospheric',
  cat4: null,
}

export const categoriesByName = {
  enigmas: enigmaCategories,
  lyrics: lyricCategories,
  chords: chordCategories,
}

export const imageCardArray = [
  {
    type: 'enigma',
    title: 'Enigmatic Expressions',
    description:
      'Ways to get you think outside of the box...musically speaking.',
    imgUrl:
      'https://res.cloudinary.com/shooksounds/image/upload/v1658846974/Song%20Sifter/SongSifterEnigmasWNotes_gwghgz.png',
    categories: enigmaCategories,
  },
  {
    type: 'chord',
    title: 'Chords',
    description: 'A suggested 4-chord progression based on mood selection.',
    imgUrl:
      'https://res.cloudinary.com/shooksounds/image/upload/v1658846939/Song%20Sifter/SongSifterChordsmaller_f3qsel.jpg',
    categories: chordCategories,
  },
  {
    type: 'lyric',
    title: 'Lyrics',
    description:
      'Lyric snippets based on a style to help you get started writing.',
    imgUrl:
      'https://res.cloudinary.com/shooksounds/image/upload/v1658846648/Song%20Sifter/SongSifterLyric_dpnd6k.png',
    categories: lyricCategories,
  },
]
export const images = {
  enigma:
    'https://res.cloudinary.com/shooksounds/image/upload/v1658846974/Song%20Sifter/SongSifterEnigmasWNotes_gwghgz.png',
  chord:
    'https://res.cloudinary.com/shooksounds/image/upload/v1658846939/Song%20Sifter/SongSifterChordsmaller_f3qsel.jpg',
  lyric:
    'https://res.cloudinary.com/shooksounds/image/upload/v1658846648/Song%20Sifter/SongSifterLyric_dpnd6k.png',

  // logo: 'https://res.cloudinary.com/shooksounds/image/upload/v1658846985/Song%20Sifter/SongSifterNoBGNoText_fquz7n.png',

  // stamp:
  //   'https://res.cloudinary.com/shooksounds/image/upload/v1658846740/Song%20Sifter/SongSifterStamp_vqgmlg.png',

  // banner:
  //   'https://res.cloudinary.com/shooksounds/image/upload/v1659670416/Song%20Sifter/SongSifterBannerr_tipurx.png',
}
