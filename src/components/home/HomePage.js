import React from 'react'
import _ from 'lodash'

import Data from '../../data/data'
import Preguntas from './Preguntas'
import Noticia from './Noticia'
import Fondo from './Fondo'
import Frases from './Frases'
import Leyendo from './Leyendo'

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
        <div className='imagen-contenedor'>
          <div className='agenda-contenedor'>
            <div className='agenda'>
              <h2>Agenda</h2>
              <div className='agenda-item'>
                <div className='agenda-fecha'>20-5-2017</div>
                <a className='agenda-lugar' href='https://www.google.com.ar/maps/place/Centro+Cultural+Rector+Ricardo+Rojas/@-34.604694,-58.3981867,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccaea67a01061:0x4ab8597362119101!8m2!3d-34.604694!4d-58.395998' target='_blank'>Centro Cultural Rojas</a>
                <div className='agenda-texto'>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh.
                </div>
              </div>
              <div className='agenda-item'>
                <div className='agenda-fecha'>7-6-2017</div>
                <a className='agenda-lugar' href='https://www.google.com.ar/maps/place/Centro+Cultural+Borges/@-34.599716,-58.376749,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccacb77a12fd3:0xeedd173e3b422698!8m2!3d-34.599716!4d-58.3745603' target='_blank'>Centro Cultural Borges</a>
                <div className='agenda-texto'>
                  Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.
                </div>
              </div>
              <div className='agenda-item'>
                <div className='agenda-fecha'>19-6-2017</div>
                <a className='agenda-lugar' href='https://www.google.com.ar/maps/place/Centro+Cultural+Recoleta/@-34.58647,-58.3939406,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccaa24c8efcad:0x4a52ca8190703ddc!8m2!3d-34.58647!4d-58.3917519' target='_blank'>Centro Cultural Recoleta</a>
                <div className='agenda-texto'>
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec.
                </div>
              </div>
            </div>
          </div>
          <div className='imagen' />
        </div>
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
        <Preguntas />
        <div className='listados-contenedor'>
          <h2 className='titulos-principales'>Temas de Fondo</h2>
          <div className='listados-contenedor-interno'>
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
        </div>
        <Frases />
        <Leyendo />
        <div className='pie-contenedor'>
          Footer
        </div>
      </div>
    )
  }
}
