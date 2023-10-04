import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import NavbarBanca from "../banca/components/NavbarBanca"
import { useNavigate } from 'react-router-dom';
import Header from "../banca/components/Header"
import { Apiurl, ApiAccount, ApiMovement } from '../API/apirest';
import axios from 'axios';
import { CheckCircleIcon, XCircleIcon, ArrowUturnLeftIcon } from '@heroicons/react/20/solid'


const NoRegistrado = () => {
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false); 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const token = localStorage.getItem("JWT");
    if (!Object.keys(errors).length) {
      let url = (`${Apiurl}${ApiAccount.replace(':account_number', data.account_number)}`)
      axios.get(url, {
        headers: { 
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        // console.log(3,response);
        if (response.statusText === "OK") {
          let urlMovement = Apiurl + ApiMovement;
          const dataToSend = {
            amount: parseFloat(data.amount),
            account_number: data.account_number,
            description: data.description
          };
          console.log(4,dataToSend)
          axios.post(urlMovement, dataToSend,  {
            headers: { 
              Authorization: `Bearer ${token}`
            }
          })
            .then((response) => {
              setShowSuccessMessage(true);
              console.log(response)
            }).catch(error => {
              setShowErrorMessage(true);
              console.log(error);
              // setTimeout(() => {
              //   window.location.reload();
              // }, 3000);
            })
          }
      })
      .catch(error => {
        console.log(error);
      });
    } 
  });


  const handleLimpiar = () => {
    reset();

  };

  return (
    <div>

      <Header/>
      <NavbarBanca/>

      <form onSubmit={onSubmit}>
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className=" flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="flex items-center justify-center mb-3 text-xl font-bold font-Montserrat text-primary">Transferencias / Contacto no registrado</span>
            <div className="py-4">
            <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Cuenta del beneficiario"
                  name="account_number"
                  {...register("account_number", {
                    required: {
                      value: true,
                      message: "Por favor ingrese la cuenta del beneficiario"
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
                        
          <div className="grid grid-cols-2 gap-5">

          <div className='grid grid-cols-2 '>
          </div>

          </div>
          <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Nombre del beneficiario"
                  name="nombre"
                />
            </div> 
            <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Monto"
                  name="amount"
                  {...register("amount", {
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
                  errors.amount && <span className="text-sm text-red-600">{errors.amount.message}</span>
                }
            </div> 

            <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Concepto"
                  name="description"
                  {...register("description", {
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
                  errors.description && <span className="text-sm text-red-600">{errors.description.message}</span>
                }
            </div>
            <div className="grid grid-cols-2 gap-6">
          <button type="submit" 
          className="w-full text-white py-3 px-6 rounded-lg mt-4 bg-secondary border-secondary">
            Transferir
          </button>
          <button className="w-full text-white py-3 px-6 rounded-lg mt-4 bg-secondary border-secondary" onClick={handleLimpiar}>
            Limpiar
          </button>
          {showSuccessMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white px-10 py-2 rounded-2xl shadow transition transform duration-300">
            <div className="flex items-center justify-center mt-3">
              <CheckCircleIcon className='text-primary w-1/4 h-1/4 text-sm'></CheckCircleIcon>
            </div>
            <span className="flex items-center justify-center py-3 text-xl font-Montserrat text-primary font-bold">Transferencia realizada exitosamente</span>
            <span className="flex items-center justify-center text-sm">Su transferencia ha sido realizada con éxito</span>
              <button
                className="w-full text-white py-3 px-6 rounded-lg mt-10 mb-6 bg-secondary border-secondary transition-colors duration-300 hover:bg-secondary-dark"
                onClick={() => setShowSuccessMessage(false)}
                >            
                Cerrar
              </button>
              </div>
            </div>
          )}
          {showErrorMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white px-10 py-2 rounded-2xl shadow transition transform duration-300">
            <div className="flex items-center justify-center mt-3">
              <XCircleIcon className='text-primary w-1/4 h-1/4 text-sm'></XCircleIcon>
            </div>
            <span className="flex items-center justify-center py-3 text-xl font-Montserrat text-primary font-bold">Ha ocurrido un error</span>
            <span className="flex items-center justify-center text-sm">Ha ocurrido un error al realizar su transferencia</span>
              <button
                className="w-full text-white py-3 px-6 rounded-lg mt-10 mb-6 bg-secondary border-secondary transition-colors duration-300 hover:bg-secondary-dark"
                onClick={() => setShowErrorMessage(false)}
                >            
                Cerrar
              </button>
              </div>
            </div>
          )}          
        </div>  
        <div className="flex items-center justify-center mt-5">
          <button className="border-none bg-secondary bg-white flex items-center" onClick={() => navigate("/HomeBanca")}>
          <span className="flex items-center justify-center text-sm text-primary font-Montserrat">Regresar al inicio</span>
          <ArrowUturnLeftIcon className="w-3 h-3 text-sm ml-2 align-middle text-primary"></ArrowUturnLeftIcon>
          </button>
        </div>
          </div>         
        </div>      
      </div>
    </form>
  </div>
);
};


export default NoRegistrado