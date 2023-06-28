import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
    return (

        <div name ="four" className='w-full bg-primary text-white py-12 px-8'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6'>

            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>Estudiantes</h6>
                <ul>
                    <li className='py-1'>
                        <Link to={"/servicios"}>Servicios prestados</Link>
                    </li>
                    <li className='py-1'>
                        <Link to={"/cuentas"}>Cuentas</Link>
                    </li>
                    <li className='py-1'>
                        <Link to={"/becas"}>Becas estudiantiles</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>Nosotros</h6>
                <ul>
                    <li className='py-1'>
                    <Link to={"/historia"}>Historia</Link>
                    </li>

                    <li className='py-1'>
                        <Link to={"/valores"}>Valores</Link>
                    </li>

                    <li className='py-1'>
                        <Link to={"/prensa"}>Sala de Prensa</Link>
                    </li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>Banca en línea</h6>
                <ul>
                    <li className='py-1'>
                        <Link to={"/banca"}>Conocela</Link>
                    </li>
                    
                    <li className='py-1'>
                        <Link to={"/pagos"}>Pago de Matrícula</Link>
                    </li>

                    <li className='py-1'>
                        <Link to={"/transferencias"}>Transferencias sin comisión</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 font-Montserrat'>De interés</h6>
                <ul>
                    <li className='py-1'>Seguridad</li>
                    <li className='py-1'>Noticias</li>
                    <li className='py-1'>
                        <Link to={"/cliente"}>Atención al cliente</Link>
                    </li>

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