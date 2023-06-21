import React from 'react'

import NavbarPages from "../components/NavbarPages"
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import manos from '../assets/manos.png'

import {BsCheck2Circle} from "react-icons/bs"

const Historia = () => {
    return (
      <div className="Historia">
        <NavbarPages />

        <div className='w-full h-[300px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={manos} alt="/" />
        </div>

      <div className='w-full h-full px-4 py-8 bg-zinc-50'>
            <h2 className='text-5xl font-Montserrat py-4 text-center font-bold text-primary '>Historia</h2>
            <h3 className='text-base py-4 px-12 font-Montserrat text-black text-justify'>
            Tenemos 5 años en el mercado, prestando servicios financieros a estudiantes mediante sus sucursales, cajeros electrónicos, y ahora con su banca en línea, donde pueden realizar todas sus transacciones de manera fácil, sencilla y cómoda. El proceso de transformación generado en estos meses, permite hoy al Banco Universitario ofrecer a sus clientes el acceso al Banco a cualquier hora, desde cualquier lugar y de la manera más conveniente, brindando calidad de atención y una amplia y novedosa plataforma digital que facilita la gestión de distintas operaciones.
            </h3>
            <h3 className='text-base py-4 px-12 font-Montserrat text-black text-justify'>
            Nuestro compromiso es con cada uno de los estudiantes de este país, brindándoles un servicio que les facilite la vida, sabemos lo complicada que es cursar una carrera universitaria, por eso, más que una gestión financiera, queremos ofrecerles atención, herramientas, una mano amiga. Enfocados en mantener el posicionamiento alcanzado como institución ágil, moderna, eficiente, segura y diferenciadora de su competencia, trabajando por un futuro mejor para las personas.
            </h3>
            <h3 className='text-base py-4 px-12 font-Montserrat text-black text-justify'>
            Con más de 5 años de operaciones en Venezuela, en el Banco Universitario sólo podemos sentir un gran orgullo al ver realizados tantos logros y sueños en los que nuestra Institución siempre ha estado de la mano con el país, favoreciendo el desarrollo del país y de su gente, ya que los estudiantes son el futuro.
            </h3>
      </div>

        <Footer />
        <FooterLine />
      </div>
    )
  }
  
  export default Historia