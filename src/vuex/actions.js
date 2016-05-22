import server from '../../api/server'
import {
  RECEIVE_COUNTRIES,
  RECEIVE_ATTRACTIONS,
  SWITCH_COUNTRY,
  FAVORITE_ATTRACTION
} from './mutation-types'

export const getCountriesFromServer = ({dispatch}) => {
  server.getCountries(products => {
    dispatch(RECEIVE_COUNTRIES, products)
  })
}

export const getAttractionsFromServer = ({dispatch, state}) => {
  server.getAttractionsFromCountry(attractions => {
    dispatch(RECEIVE_ATTRACTIONS, attractions)
  }, state.attractions.currentCountryId)
}

export const switchCountry = ({dispatch}, id) => {
  dispatch(SWITCH_COUNTRY, Number(id))
}

export const favoriteAttraction = ({dispatch}, id) => {
  dispatch(FAVORITE_ATTRACTION, Number(id))
}
