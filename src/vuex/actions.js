import server from '../../api/server'
import {
  RECEIVE_COUNTRIES,
  RECEIVE_ATTRACTIONS,
  SWITCH_COUNTRY,
  FAVORITE_ATTRACTION,
  UNDO_FAVORITE_ATTRACTION
} from './mutation-types'

export const getCountriesFromServer = ({dispatch}) => {
  server.getCountries(products => {
    dispatch(RECEIVE_COUNTRIES, products)
  })
}

export const getAttractionsFromServer = ({dispatch, state}) => {
  server.getAttractionsFromCountry(attractions => {
    dispatch(RECEIVE_ATTRACTIONS, attractions)
  }, Number(state.route.params.id))
}

export const switchCountry = ({dispatch}, id) => {
  dispatch(SWITCH_COUNTRY, Number(id))
}

export const favoriteAttraction = ({dispatch}, attraction) => {
  dispatch(FAVORITE_ATTRACTION, attraction)
}

export const undoFavoriteAttraction = ({dispatch}, attraction) => {
  dispatch(UNDO_FAVORITE_ATTRACTION, attraction)
}
