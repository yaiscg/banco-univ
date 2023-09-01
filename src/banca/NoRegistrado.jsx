import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Frecuente = () => {

  return (
     <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="flex items-center justify-center mb-3 text-xl font-bold font-Montserrat text-primary">Transferencias / Contacto frecuente</span>
          <div className="py-4">
             <select className="w-full border rounded-lg py-3 px-3 text-gray-400 outline-none focus:border-primary" name="cuenta">
                <option value="v">Cuenta a debitar</option>
              </select>
          </div>
          <div className="py-4">
             <select className="w-full border rounded-lg py-3 px-3 text-gray-400 outline-none focus:border-primary" name="cuenta">
                <option value="v">Cuenta a abonar</option>
              </select>
          </div>
          <div className="py-4">
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary"
                placeholder="Monto"
              /> 
          </div>
          <div className="py-4">
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary"
                placeholder="Concepto"
              /> 
          </div>
        <div className="grid grid-cols-2 gap-6">
          <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
            Transferir
          </button>
          <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
            Limpiar
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Frecuente