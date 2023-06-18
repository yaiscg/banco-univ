import React from "react";

const Footer = () => {
    return (

        <div className='w-full mt-24 bg-primary text-white py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8'>

            <div>
                <h6 className='font-bold uppercase pt-2'>Estudiantes</h6>
                <ul>
                    <li className='py-1'>Servicios prestados</li>
                    <li className='py-1'>Cuentas</li>
                    <li className='py-1'>Becas estudiantiles</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Nosotros</h6>
                <ul>
                    <li className='py-1'>Historia</li>
                    <li className='py-1'>Finalidad</li>
                    <li className='py-1'>Sala de prensa</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Banca en línea</h6>
                <ul>
                    <li className='py-1'>Funcionamiento</li>
                    <li className='py-1'>Pago de matrícula</li>
                    <li className='py-1'>Transferencias sin comisión</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>De interés</h6>
                <ul>
                    <li className='py-1'>Seguridad</li>
                    <li className='py-1'>Noticias</li>
                    <li className='py-1'>Atención al Cliente</li>

                </ul>
            </div>

            <div className="col-span-2">
                <h6 className='font-bold uppercase pt-8 md:pt-2'>CONTACTO</h6>
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