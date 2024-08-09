import { countries } from './countries'

export const enigmaCategories = {
  name: 'enigmas',
  cat1: 'production/arrangement',
  cat2: 'melodic/harmonic/tonal elements',
  cat3: 'random',
  // cat4: null,
}

interface lyricCategoriesProps {
  cat1: string
  cat2: string
  cat3: string
  cat4: string
  name?: string
}

export const lyricCategories = {
  name: 'lyrics',
  cat1: 'observational - worldly - nomadic',
  cat2: 'hopeful - elevated - serene',
  cat3: 'boozy - lovelorn - despondent',
  cat4: 'abstract - esoteric - uneven',
}
export const chordCategories = {
  name: 'chords',
  cat1: 'uplifting - ebulient - lighthearted',
  cat2: 'brooding - dark - mysterious',
  cat3: 'angular - odd - atmospheric',
  // cat4: null,
}

export const categoriesByName = {
  enigmas: enigmaCategories,
  lyrics: lyricCategories,
  chords: chordCategories,
}

// const countryArray

// export const countryArray = Object.values(countries)
export const avatarOptions = [
  {
    style: 'adventurer',
    url: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Abram',
  },

  {
    style: 'avataaars',
    url: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jack',
  },
  {
    style: 'big-ears',
    url: 'https://api.dicebear.com/9.x/big-ears/svg?seed=French',
  },
  {
    style: 'big-smile',
    url: 'https://api.dicebear.com/9.x/big-smile/svg?seed=Sleator',
  },
  {
    style: 'bottts',
    url: 'https://api.dicebear.com/9.x/bottts/svg?seed=Stavitz',
  },
  {
    style: 'croodles',
    url: 'https://api.dicebear.com/9.x/croodles/svg?seed=Christian',
  },
  // {
  //   style: 'notionists',
  //   url: 'https://api.dicebear.com/9.x/notionists/svg?seed=Felipe',
  // },
  {
    style: 'notionists-neutral',
    url: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Laura',
  },
  {
    style: 'personas',
    url: 'https://api.dicebear.com/9.x/personas/svg?seed=Sandra',
  },
  {
    style: 'bottts-neutral',
    url: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Drake',
  },
]

export const moods = [
  { emoji: '☀️', label: 'Sunny weather' },
  { emoji: '🦓', label: 'Onsite zoo' },
  { emoji: '🌊', label: 'Sea' },
  { emoji: '🌲', label: 'Nature' },
  { emoji: '🤽', label: 'Water sports' },
]

export const imageCardArray = [
  {
    type: 'lyrics',
    title: 'Lyrics',
    description:
      'Lyric snippets based on a style to help you get started writing.',
    // imgUrl:
    //   'https://res.cloudinary.com/shooksounds/image/upload/v1658846648/Song%20Sifter/SongSifterLyric_dpnd6k.png',
    imgUrl: require('../assets/images/alienSings1.jpg'),
    categories: lyricCategories,
  },
  {
    type: 'chords',
    title: 'Chords',
    description: 'A suggested 4-chord progression based on mood selection.',
    imgUrl: require('../assets/images/animal.jpg'),
    categories: chordCategories,
  },

  {
    type: 'enigma',
    title: 'Enigmatic Expressions',
    description:
      'Ways to get you think outside of the box...musically speaking.',
    imgUrl: require('../assets/images/person3.jpg'),
    categories: enigmaCategories,
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
