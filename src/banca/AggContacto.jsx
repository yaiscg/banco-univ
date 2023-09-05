import React from 'react';
import { useForm } from "react-hook-form";

import NavbarBanca from "../banca/components/NavbarBanca"
import Header from "../banca/components/Header"

const AggContacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleLimpiar = () => {
    reset();
  };

  return (
    <div>
        <Header/>
        <NavbarBanca/>
      <form onSubmit={onSubmit}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="flex items-center justify-center mb-3 text-2xl font-bold font-Montserrat text-primary">Agregar Contacto</span>

                        
          <div className="grid grid-cols-2 gap-5">

          <div className='grid grid-cols-2 '>
            <div className='col-end-6'>
                <div className="form-group py-4">
                  <select className="form-select border rounded-lg py-3 px-3 text-gray-400" name="documento">
                    <option value="v">V</option>
                    <option value="e">E</option>
                  </select>
                </div>
            </div>

              <div className="py-4 col-end-10 px-1">
                <input
                  type="text"
                  className="py-3 border w-full border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Cédula"
                  name="cedula"
                  {...register("cedula", {
                    required: {
                      value: true,
                      message: "Por favor ingrese cédula"
                    },
                    pattern: {
                      value: /^[0-9]+[0+9]*$/,
                      message: "Cédula no válida"
                    },
                    maxLength: {
                      value: 8,
                      message: "Cédula incorrecta"
                    },
                    minLength: {
                      value: 8,
                      message: "Cédula incorrecta"
                    },
                  })}
                />
                {
                  errors.cedula && <span className="text-sm text-red-600">{errors.cedula.message}</span>
                }
              </div>
          </div>


            <div className="py-4">
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                placeholder="Numero de cuenta"
                name="cuetaBenf"
                {...register("cuentaBenf", {
                  required: {
                    value: true,
                    message: "Por favor ingrese la cuenta"
                  },
                  pattern: {
                    value: /^[0-9]+[0+9]*$/,
                    message: "Cuenta incorrecta"
                  },
                  maxLength: {
                    value: 20,
                    message: "Cuenta incorrecta"
                  },
                  minLength: {
                    value: 20,
                    message: "Cuenta incorrecta"
                  },
                })}
              />
              {
                errors.cuentaBenf && <span className="text-sm text-red-600">{errors.cuentaBenf.message}</span>
              }
            </div>
          </div>

          <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Alias"
                  name="alias"
                  {...register("alias", {
                    required: {
                      value: true,
                      message: "Por favor ingrese alias"
                    },
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: "Alias no válido"
                    },
                    maxLength: {
                      value: 30,
                      message: "El alias no puede contener más de 30 caracteres"
                    }
                  })}
                />
                {
                  errors.alias && <span className="text-sm text-red-600">{errors.alias.message}</span>
                }
            </div> 

            <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Descripción"
                  name="descripcion"
                  {...register("descripcion", {
                    required: {
                      value: true,
                      message: "Por favor ingrese descripción"
                    },
                    maxLength: {
                      value: 20,
                      message: "La descripción no puede contener más de 20 caracteres"
                    }
                  })}
                /> 
                {
                  errors.descripcion && <span className="text-sm text-red-600">{errors.descripcion.message}</span>
                }
            </div>

            <div className="grid grid-cols-2 gap-6">
          <button type="submit" className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
            Confirmar
          </button>
          <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary" onClick={handleLimpiar}>
            Limpiar
          </button>
        </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);
};


export default AggContacto