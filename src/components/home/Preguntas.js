import React from 'react'

const Preguntas = ({dia, mes, titulo, texto, imagen, categoria}) => {
  return (
    <div className='preguntas-contenedor'>
      <div className='preguntas-input-contenedor'>
        <input type='text' className='preguntas-input' placeholder='Escribir pregunta' />
        <a href='#' className='preguntas-btn'>Preguntar</a>
      </div>
      <div className='preguntas-contenedor-inferior'>
        <ul className='preguntas-recientes-contenedor'>
          <li>
            <a href='#'>Cras ultricies ligula sed magna dictum porta.</a>
          </li>
          <li>
            <a href='#'>Proin eget tortor risus.</a>
          </li>
          <li>
            <a href='#'>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</a>
          </li>
          <li>
            <a href='#'>Curabitur aliquet quam id dui posuere blandit.</a>
          </li>
          <li>
            <a href='#'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</a>
          </li>
          <li>
            <a href='#'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</a>
          </li>
          <li>
            <a href='#'>Nulla quis lorem ut libero malesuada feugiat.</a>
          </li>
        </ul>
        <div className='preguntas-ver-mas-contenedor'>
          <a href='#'>
            <i className='fa fa-plus' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Preguntas
