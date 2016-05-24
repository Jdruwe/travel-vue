// With ES6 you can also write it as:
export const getCountries = state => state.countries.all

export function getCountry (state) {
  return state.countries.all.filter(country => country.id === Number(state.route.params.id))[0]
}

export const getAttractions = state => state.attractions.all

export function getFavoriteAttractions (state) {
  return state.attractions.favorites.filter(attraction => attraction.favorite === true)
}
