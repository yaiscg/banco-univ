import React,{useEffect} from 'react'
import NavbarPages from '../components/NavbarPages'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

import cuentaa from '../assets/cuentaa.jpg'

import tarjetas from '../assets/tarjetas.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { BiTransfer, BiMoneyWithdraw } from "react-icons/bi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdPayment} from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoAlert } from "react-icons/go";




const Cuentas = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="Cuentas">
      <NavbarPages />

      <div className='w-full h-[300px]'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={cuentaa} alt="/" />
      </div>

      <div className='w-full py-8 bg-primary'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
              <div className='flex flex-col justify-center md:items-start w-full px-12'>
              <h2 className='text-3xl font-Montserrat py-4 text-between font-bold text-white'>¿Qué es una cuenta estudiantil?</h2>
                <p className='text-justify text-white font-Montserrat'>Es un instrumento financiero con el que se pueden realizar los movimientos de depósito y retiro en efectivo.</p>
                <p className='text-justify py-4 text-white font-Montserrat'>Con este tipo de cuenta tendrás la posibilidad de realizar transacciones bancarias como transferencias, retiros por el cajero automático, depósito de efectivo, además de la opción de cobrar tu beca, realizar el pago de la matricula, entre otros.</p>
              </div>

              <div className='m-auto w-80 px-8'>
                <img src={tarjetas} alt="/" />
              </div>

            </div>
      </div>

      <div className='container lg:pt-5'>
        <div className='text-center'>
          <h2 className='text-primary font-[800] text-[2.4rem] mb-5 py-4 font-Montserrat'>Beneficios</h2>
        </div>

        <div className='flex flex-col justify-center sm:py-12 text-center'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-gray-700 antialiased text-sm'>

              {/* linea vertical*/}

              <div className='hidden absolute w-1 sm:block bg-blue-200 h-full left-1/2 transform -translate-x-1/2'></div>
              
              {/* empieza izquierda 1*/}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                      <div data-aos="fade-right" data-aos-duration="1200"
                            className='bg-blue-100 p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150'>
                        <BiTransfer className='text-5xl text-primary group-hover:text-white mx-auto'/>
                        <h3 className='text-primary font-Montserrat text-lg mb-3 group-hover:text-white group-hover:font-[600]'>Transferencias sin cobros adicionales</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* termina*/}

              {/* empieza derecha 2*/}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                  <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-end w-full mx-auto items-center'>
                      <div className='w-full sm:w-1/2 sm:pl-8'>
                        <div data-aos="fade-left" data-aos-duration="1300" className='bg-blue-100 p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150'>
                          <BiMoneyWithdraw className='text-5xl text-primary group-hover:text-white mx-auto'/>
                          <h3 className='text-primary font-Montserrat text-lg group-hover:text-white group-hover:font-[600]'>Puedes cobrar tu beca sin asistir al banco</h3>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              {/* termina*/}

              {/* empieza izquierda 3*/}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                      <div data-aos="fade-right" data-aos-duration="1400" className='bg-blue-100 p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150'>
                        <IoPhonePortraitOutline className='text-5xl text-primary group-hover:text-white mx-auto'/>
                        <h3 className='text-primary font-Montserrat text-lg group-hover:text-white group-hover:font-[600]'>La Banca en Línea está a tu disposición para realizar transacciones</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* termina*/}

              {/* empieza derecha 4*/}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                  <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-end w-full mx-auto items-center'>
                      <div className='w-full sm:w-1/2 sm:pl-8'>
                        <div data-aos="fade-left" data-aos-duration="1500" className='bg-blue-100 p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150'>
                          <MdPayment className='text-5xl text-primary group-hover:text-white mx-auto'/>
                          <h3 className='text-primary font-Montserrat text-lg group-hover:text-white group-hover:font-[600]'>Paga tu matricula en donde te encuentres con tu dispositivo</h3>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              {/* termina*/}

              {/* empieza izquierda 5*/}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                      <div data-aos="fade-right" data-aos-duration="1500" className='bg-blue-100 p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150'>
                        <SlEarphonesAlt className='text-5xl text-primary group-hover:text-white mx-auto'/>
                        <h3 className='text-primary font-Montserrat text-lg group-hover:text-white group-hover:font-[600]'>Servicio de atención al cliente las 24h</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* termina*/}

              {/* empieza derecha 6*/}
              <div className='mt-6 sm:mt-0 sm:mb-12'>
                  <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-end w-full mx-auto items-center'>
                      <div className='w-full sm:w-1/2 sm:pl-8'>
                        <div data-aos="fade-left" data-aos-duration="1500" className='bg-blue-100 p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150'>
                          <GoAlert className='text-5xl text-primary group-hover:text-white mx-auto'/>
                          <h3 className='text-primary font-Montserrat text-lg  group-hover:text-white group-hover:font-[600]'>Cuenta que no genera interés</h3>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              {/* termina*/}

            </div>
          </div>
        </div>

      </div>

      <Footer />
      <FooterLine />
    </div>
  )
}

export default Cuentas