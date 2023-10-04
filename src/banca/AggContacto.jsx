import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import NavbarBanca from "../banca/components/NavbarBanca"
import Header from "../banca/components/Header"

import { Apiurl, ApiContact } from '../API/apirest';
import axios from 'axios';

const AggContacto = () => {

  const [showMessage, setShowMessage] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const navigate = useNavigate();

  /////////////////////////////////////////////////////

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // BOTON LIMPIAR ///////////////////////////////////

  const handleLimpiar = () => {
    reset();
  };

  /////////////////////

  const onSubmit = handleSubmit((data) => {
    if (!Object.keys(errors).length) {
      setShowMessage(true);
      let url = Apiurl + ApiContact;
      const token = localStorage.getItem("JWT");
      const dataToSend = {
        account_number: data.account_number,
        alias: data.alias,
        description: data.description,
      };
      axios.post(url, dataToSend, {
        headers: { 
          Authorization: "Bearer " + token
        }
      })
      .then((response) => {
        if (response.statusText === "Created") {
          setShowMessage(false);
          setShowMessage2(true);
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 409) {
          setShowMessage(false);
          setShowMessage1(true);   
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          setShowMessage2(true);
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      })
    }
  });



  ///VISUAL /////////////////////////////////////////

  return (
    <div>
        <Header/>
        <NavbarBanca/>

      <form onSubmit={onSubmit}>

      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="flex items-center justify-center mb-3 text-2xl font-bold font-Montserrat text-primary">Agregar Contacto</span>


            <div className="py-4">
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                placeholder="Numero de cuenta"
                name="account_number"
                {...register("account_number", {
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
                errors.account_number && <span className="text-sm text-red-600">{errors.account_number.message}</span>
              }
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
                  name="description"
                  {...register("description", {
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
                  errors.description && <span className="text-sm text-red-600">{errors.description.message}</span>
                }
            </div>

            {showMessage && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-center text-xl font-semibold">Verificando Información...</p>
                </div>
              </div>
            )}
            {showMessage1 && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-center text-xl font-semibold">Ya existe un contacto registrado con esos datos.</p>
                </div>
              </div>
            )}
            {showMessage2 && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-center text-xl font-semibold">Contacto registrado con éxito.</p>
                  <button
                    className="mt-4 bg-primary text-white py-2 px-4 rounded-lg center"
                    onClick={() => navigate("/aggcontacto")}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

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