import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri"
import { toast } from "react-toastify";

const Usuario = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if([user, password].includes("")){
      toast.error("Todos los campos son obligatorios", {
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
            <span className="mb-3 text-4xl font-bold font-Montserrat text-primary">Gestión de Correo</span>
            <span className="font-light text-gray-600 mb-8 text-xl">Por favor ingresa tus datos</span>
          <form onSubmit={handleSubmit}>
            
          <div className="grid grid-cols-2 gap-2">

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
              <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary"
                placeholder="Nuevo correo"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
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

export default Usuario