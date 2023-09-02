import React, {useState} from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import {Bars3Icon,UserPlusIcon,XCircleIcon} from "@heroicons/react/24/outline"

import { Link as Link1 } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    const navigate = useNavigate();

    return (
        <div className="w-screen h-[80 px] z-10 bg-zinc-100 fixed drop-shadow-lg mx-auto py-1">
            <div className="px-10 py-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className='text-2xl font-bold font-Montserrat mr-4 sm:text-2xl text-primary'>
                        <Link1 to={"/home"}>BANCO UNIVERSITARIO</Link1>
                    </h1>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4 text-base">
                        <Link1 to={"/registro"}>Regístrate</Link1>
                    </button>

                    <button className="px-8 py-2 text-base" onClick={() => navigate("/inicio")}>
                        Acceso
                    </button>
                </div>

                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <Bars3Icon className="w-8 text-primary" /> : <XCircleIcon className="w-8 text-primary" />}
                </div>

            </div>

            <ul className={!nav ? "hidden" : "absolute bg-zinc-100 w-full px-8"}>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-primary px-8 py-3 mb-4" onClick={() => navigate("/registro")}>
                        Regístrate
                    </button>
                    <button className="px-8 py-3" onClick={() => navigate("/inicio")}>
                        Acceso
                    </button>
                </div>
            </ul>
            
        </div>

    )
}

export default Navbar