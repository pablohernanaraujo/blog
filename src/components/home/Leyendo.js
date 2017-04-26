import React from 'react'

const Leyendo = () => {
  return (
    <div className='leyendo-contenedor'>
      <h2 className='titulos-principales'>Qué estoy leyendo</h2>
      <ul className='leyendo'>
        <li>
          <i className='fa fa-book' />
          <a href='#'>Cien años de soledad</a>
        </li>
        <li>
          <i className='fa fa-book' />
          <a href='#'>El señor de las moscas</a>
        </li>
        <li>
          <i className='fa fa-book' />
          <a href='#'>Viaje al centro de la tierra</a>
        </li>
        <li>
          <i className='fa fa-book' />
          <a href='#'>El Alquimista</a>
        </li>
        <li>
          <i className='fa fa-book' />
          <a href='#'>La llamada de lo salvaje</a>
        </li>
        <li>
          <i className='fa fa-book' />
          <a href='#'>El Perfume</a>
        </li>
      </ul>
    </div>
  )
}

export default Leyendo
