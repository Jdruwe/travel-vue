/**
 * Mocking client-server processing
 */

const _countries = [
  {
    name: 'Belgium',
    intro: 'Belgium, officially the Kingdom of Belgium, is a federal state in Western Europe. It is a founding member of the European Union.'
  },
  {
    name: 'Netherlands',
    intro: 'The Netherlands is a country that is part of (a constituent country) of the Kingdom of the Netherlands. Most of it is in Western Europe, but there are also some parts in the Caribbean.'
  },
  {
    name: 'France',
    intro: 'France, officially the French Republic, is a country in Western Europe. Its capital city is Paris. It is a member of the European Union.'
  },
  {
    name: 'Germany',
    intro: 'The Republic of Germany, also called Germany, is a country in Central Europe. The country\'s full name is sometimes shortened to the FRG.'
  },
  {
    name: 'Spain',
    intro: 'Spain is a country in Southern Europe. It is in the Iberian Peninsula near Portugal and Gibraltar. France and the country of Andorra are on its northeast side, where the Pyrenees mountains are.'
  }
]

export default {
  getCountries (cb) {
    setTimeout(() => cb(_countries), 100)
  }
}
