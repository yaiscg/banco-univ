import React, { useState } from 'react';
import { Link } from "react-router-dom";
import login from "../assets/login.jpg";
import {RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const IniciarSesion = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {register, handleSubmit,
    formState: {errors} 
  } = useForm();

  const onSubmit = handleSubmit ((data) => {
    console.log(data);
  });

  const handleShowPassword = () => {
    setShowPassword (!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-3xl font-bold font-Montserrat text-primary">Bienvenido a</span>
            <span className="mb-3 text-4xl font-bold font-Montserrat text-primary">Banca en Línea</span>
            <span className="  font-light text-gray-600 mb-8 text-xl">Por favor ingresa tus datos</span>
          <form onSubmit={onSubmit}>
            <div className="relative py-4">
              <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary flex"
                placeholder="Correo electrónico"
                name="mail"
                {...register("mail", {
                  required: {
                    value: true,
                    message: "Por favor ingrese correo electrónico"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Correo no válido",
                  },
                })}
              />
              {
                errors.mail && <span className="text-sm text-red-600">{errors.mail.message}</span>
              }
            </div>
            <div className="relative py-4">
              <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
              <input
                type={showPassword ? "text" : "password"}
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary flex"
                placeholder="Contraseña"
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Por favor ingrese contraseña"
                  },
                  minLength: {
                    value: 8,
                    message: "Contraseña incorrecta"
                  },
                  maxLength: {
                    value: 8,
                    message: "Contraseña incorrecta"
                  },
                })}
              /> 
              {
                errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>
              }
              {showPassword ? (
                <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>

              ) : ( <RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>
            )}
            </div>
          <div className="flex justify-between w-full py-4">
            <span className=" text-primary text-md"><Link to={"/olvido"}>Olvidé mi correo o contraseña</Link></span>
            </div>
            <button type="submit" className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
               Iniciar sesión
            </button>
            <p className="text-sm" onClick={() => navigate("/homebanca")}>Ir a la banca</p>
        </form>
        <div className="text-center text-gray-400">
          ¿No tienes cuenta? 
          <span className="font-bold text-primary"> 
            <Link to={"/registro"}> Regístrate</Link>
          </span>
        </div>

        <div className='mt-10 text-center text-base'>
          <span className="font-light text-primary"> 
            <Link to={"/home"}> Volver a home</Link>
          </span>
        </div>
      
      </div>
        {/* right side */}
        <div className="relative">
        <img
          src={login}
          alt="img"
          className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        />
        </div>
      </div>

    </div>

  );
};

export default IniciarSesion