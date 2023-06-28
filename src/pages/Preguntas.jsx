import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import Accordion from "../components/Accordion";

import pregunta from '../assets/pregunta.png'

const Preguntas = () => {
  return (
    <div className="preguntas">
      <NavbarPages />

      <div className='w-full'>

        <div className='w-full h-[300px] absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={pregunta} alt="/" />
        </div>
        
        <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-28'>
            <h2 className='text-4xl font-Montserrat py-12 text-center'>Preguntas frecuentes</h2>
          </div>

        </div>

      </div>

      <div className='bg-white'>
        <div className="text-center my-4 px-8 text- font-Montserrat">
          Consulta las preguntas que te ayudarán a aclarar alguna duda sobre un producto o servicio mediante respuestas rápidas y puntuales.
        </div>
        <div className="mt-12 max-w-[700px] mx-auto font-Montserrat text-gray-600">
          {accordions.map((accordion) => {
            return <Accordion key={accordion.id} {...accordion} />;
          })}
        </div>
      </div>

      <Footer />
      <FooterLine />
    </div>
  )
}

export default Preguntas


export const accordions = [
  {
    id: 1,
    title: "¿Cómo afiliarse a la Banca en línea?",
  },
  {
    id: 2,
    title: "¿Qué hago si olvidé mi contraseña?",
  },
  {
    id: 3,
    title: "¿Dónde queda ubicada la sede principal?",
  },
  {
    id: 4,
    title: "¿Que universidades pueden formar parte del Banco?",
  },
  {
    id: 5,
    title: "¿Cómo hago para agregar un contacto a la Agenda?",
  }
];