import React, { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { TbArrowsExchange2 } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


import { Link } from "react-router-dom";

import { Bars3Icon, UserPlusIcon, XCircleIcon } from "@heroicons/react/24/outline"


const NavbarBanca = () => {

    const [nav, setNav] = useState(false)

    const [isOpen, setIsOpen] = useState(false)

    const [isOpen2, setIsOpen2] = useState(false)

    const [isOpen3, setIsOpen3] = useState(false)

    const handleClick = () => setNav(!nav)
    const navigate = useNavigate();
    const handleClose = () => setNav(!nav)

    return (
        <div className="navbar">

            <div className="w-full h-[45px] bg-zinc-100 drop-shadow-lg mx-auto py-1">

                <div className="px-10 flex justify-between w-full h-full">

                    <div className="flex items-center">
                        <div className='font-Montserrat hidden md:flex '>

                            <button 
                                className="bg-transparent border-transparent text-black px-6"
                                onClick={() => setIsOpen((prev) => !prev)}>
                                <div className="hidden md:flex items-center">
                                    <AiOutlineFileSearch className="px-1 w-7" />
                                    <h1>Consultas</h1>
                                    {!isOpen ? (
                                        <BsChevronDown className="px-1 w-7" />
                                    ) : (
                                        <BsChevronUp className="px-1 w-7" />
                                    )}
                                    {isOpen && (
                                        <div className="bg-zinc-100 absolute top-10 flex flex-col items-start py-2 w-[200px]">
                                            <button className="border-transparent bg-transparent text-black">
                                                <h1 className="px-5 py-2 text-sm"><Link to="/homebanca">Posición consolidada</Link></h1>
                                            </button>
                                            <button className="border-transparent bg-transparent text-black">
                                                <h1 className="px-5 py-2 text-sm "><Link to="/movimientos">Movimientos</Link></h1>
                                            </button>

                                        </div>
                                    )}
                                </div>
                            </button>

                            <button
                                className="bg-transparent border-transparent text-black px-16"
                                onClick={() => setIsOpen2((prev) => !prev)}>
                                <div className="hidden md:flex items-center">
                                    <TbArrowsExchange2 className="px-1 w-7" />
                                    <h1>Transferencias</h1>
                                    {!isOpen2 ? (
                                        <BsChevronDown className="px-1 w-7" />
                                    ) : (
                                        <BsChevronUp className="px-1 w-7" />
                                    )}
                                    {isOpen2 && (
                                        <div className="bg-zinc-100 absolute top-10 flex flex-col items-start py-2 w-[225px]">
                                            <button className="border-transparent bg-transparent text-black">
                                                <h1 className="px-5 py-2 text-sm"><Link to="/frecuente">Contacto frecuente</Link></h1>
                                            </button>
                                            <button className="border-transparent bg-transparent text-black">
                                                <h1 className="px-5 py-2 text-sm"><Link to="/noregistrado">Contacto no registrado</Link></h1>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </button>


                            <button 
                                className="bg-transparent border-transparent text-black px-3"
                                onClick={() => setIsOpen3((prev) => !prev)}>
                                <div className="hidden md:flex items-center">
                                    <LuContact className="px-1 w-7" />
                                    <h1>Agenda</h1>
                                    {!isOpen3 ? (
                                        <BsChevronDown className="px-1 w-7" />
                                    ) : (
                                        <BsChevronUp className="px-1 w-7" />
                                    )}
                                    {isOpen3 && (
                                        <div className="bg-zinc-100 absolute top-10 flex flex-col items-start py-2 w-[200px]">
                                            <button className="border-transparent bg-transparent text-black">
                                                <h1 className="px-5 py-2 text-sm"><Link to="/aggcontacto">Agregar contacto</Link></h1>
                                            </button>
                                           
                                            <button className="border-transparent bg-transparent text-black">
                                                <h1 className="px-5 py-2 text-sm"><Link to="/listcontacto">Listado</Link></h1>
                                            </button>

                                        </div>
                                         
                                    )}
                                </div>
                            </button>

                            <button className="bg-transparent border-transparent text-black px-20">
                                <div className="hidden md:flex items-center">
                                    <Link to={"/logout"}>Salir</Link>
                                    <CiLogout className="px-1 w-7" />
                                </div>
                            </button>

                        </div>
                    </div>

                    <div className="md:hidden mr-4 py-2" onClick={handleClick}>
                        {!nav ? <Bars3Icon className="w-8 text-primary" /> : <XCircleIcon className="w-8 text-primary" />}
                    </div>

                </div>

                <ul className={!nav ? "hidden" : "absolute bg-zinc-100 w-full px-8"}>

                    <div className="flex flex-col my-4">


                        <button 
                            className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4"
                            onClick={() => setIsOpen((prev) => !prev)}>
                            <div>
                                <h1>Consultas</h1>

                                {isOpen && (
                                    <div className="bg-zinc-100 absolute top-10 flex flex-col items-start py-2 w-[200px]">
                                        <h1 className="px-5 py-2"><Link to="/homebanca">Posición Consolidada</Link></h1>
                                        <h1 className="px-5 py-2"><Link to="/movimientos">Movimientos</Link></h1>
                                    </div>
                                )}
                            </div>

                        </button>

                        <button
                            className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4"
                            onClick={() => setIsOpen2((prev) => !prev)}>
                            <div>
                                <h1>Transferencias</h1>

                                {isOpen2 && (
                                    <div className="bg-zinc-100 absolute top-10 flex flex-col items-start py-2 w-[200px]">
                                        <h1 className="px-5 py-2"><Link to="/frecuente">Contacto frecuente</Link></h1>
                                        <h1 className="px-5 py-2"><Link to="/noregistrado">Contacto no registrado</Link></h1>
                                    </div>
                                )}
                            </div>
                        </button>

                        <button        
                            className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4"
                            onClick={() => setIsOpen3((prev) => !prev)}>
                            <div>
                                <h1>Agenda</h1>

                                {isOpen3 && (
                                    <div className="bg-zinc-100 absolute top-10 flex flex-col items-start py-2 w-[200px]">
                                        <h1 className="px-5 py-2"><Link to="/aggcontacto">Agregar Contacto</Link></h1>
                                        <h1 className="px-5 py-2"><Link to="/listcontacto">Listado</Link></h1>
                                    </div>
                                )}
                            </div>
                        </button>

                        <button className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4" onClick={() => navigate("/logout")}>
                            Salir
                        </button>

                    </div>
                </ul>

            </div>


        </div>

    )

}

export default NavbarBanca