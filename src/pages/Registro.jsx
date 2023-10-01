import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri"
import { useForm } from "react-hook-form";
import { Apiurl, ApiRegistro } from '../API/apirest';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (!Object.keys(errors).length) {
      setShowMessage(true);
      let url = Apiurl + ApiRegistro;
      const dataToSend = {
        first_name: data.first_name,
        last_name: data.last_name,
        document_number: data.document_number,
        birth_date: new Date(data.birth_date).toISOString(),
        phone_number: data.phone_number,
        email: data.email,
        password: data.password
      };
      axios.post(url, dataToSend)
        .then((response) => {
          if (response.statusText === "Created") {
            setShowMessage(false);
            setShowMessage2(true);
          }
        }).catch(error => {
          console.log(error);
         if (error.response.status === 409) {
          setShowMessage(false);
          setShowMessage1(true);   
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
         else{
          setShowMessage2(true);
          setTimeout(() => {
            window.location.reload();
          }, 5000);
          }
        })
    }
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-[url('/src/assets/registro.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-3xl font-bold font-Montserrat text-primary">Bienvenido a</span>
          <span className="mb-3 text-4xl font-bold font-Montserrat text-primary">Banca en Línea</span>
          <span className="font-light text-gray-600 mb-8 text-xl">Por favor ingresa tus datos</span>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Nombres"
                  name="first_name"
                  {...register("first_name", {
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
                  errors.first_name && <span className="text-sm text-red-600">{errors.first_name.message}</span>
                }
              </div>
              <div className="py-4">
                <input
                  type="text"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  placeholder="Apellidos"
                  name="last_name"
                  {...register("last_name", {
                    required: {
                      value: true,
                      message: "Por favor ingrese apellidos"
                    },
                    maxLength: {
                      value: 30,
                      message: "Apellidos no válidos"
                    },
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: "Apellidos no válidos"
                    }
                  })}
                />
                {
                  errors.last_name && <span className="text-sm text-red-600">{errors.last_name.message}</span>
                }
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className='grid grid-cols-2 '>
                <div className='col-end-6'>
                  <div className="form-group py-6">
                    <select className="form-select border rounded-lg py-3 px-3 text-gray-400" name="documento">
                      <option value="v">V</option>
                      <option value="e">E</option>
                    </select>
                  </div>
                </div>
                <div className="py-6 col-end-10 px-1">
                  <input
                    type="text"
                    className="py-3 border w-full border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                    placeholder="Cédula"
                    name="document_number"
                    {...register("document_number", {
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
                    errors.document_number && <span className="text-sm text-red-600">{errors.document_number.message}</span>
                  }
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Fecha de nacimiento</label>
                <input
                  type="date"
                  className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                  name="birth_date"
                  {...register("birth_date", {
                    required: {
                      value: true,
                      message: "Por favor ingrese fecha de nacimiento"
                    }
                  })}
                />
                {
                  errors.birth_date && <span className="text-sm text-red-600">{errors.birth_date.message}</span>
                }
              </div>
            </div>
            <div className="py-4">
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-4 rounded-lg focus:border-primary flex"
                placeholder="Número Telefónico"
                name="phone_number"
                {...register("phone_number", {
                  required: {
                    value: true,
                    message: "Por favor ingrese el número de teléfono"
                  },
                  pattern: {
                    value: /^[0-9]+[0+9]*$/,
                    message: "Teléfono incorrecto"
                  },
                  maxLength: {
                    value: 11,
                    message: "Teléfono incorrecto"
                  },
                  minLength: {
                    value: 11,
                    message: "Teléfono incorrecto"
                  },
                })}
              />
              {
                errors.phone_number && <span className="text-sm text-red-600">{errors.phone_number.message}</span>
              }
            </div>
            <div className="relative py-4">
              <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                className="py-3 w-full border border-gray-200 outline-none px-8 rounded-lg focus:border-primary flex"
                placeholder="Correo electrónico"
                name="email"
                {...register("email", {
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
                errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>
              }
            </div>
            <div className="relative py-4">
              <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
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
                placeholder="Repetir contraseña"
                name="repeatPassword"
                {...register("repeatPassword", {
                  required: {
                    value: true,
                    message: "Por favor repita la contraseña"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                    message:
                      'La contraseña es incorrecta.',
                  },
                })}
              />
              {
                errors.repeatPassword && <span className="text-sm text-red-600">{errors.repeatPassword.message}</span>
              }
              {showConfirmPassword ? (
                <RiEyeOffLine onClick={handleShowConfirmPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              ) : (<RiEyeLine onClick={handleShowConfirmPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              )}
            </div>
            <div className="grid">
              <span className="font-bold text-gray-600 text-sm">Tu contraseña debe cumplir con estos requisitos:</span>
              <span className="font-light text-gray-600 text-sm">• Tener 8 caracteres</span>
              <span className="font-light text-gray-600 text-sm">• Ser alfanumérica con al menos 1 caracter numérico y un único caracter especial</span>
              <span className="font-light text-gray-600 text-sm">• Tener uno de estos caracteres especiales - / = . $ # </span>
              <span className="font-light text-gray-600 text-sm">• Evitar colocar información personal </span>
            </div>
            <div className="flex justify-between w-full py-2">
            </div>
            {showMessage && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 flex">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-center text-xl font-semibold">Verificando Información...</p>
                </div>
              </div>
            )}
            {showMessage1 && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 flex">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-center text-xl font-semibold">Ya existe un usuario registrado con esos datos</p>
                </div>
              </div>
            )}
            {showMessage2 && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 flex">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-center text-xl font-semibold">Registro Completado</p>
                  <button
                    className="mt-4 bg-primary text-white py-2 px-4 rounded-lg center"
                    onClick={() => navigate("/inicio")}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}
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

export default Registro;