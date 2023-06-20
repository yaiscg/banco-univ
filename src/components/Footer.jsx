import React from "react";

const Footer = () => {
    return (

        <div name ="four" className='w-full bg-primary text-white py-12 px-8'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6'>

            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>Estudiantes</h6>
                <ul>
                    <li className='py-1'>Servicios prestados</li>
                    <li className='py-1'>Cuentas</li>
                    <li className='py-1'>Becas estudiantiles</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>Nosotros</h6>
                <ul>
                    <li className='py-1'>Historia</li>
                    <li className='py-1'>Valores</li>
                    <li className='py-1'>Sala de prensa</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>Banca en línea</h6>
                <ul>
                    <li className='py-1'>Funcionamiento</li>
                    <li className='py-1'>Pago de matrícula</li>
                    <li className='py-1'>Transferencias sin comisión</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>De interés</h6>
                <ul>
                    <li className='py-1'>Seguridad</li>
                    <li className='py-1'>Noticias</li>
                    <li className='py-1'>Atención al Cliente</li>

                </ul>
            </div>

            <div className="col-span-2">
                <h6 className='font-bold pt-8 md:pt-2 font-Montserrat'>Contacto</h6>
                <ul>
                    <li className="py-1">Teléfono: +58 212-555-5555</li>
                    <li className="py-1">Fax: +58 212-555-5556</li>
                    <li className="py-1">Correo electrónico: info@bancouniversitario.com.ve</li>
                </ul>
            </div>
            
        </div>

    </div>
    )

}

export default Footer