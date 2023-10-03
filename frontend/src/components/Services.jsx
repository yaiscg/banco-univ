import React from "react";

import {ArrowsRightLeftIcon, BanknotesIcon, CurrencyDollarIcon, ArrowLeftOnRectangleIcon, CheckCircleIcon} from '@heroicons/react/24/outline';

const Services = () => {
    return (
        <div name="one" className='w-full py-[5rem] px-8 bg-primary'>
            <h1 className="text-center text-5xl font-Montserrat text-white py-4">SERVICIOS</h1>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8'>

                <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 bg-zinc-100'>
                <ArrowsRightLeftIcon className='mx-auto text-primary w-16 p-4'/>
                <h2 className='text-xl border-b font-Montserrat text-primary text-center py-2'>1. Transferencias entre estudiantes sin comisión</h2>
                    <div className='text-center font-light text-xl'>
                        <p className='py-2 mx-2 mt-2'>El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-zinc-100 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                    <BanknotesIcon className='mx-auto text-primary w-16 p-4'/>
                    <h2 className='text-xl border-b font-Montserrat text-primary text-center py-6'>2. Depósitos en efectivo</h2>
                    <div className='text-center font-light text-xl'>
                        <p className='py-2 mx-2 mt-2'>Permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-zinc-100 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                    <CurrencyDollarIcon className='mx-auto text-primary w-16 p-4'/>
                    <h2 className='text-xl border-b font-Montserrat text-primary text-center py-8'>3. Retiros en efectivo</h2>
                    <div className='text-center font-light text-xl'>
                        <p className='py-2 mx-2 mt-2'>Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco.</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-zinc-100 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                    <ArrowLeftOnRectangleIcon className='mx-auto text-primary w-16 p-4'/> 
                    <h2 className='text-xl border-b font-Montserrat text-primary text-center py-2'>4. Pago de matrícula estudiantil</h2>
                    <div className='text-center font-light text-xl'>
                        <p className='py-2 mx-2 mt-2'>Permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. </p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-zinc-100 flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300'>
                <CheckCircleIcon className='mx-auto text-primary w-16 p-4'/>
                <h2 className='text-xl border-b font-Montserrat text-primary text-center py-6'>5. Cobro de becas estudiantiles</h2>
                    <div className='text-center font-light text-xl'>
                        <p className='py-2 mx-2 mt-2'>Permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services