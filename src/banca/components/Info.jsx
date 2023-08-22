import React from "react";


import { BsJustifyLeft } from "react-icons/bs";
import { RiEyeLine } from "react-icons/ri";

const Info = () => {
    return (
        <div className="w-full min-h-screen bg-gray-200">
            <div className="py-6">
                <span className="px-8 text-sm text-primary">Bienvenido (a)  ________</span>
                <span className="text-sm text-primary">Acá iria la fecha</span>
            </div>


            <div className="items-center justify-center relative flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                
                <h1 className="border-b text-center border-primary mb-3 text-lg font-bold font-Montserrat text-primary px-80 py-6">Posición Consolidada</h1>
                
                <div className="grid md:grid-cols-4 gap-8 py-12 justify-center md:flex text-sm items-center jsutify-center">

                    <div>
                        <h1 className="px-20 font-semibold">Descripción</h1> 
                        <h1 className="px-10 py-12 text-center">Cuenta Estudiantil</h1>
                    </div>

                    <div>
                        <h1 className="px-20 font-semibold">Cuenta Estudiantil</h1>
                        <h1 className="px-10 py-12 text-center">Num. de cuenta</h1>
                    </div>

                    <div>
                        <h1 className="px-20 font-semibold">Movimientos</h1>
                        <button className="bg-transparent border-transparent text-black px-24 py-12"><BsJustifyLeft className="px-1 w-10 text-xl"/></button>
                    </div>

                    <div>
                        <h1 className="px-20 font-semibold">Saldo</h1>
                        <button className="bg-transparent border-transparent text-black px-20 py-12 "><RiEyeLine className="px-1 w-10 text-xl"/></button>
                    </div>

                </div>

                <h1 className="border-b text-center border-primary mb-3 text-lg font-bold font-Montserrat text-primary px-80 py-2"></h1>
                <h1 className="border-b text-center mb-3 text-lg font-bold font-Montserrat text-primary px-80 py-6"></h1>


            </div>


        </div>
    )
    
}

export default Info