import React from "react";

import {
    FaInstagramSquare,
    FaTwitterSquare,
    FaFacebookSquare
} from "react-icons/fa"

const FooterLine = () => {
    return (
        <div className="bg-secondary">

            <div className='flex flex-col max-w-[1240px] px-2 mx-auto justify-between sm:flex-row text-center text-cyan-950'>
                <p className='font-bold py-4 justify-center text-xs'>© 2023 BANCO UNIVERSITARIO. Todos los derechos reservados.</p>
                <div className='flex justify-center sm:w-[300px] pt-2 text-2xl'>
                    <a href="https://www.facebook.com/bancouniversitariove" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare />
                    </a>
                    <a href="https://www.instagram.com/bancouniversitariove" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare />
                    </a>
                    <a href="https://www.twitter.com/bancouniversitariove" target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare />
                    </a>
                </div>
            </div>

            <div className="sm:flex-row text-center text-cyan-950 px-12 py-2 text-base">
                <p>Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela.</p>
            </div>
        </div>  

    )

}

export default FooterLine