import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine} from "react-icons/ri"
import { useForm } from "react-hook-form";

const Registro = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    documento:'V',
  })

  const {register, handleSubmit,
    formState: {errors} 
  } = useForm();

  const onSubmit = handleSubmit ((data) => {
    console.log(data);
  });

  const handleShowPassword = () => {
    setShowPassword (!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword (!showConfirmPassword);
  };

  return (
     <div className="bg-[url('/src/assets/registro.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-3xl font-bold font-Montserrat text-primary">Bienvenido a</span>
            <span className="mb-3 text-4xl font-bold font-Montserrat text-primary">Banca en Línea</span>
            <span className="  font-light text-gray-600 mb-8 text-xl">Por favor ingresa tus datos</span>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Nombres"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Por favor ingrese nombres"
                      },
                      maxLength: {
                        value: 30,
                        message: "Nombres no válidos"
                      },
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Nombres no válidos"
                      }
                  })}
                />
                {
                errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>
                }
              </div>
              <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Apellidos"
                  name="surname"
                  {...register("surname", {
                    required: {
                      value: true,
                      message: "Por favor ingrese nombres"
                      },
                      maxLength: {
                        value: 30,
                        message: "Nombres no válidos"
                      },
                      pattern: {
                        value: /^[a-zA-Z ]*$/,
                        message: "Nombres no válidos"
                      }
                  })}
                />
                {
                errors.surname && <span className="text-sm text-red-600">{errors.surname.message}</span>
                }
              </div>
            </div>

            
          <div className="grid grid-cols-2 gap-5">

            <div className='grid grid-cols-2 '>
              <div className='col-end-6'>
                <form>
                  <div className="form-group py-6">
                    <select className="form-select border rounded-lg py-3 px-3 text-gray-400" name="documento">
                      <option value="v">V</option>
                      <option value="e">E</option>
                    </select>
                  </div>
                </form>
              </div>

                <div className="py-6 col-end-10 px-1">
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


              <div>
              <label className="text-sm text-gray-400">Fecha de nacimiento</label>
                <input
                  type="date"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  name="birthDate"
                  {...register("birthDate", {
                    required: {
                      value: true,
                      message: "Por favor ingrese fecha de nacimiento"
                    }
                  })}
                />
                {
                  errors.birthDate && <span className="text-sm text-red-600">{errors.birthDate.message}</span>
                }
              </div>
            </div>

            <div className="py-4">
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                placeholder="Número de cuenta"
                name="account"
                {...register("account", {
                  required: {
                    value: true,
                    message: "Por favor ingrese el número de cuenta"
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
                errors.account && <span className="text-sm text-red-600">{errors.account.message}</span>
              }                 
            </div>

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

            <div className="relative py-4">
              <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"/>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary flex"
                placeholder="Repetir contraseña"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Por favor repita la contraseña"
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
                errors.confirmPassword && <span className="text-sm text-red-600">{errors.confirmPassword.message}</span>
              }
              {showConfirmPassword ? (
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
        <button type="submit" className="w-full text-white py-3 px-6 rounded-lg mb-6 bg-secondary border-secondary">
          Registrarse
        </button>
        </form>
        <div className="text-center text-gray-400">
          ¿Ya tienes cuenta? 
          <span className="font-bold text-primary"> 
            <Link to={"/inicio"}> Inicia sesión</Link>
          </span>
        </div>
        <div className='mt-10 text-center text-base'>
          <span className="font-light text-primary"> 
            <Link to={"/home"}> Volver a home</Link>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Registro