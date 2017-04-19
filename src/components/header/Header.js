import React from 'react'
import $ from 'jquery'

export default class Header extends React.Component {
  componentDidMount () {
    $(document).ready(() => {
      $('.btn-buscador').on('click', () => {
        $('.buscador-contenedor').toggleClass('buscador-activo')
      })

      $(window).scroll(() => {
        var wScroll = $(this).scrollTop()
        var altoPantalla = $(window).height()
        console.log(wScroll)
        if (wScroll <= altoPantalla) {
          console.log('scroll')
        }
      })
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
              <a href='#' className='btn-header'>Respondo</a>
              <a href='#' className='btn-header'>Lentura</a>
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
