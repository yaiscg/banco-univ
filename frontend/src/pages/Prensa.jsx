import React from 'react'

import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import prensa from '../assets/prensa.png'

const Prensa = () => {
  return (
    <div className="Prensa">
      <NavbarPages />

      <div className='w-full h-[300px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={prensa} alt="/" />
      </div>

      <div className='w-full bg-primary text-center py-4'>
        <h1 className='text-white font-Montserrat text-4xl'>Sala de Prensa</h1>
      </div>

      <div className='w-full px-16 py-8 mx-auto grid md:grid-cols-2 bg-white text-lg'>
        <h1 className='border-b border-black text-center px-2 py-4'>Fecha</h1>
        <h1 className='border-b border-black text-center px-2 py-4'>Descripción</h1>

        <h1 className='border-b border-black text-center text-slate-800 px-2 py-4'>01/07</h1>
        <h1 className='border-b border-black text-between text-slate-800 px-2 py-4'>Banco Universitario próximamente realizará el lanzamiento de su Banca en Línea.</h1>

        <h1 className='border-b border-black text-center text-slate-800 px-2 py-4'>01/07</h1>
        <h1 className='border-b border-black text-between text-slate-800 px-2 py-4'>Banco Universitario lanza su sitio web, disponible para todos los dipositivos.</h1>

        <h1 className='border-b border-black text-center text-slate-800 px-2 py-4'>22/06</h1>
        <h1 className='border-b border-black text-between text-slate-800 px-2 py-4'>Banco Universitario planea lanzar en el próximo mes su sitio web, para luego saltar al mercado con su banca en línea.</h1>
      </div>

      <Footer />
      <FooterLine />
    </div>
  )
}

export default Prensa