import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer-contenedor'>
        <div className='footer-titulo'>Temas de Fondo</div>
        <div className='footer-links'>
          <ul>
            <li>Temas de fondo</li>
            <li>Que esta pasando</li>
            <li>Te respondo</li>
            <li>Que estoy leyendo</li>
          </ul>
        </div>
        <div className='footer-sociales'>
          <i className='fa fa-facebook' />
          <i className='fa fa-twitter' />
        </div>
      </div>
    )
  }
}

export default Footer
