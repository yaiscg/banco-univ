import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import Accordion from "../components/Accordion";

import hombre from '../assets/hombre.jpg'

const Preguntas = () => {
  return (
    <div className="preguntas">
      <NavbarPages />

        <div className='w-full h-[300px]'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={hombre} alt="/" />
        </div>

        <div className='w-full bg-primary text-center py-4'>
          <h1 className='text-white font-Montserrat text-4xl'>Preguntas Frecuentes</h1>
        </div>


      <div className='bg-white px-12'>
        <div className="text-center my-4 py-4 px-8 text-xl font-Montserrat">
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