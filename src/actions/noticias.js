import * as types from './types'
import axios from 'axios'

export function setNoticias (pedidos) {
  return {
    type: types.SET_NOTICIAS,
    pedidos
  }
}

export function getNoticias () {
  return dispatch => {
    console.log('get noticias')
    // const url = '/api/checkout/pub/orders/';
    // axios
    //   .get(url)
    //   .then(data => {
    //     const ordenes = data.data;
    //     console.log(ordenes);
    //     dispatch(setPedidos(data));
    //   })
    //   .catch(err => console.log(err));
  }
}
