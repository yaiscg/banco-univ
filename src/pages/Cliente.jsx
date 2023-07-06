import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import atencion from '../assets/atencion.jpg'

import { BsTwitter,BsInstagram,BsFacebook} from "react-icons/bs";


const Cliente = () => {
  return (
    <div className="Cliente">
      <NavbarPages />

      <div className='w-full h-[300px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={atencion} alt="/" />
      </div>

      <div className='w-full bg-primary text-center py-6'>
        <h1 className='text-white font-Montserrat text-4xl'>Atención al cliente</h1>
      </div>

      <div className='w-full text-justify py-4 px-24 font-Montserrat text-lg'>
        <p className='py-6'>Ponemos a tu disposición nuestro buzón: info@bancouniversitario.com.ve y el servicio de atención telefónica las 24 horas del día a través del +58 212-555-5555 donde puedes realizar consultas, solicitudes y reclamos. </p>
        <p className='py-4'>Tus comentarios y sugerencias son importantes para nosotros, ya que nos ayudan a la optimización de nuestro proceso de atención inspirado en el compromiso que tenemos con cada uno de los estudiantes venezolanos.</p>
        <h1 className='py-4'>También tenemos para ti nuestro Fax: +58 212-555-5556</h1>
        <h2 className='py-4'>¡Te queremos escuchar!</h2>
      </div>

      <div className='bg-white w-full'>
        <h2 className='font-Montserrat text-center py-4 text-2xl px-4 text-primary'>Síguenos a través de nuestras redes sociales:</h2>

        <div className='grid md:grid-cols-3 px-2 text-center'>

          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 bg-blue-100'>
            <BsFacebook className='text-6xl text-blue-700 mx-auto'/>
            <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Facebook</h2>
            <h2 className='text-xl font-Montserrat text-primary text-center py-2'>@bancouniversitariove</h2>
          </div>

          <div className='w-full shadow-xl bg-rose-50 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
            <BsInstagram className='text-6xl text-pink-600 mx-auto'/>
            <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Instagram</h2>
            <h2 className='text-xl font-Montserrat text-primary text-center py-2'>@bancouniversitariove</h2>
          </div>

          <div className='w-full shadow-xl bg-blue-100 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
            <BsTwitter className='text-6xl text-blue-400 mx-auto'/>
            <h2 className='text-xl font-Montserrat text-primary text-center py-2'>Twitter</h2>
            <h2 className='text-xl font-Montserrat text-primary text-center py-2'>@bancouniversitariove</h2>
          </div>

        </div>

      </div>

      <Footer />
      <FooterLine />

    </div>
  )
}

export default Cliente