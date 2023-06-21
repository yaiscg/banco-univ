import React, {useState} from 'react';
import { Link } from "react-router-dom";
import login from "../assets/login.jpg";
import {RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri"
import { toast } from "react-toastify";


const Registro = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword (!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if([email, password].includes("")){
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
        position: "top-center"
      });
      return;
    }

    if(password.length < 8){
      toast.error("La contraseña debe contener al menos 8 caracteres", {
        theme: "dark",
        position: "top-center"
      });
      return;
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-3xl font-bold font-Montserrat text-primary">Bienvenido a</span>
            <span className="mb-3 text-4xl font-bold font-Montserrat text-primary">Banca en Línea</span>
            <span className="  font-light text-gray-600 mb-8 text-xl">Por favor ingresa tus datos</span>
          <form onSubmit={handleSubmit}>
            <div className="relative py-4">
              <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
              <input
                type="email"
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative py-4">
              <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
              <input
                type={showPassword ? "text" : "password"}
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> 
              {showPassword ? (
                <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>

              ) : ( <RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>
            )}
            </div>
          <div className="flex justify-between w-full py-2">
        </div>
        <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
          Iniciar sesión
        </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Registro