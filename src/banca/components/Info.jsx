import React from "react";


const Info = () => {
    return (
        <div className="w-full min-h-screen bg-gray-200">
            <div className="py-6">
                <span className="px-8 text-sm  font-Montserrat text-primary">Bienvenido (a)  ________</span>
                <span className="text-sm font-Montserrat text-primary">Acá iria la fecha</span>
            </div>


            <div className="items-center justify-center relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                
                <span className="border-b border-primary text-center mb-3 text-lg font-bold font-Montserrat text-primary px-80 py-6">Posición Consolidada</span>

            </div>

        </div>
    )
    
}

export default Info