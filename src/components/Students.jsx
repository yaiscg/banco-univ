import React from "react";

import {CurrencyDollarIcon, UserGroupIcon,ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

import estudiantes from '../assets/estudiantes.jpg'

const Students = () => {
    return (
        <div name='support' className='w-full mt-24'>
            <div className='w-full h-[700px] bg-black/50 absolute'>
              <img className='w-full h-full object-cover mix-blend-overlay' src={estudiantes} alt="/" />
            </div>
            
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-5xl font-bold py-6 text-center'>EL BANCO DEL ESTUDIANTE</h2>
                    <h3 className='text-2xl pt-8 text-slate-300 text-center'>En el banco universitario, queremos brindarte una mano amiga, sabemos lo complicada que es la vida del estudiante, por eso esta es la plataforma ideal para ti…</h3>
                </div>
      
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <CurrencyDollarIcon className='w-16 p-4 bg-secondary text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Servicio Eficiente</h3>
                            <p className='text-gray-600 text-xl'>Servicio eficiente y de calidad para la gestión de tus recursos financieros con nuestros servicios.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-primary'>Ahorra comodo y seguro.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ArrowRightOnRectangleIcon className='w-16 p-4 bg-secondary text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Banca en línea</h3>
                            <p className='text-gray-600 text-xl'>Contamos con la Banca en línea, en donde puedes realizar tus transacciones de forma práctica.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-primary'>Puedes ingresar cuando y donde quieras.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <UserGroupIcon className='w-16 p-4 bg-secondary text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Alianzas</h3>
                            <p className='text-gray-600 text-xl'>Tenemos alianzas estratégicas con las universidades y empresas más importantes del país.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-primary'>Brindandote confianza y oportunidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    
}

export default Students