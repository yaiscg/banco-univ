import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import estudiantes2 from '../assets/estudiantes2.png'

import {BsCheck2Circle} from "react-icons/bs"

const Valores = () => {
  return (
    <div className="Valores">
      <NavbarPages />

      <div className='w-full h-[300px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={estudiantes2} alt="/" />
      </div>

      <div className='w-full px-4 py-2 bg-zinc-50'>
            <h2 className='text-5xl font-Montserrat py-4 text-center font-bold text-primary '>Valores</h2>
            <h3 className='text-base py-2 font-Montserrat text-black text-center'>Somos una entidad financiera dirigida especialmente a los estudiantes, ya que contamos con alianzas con las universidades más reconocidas del país, brindando un servicio de primera. Queremos ayudarte en la gestión de tus recursos económicos, de manera sencilla y segura.</h3>
      </div>

      <div className='w-full px-4 py-12 bg-accent'>

          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            
            <div className='pt-2 text-center'>
              <h1 className='text-5xl font-Montserrat py-2 text-primary font-bold'>Misión</h1>
              <div className='text-justify py-4 px-8'>
                <p>Somos una institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.</p>
              </div>
            </div>

            <div className='pt-2 text-center'>
              <h1 className='text-5xl font-Montserrat py-2 text-primary font-bold'>Visión</h1>
              <div className="text-justify py-4 px-8">
                <p>Queremos ser la mejor opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social.</p>
              </div>
            </div>
          </div>

      </div>
  
      <div className='w-full bg-zinc-50 py-12'>
          <h1 className='text-5xl font-Montserrat py-4 text-primary font-bold text-center '>Objetivos</h1>
          
          <div className='px-16 text-justify'>

            <div className="md:flex pr-4">
              <BsCheck2Circle className="w-10 text-primary text-6xl"/>
              <h2 className='px-2 py-2 font-Montserrat text-black'>Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial.</h2>
            </div>

            <div className="md:flex pr-4">
              <BsCheck2Circle className="w-10 text-primary text-6xl"/>
              <h3 className='px-2 py-2 font-Montserrat text-black'>Fomentar el uso de nuestras plataformas digitales para hacer transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.</h3>
            </div>

            <div className="md:flex pr-4">
              <BsCheck2Circle className="w-10 text-primary text-6xl"/>
              <h4 className='px-2 py-2 font-Montserrat'>Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito.</h4>
            </div>
            
            <div className="md:flex pr-4">
              <BsCheck2Circle className="w-10 text-primary text-6xl"/>
              <h5 className='px-2 py-2 font-Montserrat'>Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.</h5>
            </div>

            <div className="md:flex pr-4">
              <BsCheck2Circle className="w-10 text-primary text-6xl"/>
              <h1 className='px-2 py-2 font-Montserrat'>Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.</h1>
            </div>

          </div>
          
      </div>

      <Footer />
      <FooterLine />
    </div>
  )
}

export default Valores