import React, {useState} from "react";

import {Bars3Icon,UserPlusIcon,XCircleIcon} from "@heroicons/react/24/outline"

import logo from '../assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80 px] z-10 bg-zinc-50 fixed drop-shadow-lg mx-auto py-4">
            <div className="px-10 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className='text-2xl font-bold mr-4 sm:text-2xl text-primary'>BANCO UNIVERSITARIO</h1>
                    <ul className='hidden md:flex'>  {/*tipo de letra*/}
                        <li>Nosotros</li>
                        <li>Estudiantes</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>
                </div>

                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4">Regístrate</button>

                    <button className="px-8 py-4">Acceso</button>
                </div>

                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <Bars3Icon className="w-5" /> : <XCircleIcon className="w-5" />}
                </div>

            </div>


            <ul className={!nav ? "hidden" : "absolute bg-zinc-50 w-full px-8"}>
                <li className="border-b-2 border-indigo-100 w-full">Nosotros</li>
                <li className="border-b-2 border-indigo-100 w-full">Estudiantes</li>
                <li className="border-b-2 border-indigo-100 w-full">Servicios</li>
                <li className="border-b-2 border-indigo-100 w-full">Contacto</li>

                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-primary px-8 py-3 mb-4">Regístrate</button>
                    <button className="px-8 py-3">Acceso</button>
                </div>
            </ul>


        </div>

    )
}

export default Navbar