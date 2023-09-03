import React, {useState} from 'react';
import { Link, Navigate } from "react-router-dom";
import {RiUser3Line, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri"
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Olvido = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword (!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if([user, password].includes("")){
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
    <div className="bg-[url('/src/assets/registro.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-3xl font-bold font-Montserrat text-primary">Bienvenido a</span>
            <span className="mb-3 text-4xl font-bold font-Montserrat text-primary">Gestión de Datos</span>
            <span className="font-light text-gray-600 mb-8 text-xl">Por favor selecciona una opción</span>
          <form onSubmit={handleSubmit}>

          <div className="flex justify-between w-full py-2">
        </div>
        <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary" onClick={() => navigate("/usuario")}>
            Olvido de correo
        </button>

        <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary" onClick={() => navigate("/contrasenna")}>
            Olvido de contraseña
        </button>
        </form>
        <span className=" text-primary text-md text-center"><Link to={"/inicio"}>Volver a la Banca en Línea</Link></span>
      </div>
      </div>
    </div>
  );
};

export default Olvido