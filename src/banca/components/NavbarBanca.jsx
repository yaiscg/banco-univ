import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { TbArrowsExchange2 } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { AiOutlineFileSearch } from "react-icons/ai";




const NavbarBanca = () => {

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
                            <h1>Salir</h1>
                            <CiLogout className="px-1 w-7"/>
                            </div>
                        </button>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    )
    
}

export default NavbarBanca