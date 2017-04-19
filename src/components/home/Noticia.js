import React from 'react'

const Noticia = ({dia, mes, titulo, texto, imagen, categoria}) => {
  if (categoria === 'noticia') {
    return (
      <div className='noticia-item'>
        <img
          className='noticia-imagen' src={imagen} alt='' />
        <div className='noticia-titulo'>{titulo}</div>
        <div className='separador-contenedor'>
          <div className='separador' />
          <div className='categoria'>{categoria}</div>
        </div>
        <p className='noticia-texto'>{texto}</p>
        <div className='social-contenedor'>
          <a href='#'>
            <i className='fa fa-facebook' />
          </a>
          <a href='#'>
            <i className='fa fa-twitter' />
          </a>
        </div>
      </div>
    )
  } else if (categoria === 'frase') {
    return (
      <div className='noticia-item'>
        <div className='frase-contenedor'>
          <i className='fa fa-quote-left frase-icono-izquierda' />
          <p className='frase-texto'>{texto}</p>
          <i className='fa fa-quote-right frase-icono-derecha' />
        </div>
        <div className='social-contenedor'>
          <a href='#'>
            <i className='fa fa-facebook' />
          </a>
          <a href='#'>
            <i className='fa fa-twitter' />
          </a>
        </div>
      </div>
    )
  }
}

export default Noticia
