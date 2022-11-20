import { uniqueNamesGenerator, names, countries, languages, NumberDictionary, Config, adjectives, colors, animals } from 'unique-names-generator';
export type Tutor = {
  name: string
  rating: number
  followers: number
  classes: number
  badges: string[]
  presentation: {
    title: string
    description: string
  }
}

const nameConfig: Config = {
  dictionaries: [names, names],
  separator: ' ',
  length: 2,
};
const descriptionConfig: Config = {
  dictionaries: [countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages, countries, animals, adjectives, colors, languages],
  separator: ' ',
  length: 50,
};

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Tutor => {
  return {
    name: uniqueNamesGenerator(nameConfig),
    rating: parseInt(NumberDictionary.generate({ min: 1, max: 5 }).toString()),
    followers: parseInt(NumberDictionary.generate({ min: 1, max: 5000 }).toString()),
    classes: parseInt(NumberDictionary.generate({ min: 1, max: 1000 }).toString()),
    badges: uniqueNamesGenerator({ dictionaries: [adjectives, adjectives, adjectives, adjectives], length: 4, separator: ' ' }).split(' '),
    presentation: {
      title: uniqueNamesGenerator({ dictionaries: [animals, colors, adjectives], length: 3, separator: ' ' }),
      description: uniqueNamesGenerator(descriptionConfig)
    },
  }
}


export function makeData(): Tutor[] {
  const makeDataLevel = (depth = 0): Tutor[] => {
    const lens = NumberDictionary.generate({ min: 1, max: 30 }).map((n) => parseInt(n))
    const len = lens[depth]
    return range(len).map(() => ({
      ...newPerson()
    }))
  }

  return makeDataLevel()
}
