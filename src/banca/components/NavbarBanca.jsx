import React from "react";
import { BsChevronDown } from "react-icons/bs";

const NavbarBanca = () => {

    return (
        <div className="navbar">

            <div className="w-full h-[45px] bg-zinc-100 drop-shadow-lg mx-auto py-1">
                
                <div className="px-10 flex justify-between w-full h-full">
                    
                    <div className="flex items-center">
                    <ul className='font-Montserrat hidden md:flex '>  
                        
                        <div className="hidden md:flex">
                            <li>Consultas</li>
                        </div>
                        
                        <div>
                            <li>Transferencias</li>
                        </div>

                        <li>Agenda</li>
                        <li>Salir</li>
                    </ul>
                    </div>

                </div>
            </div>


        </div>

    )
    
}

export default NavbarBanca