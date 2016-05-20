// With ES6 you can also write it as:
export const getCountries = state => state.countries.all

export const getCurrentCountryId = state => state.attractions.currentCountryId

export function getCountry (state) {
  return state.countries.all.filter(country => country.id === 0)
}
