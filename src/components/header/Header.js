import React from 'react'

export default class Header extends React.Component {
  componentDidMount () {
    const items = ['hola', 'jelou', 'lalal']
    items.forEach((value, i) => {
      console.log(value, i)
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
              <a className='btn-header btn-buscador'>
                <i className='fa fa-search' />
              </a>
            </div>
          </div>
        </nav>
        <div className='buscador-contenedor'>
          <div className='buscador-interno'>
            <input type='text' className='buscador' placeholder='Buscar' />
            <a href='#' className='buscador-btn'>clear</a>
          </div>
        </div>
      </header>
    )
  }
}
