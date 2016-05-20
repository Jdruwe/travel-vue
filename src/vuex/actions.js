import server from '../../api/server'
import {RECEIVE_COUNTRIES, RECEIVE_ATTRACTIONS, SWITCH_COUNTRY} from './mutation-types'

export const getAllCountries = ({ dispatch }) => {
  console.log('fetch from server')
  server.getCountries(products => {
    dispatch(RECEIVE_COUNTRIES, products)
  })
}

export const getAttractionsFromCountry = ({ dispatch }, countryId) => {
  server.getAttractionsFromCountry(attractions => {
    console.log(attractions)
    dispatch(RECEIVE_ATTRACTIONS, attractions)
  }, countryId)
}

export const switchCountry = ({ dispatch }, id) => {
  dispatch(SWITCH_COUNTRY, id)
}
