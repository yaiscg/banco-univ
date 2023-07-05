import React from 'react'
import NavbarPages from "../components/NavbarPages"
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import cajero from '../assets/cajero.jpg'
import banca from '../assets/bancamovil.png'

import pago from '../assets/pago.png'
import cobro from '../assets/cobro.png'
import retiro from '../assets/retiro.png'
import deposito from '../assets/deposito.png'
import transferencia2 from '../assets/transferencia2.png'


const Servicios = () => {
  return (
    <div className="Servicios">
      <NavbarPages />

      <div className='w-full h-[335px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={cajero} alt="/" />
      </div>

      <div className='w-full py-2 bg-zinc-100'>
            <h2 className='text-4xl font-Montserrat py-4 text-center font-bold text-primary '>Nuestros Servicios</h2>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
              <div className='flex flex-col justify-center md:items-start w-full px-12'>
                <p className='text-justify text-primary font-Montserrat'>Nuestro objetivo es ofrecerles un servicio de calidad, rápido y de alta seguridad, trabajamos todos los días incansablemente para lograrlo; queremos ser la entidad bancaria Nro. 1 de los estudiantes del país, por ellos y para ellos, es que tenemos gran variedad de servicios, físicos y electrónicos, brindándoles comodidad y una gran atención.</p>
              </div>

              <div className='m-auto w-80 px-8'>
                <img src={banca} alt="/" />
              </div>

            </div>
      </div>

      <div className='w-full py-[2rem] px-4 lg:px-24 bg-secondary'>

            <div className='max-w-[1240px] mx-auto gap-8'>

                <div className='w-full bg-zinc-100 shadow-xl flex flex-col p-2 my-2 py-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 px-2 my-2 m-auto' src={transferencia2} alt="/" />
                  <h2 className='text-2xl font-Montserrat text-primary text-center py-2'>1. Transferencias entre estudiantes sin comisión</h2>
                      <div className='text-center font-Montserrat'>
                          <p className='py-2 px-8 mx-2 mt-2 text-justify'>El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de dinero entre los estudiantes universitarios. Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.</p>
                      </div>
                </div>

                <div className='w-full shadow-xl bg-sky-100 flex flex-col p-2 my-2 py-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 px-2 my-2 m-auto' src={deposito} alt="/" />
                    <h2 className='text-2xl font-Montserrat text-primary text-center py-2'>2. Depósitos en efectivo</h2>
                    <div className='text-center font-Montserrat'>
                        <p className='py-2 px-8 mx-2 mt-2 text-justify'>El Banco Universitario permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-zinc-100 flex flex-col p-2 my-2 py-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 px-2 my-2 m-auto' src={retiro} alt="/" />
                    <h2 className='text-2xl font-Montserrat text-primary text-center py-2'>3. Retiros en efectivo</h2>
                    <div className='text-center font-Montserrat'>
                        <p className='py-2 mx-2 px-8 mt-2 text-justify'>El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-sky-100 flex flex-col p-2 my-2 py-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 px-2 my-2 m-auto' src={pago} alt="/" />
                    <h2 className='text-2xl font-Montserrat text-primary text-center py-2'>4. Pago de matrícula estudiantil</h2>
                    <div className='text-center font-Montserrat'>
                        <p className='py-2 mx-2 px-8 mt-2 text-justify'>El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-zinc-100 flex flex-col p-2 my-2 py-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 px-2 my-2 m-auto' src={cobro} alt="/" />
                  <h2 className='text-2xl font-Montserrat text-primary text-center py-2'>5. Cobro de becas estudiantiles</h2>
                      <div className='text-center font-Montserrat'>
                          <p className='py-2 mx-2 px-8 mt-2 text-justify'>El Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.</p>
                      </div>
                </div>

            </div>
        </div>


      <Footer />
      <FooterLine />
    </div>
  )
}

export default Servicios