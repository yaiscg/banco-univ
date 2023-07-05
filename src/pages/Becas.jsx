import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import amigos from '../assets/amigos.jpg'

import ahorro from '../assets/ahorro.jpg'

import universidad from '../assets/universidad.jpg'


const Becas = () => {
  return (
    <div className="Becas">
      <NavbarPages />

      <div className='w-full h-[300px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={amigos} alt="/" />
      </div>

      <div className='w-full bg-primary text-center py-6'>
        <h1 className='text-white font-Montserrat text-4xl'>Becas Estudiantiles</h1>
      </div>

      <div className='bg-white w-full py-8 px-4 lg:px-24'>

        <h1 className='text-primary text-2xl font-Montserrat text-center'> Comprometidos con la educación y el futuro social.</h1>
        <p className='py-4 px-8 text-lg font-Montserrat text-justify'>El banco universitario permite a los estudiantes cobrar sus becas a través de él, ya se retirando en efectivo en los cajeros o sucursales, o a través de la banca en línea pueden verificar que la beca ha sido depositada y realizar sus respectivas transacciones. Con esta ilusión y compromiso, colaboramos activamente en distintos programas de formación de alto valor con nuestro programa de BECAS BANCO UNIVERSITARIO, con el objetivo de impulsar el acceso al conocimiento.</p>
      </div>

      <div className='grid md:grid-cols-2 gap-8 place-items-center py-6 px-12 font-Montserrat bg-secondary items-center justify-center'>

        <div className='text-justify'>
            <div className="font-bold sm:text-[1.5rem] text-[1.5rem] mb-5 text-primary">
              ¿Qué es una Beca Estudiantil?
            </div>

            <p>Una beca es un apoyo económico, que se ofrece al estudiante por parte de una organización con la finalidad de que continúe o complete sus estudios. Para que el alumno pueda recibir este beneficio, debe cumplir con una serie de condiciones o requisitos, los cuales van a depender de la institución que la esté otorgando; sin embargo, el más sobresaliente es el contar con un buen rendimiento o récord académico.</p>
        </div>

        <div className="border-[2px] border-solid border-white rounded-lg w-80">
            <img src={ahorro} alt="" className="p-4" />
        </div>

      </div>


      <div className='w-full'>

        <div className='w-full h-[788px] bg-black/50 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={universidad} alt="/" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
          
          <div className='px-4 py-12'>
            <h2 className='text-4xl font-Montserrat text-center'>Pasos generales para obtener una Beca Universitaria</h2>
          </div>

          <div className='grid grid-cols-3 place-items-center px-12 font-Montserrat '>
            
            <div></div>

            <div>

              <div className='w-full shadow-xl bg-secondary flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl font-Montserrat text-primary text-center py-2'>Paso 1</h2>
                <p className='text-xl font-Montserrat text-primary text-center py-2'>Dirígete al departamento de Bienestar Estudiantil de tu universidad.</p>
              </div>

              <div className='w-full shadow-xl bg-emerald-400 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl font-Montserrat text-primary text-center py-2'>Paso 2</h2>
                <p className='text-xl font-Montserrat text-primary text-center py-2'>Solicita la beca y completa los recaudos correspondientes.</p>
              </div>

              <div className='w-full shadow-xl bg-green-400 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl font-Montserrat text-primary text-center py-2'>Paso 3</h2>
                <p className='text-xl font-Montserrat text-primary text-center py-2'>Abre una cuenta en nuestro Banco Universitario</p>
              </div>

              <div className='w-full shadow-xl bg-green-300 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl font-Montserrat text-primary text-center py-2'>Paso 4</h2>
                <p className='text-xl font-Montserrat text-primary text-center py-2'>Una vez sea aprobada tu solicitud, en la fecha correspondiente tu beca será depositada en tu cuenta de nuestro banco. </p>
              </div>

            </div>

            <div></div>

          </div>
                
        </div>


      </div>

      <Footer />
      <FooterLine />
    </div>
  )
}

export default Becas