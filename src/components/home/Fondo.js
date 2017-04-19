import React from 'react'

const Fondo = ({titulo, color}) => {
  return (
    <a href='#' className='fondo-item' style={{backgroundColor: color}}>
      <div className='fondo-titulo'>
        {titulo}
      </div>
    </a>
  )
}

export default Fondo
