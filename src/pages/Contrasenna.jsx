import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {RiUser3Line, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri"
import { toast } from "react-toastify";

const Contrasenna = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState({
    documento:'V',
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  const handleShowPassword = () => {
    setShowPassword (!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword (!showConfirmPassword);
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
              <span className="mb-3 text-4xl font-bold font-Montserrat text-primary">Gestión de Contraseña</span>
              <span className="font-light text-gray-600 mb-8 text-xl">Por favor ingresa tus datos</span>
            <form onSubmit={handleSubmit}>
              
            <div className="grid grid-cols-2 gap-3">

            <div className='col-end-1'>
              <form onSubmit={onSubmitHandler}>
                <div className="form-group py-4">
                  <select className="form-select border rounded-lg py-3 px-3 text-gray-400" name="documento" onChange={onChangeHandler} value={formData.documento}>
                    <option value="v">V</option>
                    <option value="e">E</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="py-4 col-end-2">
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary"
                placeholder="Cédula"
              />
            </div>
            </div>

              <div className="relative py-4">
                <RiUser3Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary"
                  placeholder="Usuario"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>

              <div className="relative py-4">
                <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
                <input
                  type={showPassword ? "text" : "password"}
                  className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary"
                  placeholder="Nueva contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> 
                {showPassword ? (
                  <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>

                ) : ( <RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>
              )}
              </div>

              <div className="relative py-4">
                <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary"
                  placeholder="Repetir contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                /> 
                {showPassword ? (
                  <RiEyeOffLine onClick={handleShowConfirmPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>

                ) : ( <RiEyeLine onClick={handleShowConfirmPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"/>
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
          <div className='grid grid-cols-2 gap-5'>
            <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
              <Link to={"/olvido"}>Cancelar</Link>
            </button>
            <button className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
              Confirmar
            </button>
          </div>
          </form>
        </div>
        </div>
    </div>
  );
};

export default Contrasenna