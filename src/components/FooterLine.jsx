import React from "react";

import {
    FaSquareFacebook,
    FaInstagramSquare,
    FaTwitterSquare,
    FaFacebookSquare
} from "react-icons/fa"

const FooterLine = () => {
    return (
        <div className="bg-secondary">

        <div className='flex flex-col max-w-[1240px] px-2 mx-auto justify-between sm:flex-row text-center text-cyan-950'>
        <p className='font-bold py-4'>© 2023 BANCO UNIVERSITARIO. Todos los derechos reservados.</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaTwitterSquare />

        </div>
        </div>

        <div className="sm:flex-row text-center text-cyan-950">
        <p className='py-1'>Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela.</p>
        </div>
        </div>

    )

}

export default FooterLine