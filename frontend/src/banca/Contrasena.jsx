import React, { useEffect, useState } from 'react';
import {RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import NavbarBanca from "../banca/components/NavbarBanca"
import Header from "../banca/components/Header"

import { Apiurl, ApiWhoami, ApiContrasenna } from '../api/apirest';
import axios from 'axios';


const Contrasena = () => {


  ///////////////////////////

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {register, handleSubmit, reset,
    formState: {errors} 
  } = useForm();

  //const onSubmit = handleSubmit ((data) => {
    //console.log(data);
  //});

  const handleShowPassword = () => {
    setShowPassword (!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword (!showConfirmPassword);
  };

  const handleLimpiar = () => {
    reset();
  };

   ///////////////////////////

   const [data, setData] = useState([]);
   const token = localStorage.getItem("JWT");
 
   const [showMessage, setShowMessage] = useState(false);
   const [showMessage1, setShowMessage1] = useState(false);
   const [showMessage2, setShowMessage2] = useState(false);
   const [showMessage3, setShowMessage3] = useState(false);
 
   useEffect(()=> {
     axios.get(Apiurl+ApiWhoami, {
       headers: {
           Authorization: "Bearer " + token
       }
   })
     .then(res =>setData(res.data.data))
     .catch(err => console.log(err))
   }, [])
 
   const onSubmit = handleSubmit((data) => {
     if (!Object.keys(errors).length) {
       setShowMessage(true);
       const dataToSend = {
         password: data.password,
         new_password: data.new_password
       };
       axios.patch(Apiurl+ApiContrasenna
         , dataToSend, {
         headers: { 
           Authorization: "Bearer " + token
         }
       })
       .then((response) => {
         if (response.statusText === "Updated") {
           setShowMessage(false);
           setShowMessage1(true);
         }
       })
       .catch(error => {
         console.log(error);
         if (error.response.status === 409) {
           setShowMessage(false);  
           setTimeout(() => {
             window.location.reload();
           }, 3000);
         } else {
           setShowMessage1(true);
           setTimeout(() => {
             window.location.reload();
           }, 5000);
         }
       })
     }
   });
 

  return (
    
    <div>
        <Header/>
        <NavbarBanca/>

        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            {/* left side */}
            <div className="flex flex-col justify-center p-8 md:p-14">
                <span className="mb-3 text-2xl font-bold font-Montserrat text-primary text-center">Gestión de Contraseña</span>
                
                <form onSubmit={onSubmit}>

                <div className="relative py-4">
              <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary flex"
                placeholder="Contraseña Actual"
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Por favor ingrese su contraseña actual"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                    message:
                      'La contraseña es incorrecta.',
                  },
                })}
              />
              {
                errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>
              }
              {showPassword ? (
                <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              ) : (<RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              )}
            </div>
            <div className="relative py-4">
              <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary flex"
                placeholder="Contraseña Nueva"
                name="new_password"
                {...register("new_password", {
                  required: {
                    value: true,
                    message: "Por favor escriba su nueva contraseá"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                    message:
                      'La contraseña es incorrecta.',
                  },
                })}
              />
              {
                errors.new_password&& <span className="text-sm text-red-600">{errors.new_password.message}</span>
              }
              {showConfirmPassword ? (
                <RiEyeOffLine onClick={handleShowConfirmPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              ) : (<RiEyeLine onClick={handleShowConfirmPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              )}
            </div>


            <div className="grid">
                    <span className="  font-bold text-gray-600 text-sm">Tu contraseña debe cumplir con estos requisitos:</span>
                    <span className="  font-light text-gray-600 text-sm">• Tener 8 caracteres</span>
                    <span className="  font-light text-gray-600 text-sm">• Ser alfanumérica con al menos 1 caracter numérico y un único caracter especial</span>
                    <span className="  font-light text-gray-600 text-sm">• Tener uno de estos caracteres especiales - / = . $ # </span>
                    <span className="  font-light text-gray-600 text-sm">• Evitar colocar información personal </span>
            </div>

            <div className="flex justify-between w-full py-2">
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
                  <p className="text-center text-xl font-semibold">Contraseña actualizada con éxito.</p>
                  <button
                    className="mt-4 bg-primary text-white py-2 px-4 rounded-lg center"
                    onClick={() => navigate("/contrasena")}
                  >
                  Continuar
                  </button>
                </div>
              </div>
            )}

            <div className='grid grid-cols-2 gap-5'>
                <button type="submit" className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
                Confirmar
                </button>

                <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary" onClick={handleLimpiar}>
                Limpiar
                </button>
            </div>
            </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Contrasena