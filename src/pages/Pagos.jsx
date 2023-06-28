import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import chica from '../assets/chica.jpg'

import {BsCheck2Circle} from "react-icons/bs"

import { Tb24Hours } from "react-icons/tb";
import { FcOvertime, FcReadingEbook, FcFlashOn, FcMultipleDevices } from "react-icons/fc";

const Home = () => {
  return (
    <div className="Pagos">
	    <NavbarPages/>

        <div className='w-full h-[330px]'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={chica} alt="/" />
        </div>

        <div className='w-full px-4 py-12 bg-zinc-100'>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            
                <div className='pt-2 text-center'>
                    <h1 className='text-3xl font-Montserrat py-2 text-primary font-bold'>Ahora puedes pagar tu matrícula en línea…</h1>
                    <div className='text-justify py-4 px-8'>
                    <p className='text-xl'>Gracias a la Banca en línea, puedes pagar tu matricula estudiantil de forma rápida y sencilla, este servicio está disponible las 24 horas del día, por lo que puedes pagar en el momento que desees y necesites. </p>
                    <h2 className='font-Montserrat py-6 text-primary text-xl'>¡Estamos para hacerte la vida más fácil!</h2>
                    </div>
                </div>

                <div className='px-16'>
                    <div className="md:flex pr-4">
                    <FcFlashOn className="w-10 text-primary text-6xl"/>
                    <h2 className='px-2 py-4 font-Montserrat text-black text-xl'>Rápidez</h2>
                    </div>

                    <div className="md:flex pr-4">
                    <FcReadingEbook className="w-10 text-primary text-6xl"/>
                    <h3 className='px-2 py-4 font-Montserrat text-black text-xl'>Comodidad</h3>
                    </div>

                    <div className="md:flex pr-4">
                    <FcOvertime className="w-10 text-6xl"/>
                    <h4 className='px-2 py-4 font-Montserrat text-xl'>A tiempo</h4>
                    </div>

                    <div className="md:flex pr-4">
                    <FcMultipleDevices className="w-10 text-green-500 text-6xl"/>
                    <h4 className='px-2 py-4 font-Montserrat text-xl'>Servicio en línea</h4>
                    </div>

                    <div className="md:flex pr-4">
                    <Tb24Hours className="w-10 text-green-500 text-6xl"/>
                    <h4 className='px-2 py-4 font-Montserrat text-xl'>Disponible las 24h</h4>
                    </div>
                </div>

            </div>

        </div>

        

        <Footer />
        <FooterLine />
    </div>
  )
}

export default Home