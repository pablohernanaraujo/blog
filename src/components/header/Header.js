import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <a href='#' className='btn-header'>TEMAS DE FONDO</a>
        <a href='#' className='btn-header'>TE RESPONDO</a>
        <input className='buscador' type='text' placeholder='Buscar' />
      </header>
    )
  }
}
