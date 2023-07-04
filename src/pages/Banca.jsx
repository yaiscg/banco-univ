import React from 'react'

import { Link } from "react-router-dom";

import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import banca from '../assets/banca.png'
import ordenador from '../assets/ordenador.png'

import menu from '../assets/menu.png'
import transferencia from '../assets/transferencia.png'
import perfil from '../assets/perfil.png'
import agenda from '../assets/agenda.png'
import billetera from '../assets/billetera.png'

const Banca = () => {
  return (
    <div className="Banca">
      <NavbarPages />

      <div className='w-full h-[335px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={banca} alt="/" />
      </div>

      <div className='w-full py-2 bg-primary'>
            <h2 className='text-4xl font-Montserrat py-4 text-center font-bold text-white '>Nuestra Banca en Línea</h2>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
              <div className='flex flex-col justify-center md:items-start w-full px-12'>
                <h3 className='text-center font-Montserrat font-bold text-white'>Un servicio en línea rápido y seguro.</h3>
                <p className='text-justify my-4 text-white'> Con nuestra banca en línea consulta tu saldo y realiza tus transacciones por internet, en donde te encuentres y a la hora que desees, siendo esta una plataforma fácil de manejar, intuitiva y segura. Ahora solo necesitas un dispositvo y acceso a internet, para realizar transferencias a terceros y muchas cosas más...</p>
                <button className="py-3 px-6 sm:w-[40%] my-2 bg-secondary border-secondary"><Link to={"/inicio"}>Unete ahora</Link></button>
              </div>

              <div className='m-auto w-60 px-8 py-8 my-6'>
                <img src={ordenador} alt="/" />
              </div>

            </div>
      </div>

      <div className=' bg-white w-full my-12'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='text-center'>
            <h2 className='text-4xl font-Montserrat text-primary'>El Banco Universitario en la palma de tu mano</h2>
            <p className='py-6 text-gray-500 font-Montserrat'>Ahora todos nuestros servicios los puedes encontrar en tu dispositivo, ordenador, tablet o móvil.</p>
          </div>

          <div className='grid md:grid-cols-5 gap-1 px-2 text-center'>

              <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 bg-teal-50'>
                <img className='w-20 px-2 py-6 my-2 m-auto' src={menu} alt="/" />
                <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Menú</h2>
                    <div className='text-center font-light'>
                        <p className='py-2 mx-2 mt-2'>Realiza todas tus operaciones con un solo click al menú.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-green-100 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 px-2 py-6 my-2 m-auto' src={transferencia} alt="/" />
                    <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Realiza transferencias</h2>
                    <div className='text-center font-light'>
                        <p className='py-2 mx-2 mt-2'>Realiza transferencias a terceros y a tus contactos frecuentes.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-teal-50 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 px-2 py-6 my-2 m-auto' src={billetera} alt="/" />
                    <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Consulta tus saldo y movimientos</h2>
                    <div className='text-center font-light'>
                        <p className='py-2 mx-2 mt-2'>Visualiza el monto disponible en tu cuenta y el historico de movimientos.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-green-100 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 px-2 py-6 my-2 m-auto' src={agenda} alt="/" />
                    <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Agenda</h2>
                    <div className='text-center font-light'>
                        <p className='py-2 mx-2 mt-2'>Agrega tus contactos frecuentes a la agenda, agrega, edita y elimina.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-teal-50 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 px-2 py-6 my-2 m-auto' src={perfil} alt="/" />
                    <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Perfil</h2>
                    <div className='text-center font-light'>
                        <p className='py-2 mx-2 mt-2'>Gestiona tus claves, ingresa a tu agenda, visualiza tu información personal, entre otros.</p>
                    </div>
                </div>
          </div>

          <div className='text-center py-4'>
            <button className="py-3 px-6 sm:w-[20%] my-2"><Link to={"/servicios"}>Conoce otros servicios</Link></button>
          </div>

        </div>

      </div>

      <Footer />
      <FooterLine />
    </div>
  )
}

export default Banca
