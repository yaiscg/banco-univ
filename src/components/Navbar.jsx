import React, {useState} from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import {Bars3Icon,UserPlusIcon,XCircleIcon} from "@heroicons/react/24/outline"

import { Link as Link1 } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    return (
        <div className="w-screen h-[80 px] z-10 bg-zinc-100 fixed drop-shadow-lg mx-auto py-1">
            <div className="px-10 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className='text-2xl font-bold font-Montserrat mr-4 sm:text-2xl text-primary'><Link to="home" smooth={true} duration={500}>BANCO UNIVERSITARIO</Link></h1>
                    <ul className='font-Montserrat hidden md:flex text-lg'>  
                        <li><Link to="one" smooth={true} duration={500}>Servicios</Link></li>
                        <li><Link to="two" smooth={true} offset={-50} duration={500}>Estudiantes</Link></li>
                        <li><Link to="three" smooth={true} offset={-20} duration={500}>Nosotros</Link></li>
                        <li><Link to="four" smooth={true} offset={-100} duration={500}>Contacto</Link></li>
                    </ul>
                </div>

                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4 text-base">
                        <Link1 to={"/registro"}>Registrarse</Link1>
                    </button>

                    <button className="px-8 py-2 text-base">
                        <Link1 to={"/inicio"}>Acceso</Link1>
                    </button>
                </div>

                <div className="md:hidden mr-4 py-2" onClick={handleClick}>
                    {!nav ? <Bars3Icon className="w-8 text-primary" /> : <XCircleIcon className="w-8 text-primary" />}
                </div>

            </div>

            <ul className={!nav ? "hidden" : "absolute bg-zinc-50 w-full px-8"}>

            <li className='border-b-2 border-indigo-100 w-full'><Link onClick={handleClose} to="one" smooth={true} duration={500}>Servicios</Link></li>
            <li className='border-b-2 border-indigo-100 w-full'><Link onClick={handleClose} to="two" smooth={true} offset={-50} duration={500}>Estudiantes</Link></li>
            <li className='border-b-2 border-indigo-100 w-full'><Link onClick={handleClose} to="three" smooth={true} offset={-20} duration={500}>Nosotros</Link></li>
            <li className='border-b-2 border-indigo-100 w-full'><Link onClick={handleClose} to="four" smooth={true} offset={-100} duration={500}>Contacto</Link></li>

                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-primary px-8 py-3 mb-4">
                        <Link1 to={"/registro"}>Registrarse</Link1>
                    </button>
                    <button className="px-8 py-3">
                        <Link1 to={"/inicio"}>Acceso</Link1>
                    </button>
                </div>
            </ul>
            
        </div>

    )
}

export default Navbar