import React, {useState} from "react";

import {Bars3Icon,UserPlusIcon,XCircleIcon} from "@heroicons/react/24/outline"

import logo from '../assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    //flex justify-center items-center
    return (
        <div className="w-screen h-[80 px] z-10 bg-white fixed drop-shadow-lg mx-auto py-4">
            <div className="px-2 flex justify-center items-center w-full h-full">
                <div className="flex items-center">
                    
                <div className="text-xl text-cyan-700 uppercase tracking-wide font-bold">Banco Universitario</div>
                    
                    <ul className="hidden md:flex">          {/*tipo de letra*/}
                        <li>Nosotros</li>
                        <li>Estudiantes</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>

                </div>

                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black flex px-4 py-4">
                        Regístrate
                    </button>

                    <button className="flex px-4 py-4">
                        Inicia sesión
                    </button>

                </div>

                <div className="md:hidden ml-4" onClick={handleClick}>
                    {!nav ? <Bars3Icon className="w-5" /> : <XCircleIcon className="w-5" />}
                </div>

            </div>


            <ul className={!nav ? "hidden" : "absolute bg-zinc-50 w-full px-8"}>
                <li className="border-b-2 border-gray-200 w-full">Nosotros</li>
                <li className="border-b-2 border-gray-200 w-ful">Estudiantes</li>
                <li className="border-b-2 border-gray-200 w-ful">Servicios</li>
                <li className="border-b-2 border-gray-200 w-ful">Contacto</li>

                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-cyan-700 px-8 py-3 mb-4">Regístrate</button>
                    <button className="px-8 py-3">Inicia sesión</button>
                </div>
            </ul>


        </div>

    )
}

export default Navbar