import React from 'react'
import _ from 'lodash'

import Data from '../../data/data'
import Noticia from './Noticia'
import Fondo from './Fondo'

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
        <div className='listados-contenedor'>
          {_.map(this.state.data.fondos, (fondo, index) => {
            return (
              <Fondo
                key={index}
                color={fondo.color}
                titulo={fondo.titulo}
              />
            )
          })}
        </div>
        <div className='pie-contenedor'>
          Footer
        </div>
      </div>
    )
  }
}
