import * as types from '../actions/types'
import initialState from './initialState'

export default function ordersReducer (state = initialState.noticias, action) {
  switch (action.type) {
    case types.SET_NOTICIAS:
      return action.noticias
    default:
      return state
  }
}
