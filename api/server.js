/**
 * Mocking client-server processing
 */

const _countries = [
  {
    id: 0,
    name: 'Belgium',
    intro: 'Belgium, officially the Kingdom of Belgium, is a federal state in Western Europe. It is a founding member of the European Union.'
  },
  {
    id: 1,
    name: 'Netherlands',
    intro: 'The Netherlands is a country that is part of (a constituent country) of the Kingdom of the Netherlands. Most of it is in Western Europe, but there are also some parts in the Caribbean.'
  },
  {
    id: 2,
    name: 'France',
    intro: 'France, officially the French Republic, is a country in Western Europe. Its capital city is Paris. It is a member of the European Union.'
  },
  {
    id: 3,
    name: 'Germany',
    intro: 'The Republic of Germany, also called Germany, is a country in Central Europe. The country\'s full name is sometimes shortened to the FRG.'
  },
  {
    id: 4,
    name: 'Spain',
    intro: 'Spain is a country in Southern Europe. It is in the Iberian Peninsula near Portugal and Gibraltar. France and the country of Andorra are on its northeast side, where the Pyrenees mountains are.'
  }
]

const _attractions = [
  {
    id: 0,
    countryId: 0,
    name: 'Onze-Lieve-Vrouwekathedraal',
    detail: 'De Onze-Lieve-Vrouwekathedraal is een kathedraal in de Belgische stad Antwerpen. De kathedraal staat aan de Handschoenmarkt en is de hoofdkerk van het bisdom Antwerpen. Ze is gewijd aan Maria. De kerk was een kathedraal tussen 1559 en 1803 en vanaf 1961 tot heden. De toren van de Onze-Lieve-Vrouwekathedraal is als onderdeel van een groep van 56 belforten in België en Frankrijk opgenomen op de lijst van werelderfgoed van UNESCO.',
    favorite: false
  },
  {
    id: 1,
    countryId: 0,
    name: 'Atomium',
    detail: 'Het Atomium is een monument in het Heizelpark in Brussel. Het is een stalen constructie die bestaat uit negen bollen met elk een diameter van 18 meter. De bollen vormen samen het kubisch ruimtelijk gecentreerde kristalstructuur van ijzer, 165 miljard maal vergroot. Het gebouw werd ontworpen door ingenieur André Waterkeyn en is sinds de restauratie bekleed met roestvast staal. Vijf van de negen bollen zijn toegankelijk voor het publiek.',
    favorite: false
  },
  {
    id: 2,
    countryId: 0,
    name: 'Grotten van Han',
    detail: 'De grotten van Han vormen een stelsel van onderaardse grotten in Han-sur-Lesse nabij Rochefort, gelegen tussen de rivier de Lesse in de Belgische Ardennen. Het geheel staat bekend als een van de grootste grottencomplexen van Europa.',
    favorite: false
  },
  {
    id: 3,
    countryId: 1,
    name: 'Efteling',
    detail: 'De Efteling is een attractiepark in de plaats Kaatsheuvel in de Nederlandse provincie Noord-Brabant. Het is qua bezoekersaantallen en oppervlakte het grootste attractiepark van de Benelux. De Efteling is ook een van de 25 meest bezochte themaparken in de wereld en na Disneyland Parijs, Europa-Park en Tivoli Gardens het meest bezochte pretpark van Europa.',
    favorite: false
  }
]

export default {
  getCountries (cb) {
    setTimeout(() => cb(_countries), 100)
  },
  getAttractionsFromCountry (cb, countryId) {
    setTimeout(() => cb(_attractions.filter(attraction => attraction.countryId === countryId)), 100)
  }
}
