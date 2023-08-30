import React, {useState} from "react";

import { BsChevronDown } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { TbArrowsExchange2 } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { AiOutlineFileSearch } from "react-icons/ai";

import { Link } from "react-router-dom";

import {Bars3Icon,UserPlusIcon,XCircleIcon} from "@heroicons/react/24/outline"


const NavbarBanca = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    return (
        <div className="navbar">

            <div className="w-full h-[45px] bg-zinc-100 drop-shadow-lg mx-auto py-1">
                
                <div className="px-10 flex justify-between w-full h-full">
                    
                    <div className="flex items-center">
                        <div className='font-Montserrat hidden md:flex '>  
                        
                        <button className="bg-transparent border-transparent text-black px-6">
                            <div className="hidden md:flex items-center">
                            <AiOutlineFileSearch className="px-1 w-7"/>
                            <h1>Consultas</h1>
                            <BsChevronDown className="px-1 w-7"/>
                            </div>
                        </button>

                        <button className="bg-transparent border-transparent text-black px-6">
                            <div className="hidden md:flex items-center">
                            <TbArrowsExchange2 className="px-1 w-7"/>
                            <h1>Transferencias</h1>
                            <BsChevronDown className="px-1 w-7"/>
                            </div>
                        </button>

                        <button className="bg-transparent border-transparent text-black px-6">
                            <div className="hidden md:flex items-center">
                            <LuContact className="px-1 w-7"/>
                            <h1>Agenda</h1>
                            <BsChevronDown className="px-1 w-7"/>
                            </div>
                        </button>

                        <button className="bg-transparent border-transparent text-black px-12">
                            <div className="hidden md:flex items-center">
                            <Link to={"/logout"}>Salir</Link>
                            <CiLogout className="px-1 w-7"/>
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


                    <button className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4">
                        <h1>Consultas</h1>
                    </button>

                    <button className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4">
                        <h1>Transferencias</h1>
                    </button>

                    <button className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4">
                        <h1>Agenda</h1>
                    </button>

                    <button className="items-center border-primary  bg-transparent text-primary px-8 py-3 mb-4">
                        <h1>Salir</h1>
                    </button>

                </div>
                </ul>

            </div>


        </div>

    )
    
}

export default NavbarBanca