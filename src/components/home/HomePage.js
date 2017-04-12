import React from 'react'
import _ from 'lodash'

import Data from '../../data/data'
import Noticia from './Noticia'

export default class HomePage extends React.Component {
  constructor () {
    super()
    this.state = {
      data: Data
    }
  }
  render () {
    return (
      <div>
        <div className='contenedor-imagen' />
        <div className='actualidad-contenedor'>
          {_.map(this.state.data.noticias, (noticia, index) => {
            return (
              <Noticia
                key={index}
                dia={noticia.dia}
                mes={noticia.mes}
                titulo={noticia.titulo}
                texto={noticia.texto}
                imagen={noticia.imagen}
                categoria={noticia.categoria}
              />
            )
          })}
        </div>
        <div className='listados-contenedor' />
      </div>
    )
  }
}
