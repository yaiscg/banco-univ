import React, {useState} from "react";

import {Bars3Icon,UserPlusIcon,ChevronDownIcon, XCircleIcon} from "@heroicons/react/24/outline"

import logo from '../assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className="w-screen h-[80 px] z-10 bg-indigo-100 fixed drop-shadlow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    
                    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                        <img className='w-full' src={logo} alt="/" /> 
                    </div>
                    
                    <ul className="hidden md:flex">          {/*tipo de letra*/}
                        <li>Nosotros</li>
                        <li>Estudiantes</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>

                </div>

                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black flex mr-4">
                        <UserPlusIcon className="w-6"/>
                        Regístrate
                    </button>

                    <button className="flex px-8 py-4">
                        Banca en línea
                        <ChevronDownIcon className="w-6"/>
                    </button>

                </div>

                <div className="md:flex" onClick={handleClick}>
                    {!nav ? <Bars3Icon className="w-5" /> : <XCircleIcon className="w-5" />}
                </div>

            </div>


            <ul className={!nav ? "hidden" : "absolute bg-zinc-50 w-full px-8"}>
                <li className="border-b-2 border-indigo-200 w-full">Nosotros</li>
                <li className="border-b-2 border-indigo-200 w-ful">Estudiantes</li>
                <li className="border-b-2 border-indigo-200 w-ful">Servicios</li>
                <li className="border-b-2 border-indigo-200 w-ful">Contacto</li>

                <div className="flex flex-col m-4">
                    <button className="bg-transparent text-cyan-700 px-8 py-3 mb-4">Regístrate</button>
                    <button className="px-8 py-3 mb-4">Banca en línea</button>
                </div>
            </ul>


        </div>

    )
}

export default Navbar