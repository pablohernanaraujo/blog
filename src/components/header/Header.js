import React from 'react'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      toggleSearch: false
    }
  }
  handleSearch = () => {
    this.setState({
      toggleSearch: !this.state.toggleSearch
    })
  }

  render () {
    return (
      <header>
        <nav>
          <div className='nav-interno'>
            <div className='nav-izquierda'>
              <a href='#' className='btn-header titulo'>TEMAS DE FONDO</a>
              <a href='#' className='btn-header'>QUE ESTA PASANDO</a>
            </div>
            <div className='nav-derecha'>
              <a href='#' className='btn-header'>Te respondo</a>
              <a href='#' className='btn-header'>Qué estoy leyendo</a>
              <a className='btn-header btn-buscador' onClick={this.handleSearch}>
                <i className='fa fa-search' />
              </a>
            </div>
          </div>
        </nav>
        <div className={this.state.toggleSearch ? 'buscador-contenedor buscador-activo' : 'buscador-contenedor'}>
          <div className='buscador-interno'>
            <input type='text' className='buscador' placeholder='Buscar' />
            <a href='#' className='buscador-btn'>clear</a>
          </div>
        </div>
      </header>
    )
  }
}
