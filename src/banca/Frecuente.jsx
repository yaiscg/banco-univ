import React from 'react';
import { useForm } from "react-hook-form";

const Frecuente = () => {

  const {register, handleSubmit,
    formState: {errors} 
  } = useForm();

  const onSubmit = handleSubmit ((data) => {
      console.log(data);
  });

  return (
  <div>
    <form onSubmit={onSubmit}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="flex items-center justify-center mb-3 text-xl font-bold font-Montserrat text-primary">Transferencias / Contacto frecuente</span>
            <div className="py-4">
              <select className="w-full border rounded-lg py-3 px-3 text-gray-400 outline-none focus:border-primary" name="cuenta">
                  <option value="cuentaDeb">Cuenta a debitar</option>
                </select>
            </div>
            <div className="py-4">
              <select className="w-full border rounded-lg py-3 px-3 text-gray-400 outline-none focus:border-primary" name="cuenta">
                  <option value="cuentaAb">Cuenta a abonar</option>
              </select>
            </div>
            <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary"
                  placeholder="Monto"
                  name="monto"
                  {...register("monto", {
                    required: {
                      value: true,
                      message: "Por favor ingrese monto"
                    },
                    pattern: {
                      value: /^[0-9]+[0+9]*$/,
                      message: "Monto no válido"
                    },
                    maxLength: {
                      value: 5,
                      message: "Monto excedido"
                    }
                  })}
                />
                {
                  errors.monto && <span className="text-sm text-red-600">{errors.monto.message}</span>
                }
            </div> 

            <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary"
                  placeholder="Concepto"
                  name="concepto"
                  {...register("concepto", {
                    required: {
                      value: true,
                      message: "Por favor ingrese concepto"
                    },
                    maxLength: {
                      value: 20,
                      message: "El concepto no puede contener más de 20 caracteres"
                    }
                  })}
                /> 
                {
                  errors.concepto && <span className="text-sm text-red-600">{errors.concepto.message}</span>
                }
            </div>
            <div className="grid grid-cols-2 gap-6">
              <button type="submit" className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
                Transferir
              </button>
              <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
                Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Frecuente