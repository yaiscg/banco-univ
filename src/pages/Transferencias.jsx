import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import transferir from '../assets/transferir.png'

import dinero from '../assets/dinero.png'
import contacto from '../assets/contacto.png'
import comision from '../assets/comision.png'


const Transferencias = () => {
  return (
    <div className="Transferencias">
      <NavbarPages />

      <div className='w-full bg-primary'>
        <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto py-20'>

          <div className='pt-20 text-center'>
            <h3 className='text-4xl py-4 font-Montserrat font-bold text-white'>Transferencias sin comisión</h3>
            <div className='text-justify py-4 px-8 text-lg'>
              <p className='text-justify py-2 text-white'>Así como lo lees, el Banco Universitario te ofrece un servicio de transferencias entre estudiantes sin ningún costo adicional, por lo que ahora es más fácil el intercambio de dinero. En el Menú de nuestra Banca en Línea, puedes acceder a la opción de transferencias, en donde puedes transferir dinero a la cuenta de un tercero, la cual se hace efectiva de manera inmediata, por lo que el receptor puede disponer de él al segundo de realizarse.</p>
              <p className='text-justify py-6 text-white'>¡Ahorra dinero y tiempo! Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.</p>
            </div>
          </div>

          <div className='m-auto w-80 px-8 py-8'>
            <img src={transferir} alt="/" />
          </div>
        </div>
      </div>

      <div className='bg-white w-full'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>

            <div className='w-full flex flex-col p-2 my-2 rounded-lg'>
              <img className='w-40 px-2 py-6 my-2 m-auto' src={dinero} alt="/" />
              <h2 className='text-3xl font-Montserrat text-primary text-center py-2'>Transferencia inmediata</h2>
              <div className='text-center font-light'>
                <p className='py-2 mx-2 mt-2 text-2xl'>El dinero se hace efectivo de manera inmediata, pudiendo disponer de él al segundo.</p>
              </div>
            </div>

            <div className='w-full flex flex-col p-2 my-2 rounded-lg'>
              <img className='w-40 px-2 py-6 my-2 m-auto' src={comision} alt="/" />
              <h2 className='text-3xl font-Montserrat text-primary text-center py-2'>Sin comisión</h2>
              <div className='text-center font-light'>
                <p className='py-2 mx-2 mt-2 text-2xl'>Realiza transferencias sin costo adicional a terceros pertenecientes al Banco Universitario.</p>
              </div>
            </div>

            <div className='w-full flex flex-col p-2 my-2 rounded-lg'>
              <img className='w-40 px-2 py-6 my-2 m-auto' src={contacto} alt="/" />
              <h2 className='text-3xl font-Montserrat text-primary text-center py-2'>Transfiere a contactos frecuentes</h2>
              <div className='text-center font-light'>
                <p className='py-2 mx-2 mt-2 text-2xl'>Puedes realizar tus transferencias a los contactos de siempre sin añadir una y otra vez los datos.</p>
              </div>
            </div>

          </div>


        </div>

      </div>

      <Footer />
      <FooterLine />
    </div>
  )
}

export default Transferencias