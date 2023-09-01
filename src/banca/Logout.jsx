import React from "react";
import { Link } from "react-router-dom";

import logo from '../banca/assets/logo.png'

import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen bg-gray-200">

            <div className="grid md:grid-cols-3 place-items-center py-28">
                
                <div></div>

                <div className=" relative flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    
                    <img className='w-30 py-6 px-10 m-auto' src={logo} alt="/" />

                    <div className="flex flex-col justify-center md:p-4 text-center">
                        <span className="font-light text-gray-600 mb-2 text-xl">Tu sesión finalizó exitosamente.</span>
                        <span className="font-light text-gray-600 mb-2 text-xl">Gracias por usar nuestro servicio.</span>
                        <span className="mb-3 text-sm font-semibold  text-primary py-2">© 2023 BANCO UNIVERSITARIO</span>
                    </div>

                    <div className="text-center py-4">
                        <button className="text-center py-2 px-6 sm:w-[30%] bg-secondary border-secondary hover:text-secondary"
                                onClick={() => navigate("/home")}>
                        Aceptar
                        </button>
                    </div>

                </div>

                <div></div>

            </div>

        </div>
    )
    
}

export default Logout