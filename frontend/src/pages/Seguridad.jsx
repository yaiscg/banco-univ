import React from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import seguridad from '../assets/seguridad.png'
import control from '../assets/control.jpg'
import security from '../assets/security.jpg'

import callcenter from '../assets/callcenter.png'
import portatil from '../assets/portatil.png'
import correo from '../assets/correo.png'
import telefonoo from '../assets/telefonoo.png'
import teclado  from '../assets/teclado.png'

import {AiOutlineExclamationCircle} from "react-icons/ai"

const Seguridad = () => {
  return (
    <div className="Seguridad">
      <NavbarPages />

      <div className='w-full h-[300px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={security} alt="/" />
      </div>

      <div className='w-full bg-primary text-center py-4'>
        <h1 className='text-white font-Montserrat text-4xl'>Seguridad</h1>
      </div>

        <div className='bg-white w-full py-8 lg:px-16'>
            <div className='text-justify py-4 px-12 text-lg font-Montserrat'>
            <p className=''>Nuestro compromiso es salvaguardar el patrimonio, información y demás activos de nuestros clientes, es por ello, que es tan importante contar con un alto estandar en el sistema de seguridad de nuestra banca.</p>
            <p className='py-4'>Contamos con un alto nivel de seguridad en nuestra banca en línea, que valida cada inicio de sesión, dispositivo desde el que se inició, tiempo en la aplicación, así como las transacciones realizadas diariamente, para evitar riesgos y posibles estafas. Además contamos con preguntas de seguridad que solamente tú puedes responder.</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 place-items-center py-12 px-12 font-Montserrat bg-primary text-white'>
        
            <div className="border-[3px] border-solid border-white rounded-lg">
                <img src={control} alt="" className="p-4" />
            </div>

            <div className='text-justify text-lg'>
                <div className="font-bold sm:text-[1.5rem] text-[1.5rem] mb-5">
                    Tu seguridad es importante<br /> para nosotros,{" "}
                    <span className="text-secondary">por eso te sugerimos tomar en cuenta las siguientes recomendaciones:</span>
                </div>

                <li>Evita compartir tus contraseñas, códigos, preguntas y respuestas de seguridad, tarjeta de coordenadas o patrón de acceso a la banca móvil.</li>
                <li>Accede directamente a nuestra página desde el navegador de internet.</li>
                <li>Evita suministrar información personal y financiera a través de llamadas, mensajes o correos electrónicos.</li>
                <li>No te confíes de mensajes recibidos vía WhatsApp donde te ofrezcan productos o divisas, así evitas ser víctima de estafas.</li>
            </div>

        </div>

        <div className='bg-blue-100 py-8'>
            <h1 className='text-center font-Montserrat text-3xl py-4 px-2 text-primary font-bold'>Fraudes electrónicos más frecuentes</h1>

            <div className='grid md:grid-cols-5 gap-8  py-4 px-12 font-Montserrat text-center text-lg'>
                
                <div>
                    <img className='w-20 px-2 m-auto' src={callcenter} alt="/" />
                    <h1 className='py-4 text-xl font-bold'>Call center</h1>
                    <p>Los Call Centers fraudulentos intentan parecerse a los reales, por lo que hay que tener sumo cuidado con la información que suministramos vía telefónica.</p>
                </div>

                <div>
                    <img className='w-20 px-2 m-auto' src={teclado} alt="/" />
                    <h1 className='py-4 text-xl font-bold'>Key Logger</h1>
                    <p>Es una modalidad que sirve para almacenar las pulsaciones que se realizan en el teclado con el fin de captar los nombres de usuarios y contraseñas.</p>
                </div>

                <div>
                    <img className='w-20 px-2 m-auto' src={portatil} alt="/" />
                    <h1 className='py-4 text-xl font-bold'>Pharming</h1>
                    <p>Esta modalidad de fraude te induce de forma engañosa a que ingreses a una página web falsa y proporciones tus datos financieros.</p>
                </div>

                <div>
                    <img className='w-20 px-2 m-auto' src={telefonoo} alt="/" />
                    <h1 className='py-4 text-xl font-bold '>Phishing telefónico</h1>
                    <p>Se basa en engañarte a través de una llamada telefónica, desde una oficina de atención en línea falsa, con la finalidad de que proporciones todos tus datos.</p>
                </div>

                <div>
                    <img className='w-20 px-2 m-auto' src={correo} alt="/" />
                    <h1 className='py-4 text-xl font-bold'>Phishing electrónico</h1>
                    <p>Consiste en el envío de correos electrónicos de forma fraudulenta, se hacen pasar por la entidad financiera invitándote a actualizar con carácter de urgencia tus datos. </p>
                </div>


            </div>

        </div>

        <Footer />
        <FooterLine />
    </div>
  )
}

export default Seguridad