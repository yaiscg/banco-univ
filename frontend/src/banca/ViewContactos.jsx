import React, { useState, useEffect } from 'react';
import { Apiurl, ApiGetContact } from '../api/apirest';
import axios from 'axios';

const ViewContactos = ({visible, onClose}) => {

  const [CuentaMessage, setCuentaMessage] = useState("");
  const [AliasMessage, setAliasMessage] = useState("");
  const [NombreMessage, setNombreMessage] = useState("");
  const token = localStorage.getItem("JWT");

  useEffect(() => {
    let url = Apiurl + ApiGetContact;
    axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            const account_number = response.data.data.account_number;
            setCuentaMessage(account_number);

            const alias = response.data.data.alias;
            setAliasMessage(alias);

            const nombre = response.data.data.user.nombre;
            setNombreMessage(nombre);
        })
        .catch(error => {
            console.log(error);
        });
}, [token]);


  const handleOnClose = (e) => {
    if(e.target.id === 'container')
     onClose();
  };

  if (!visible) return null;

  return (
    <div 
    id='container'
    onClick={handleOnClose} 
    className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
    flex justify-center items-center"
    >
      <div className="bg-white px-10 py-12 rounded-2xl">
        <span className="flex items-center justify-center mb-7 text-xl font-bold font-Montserrat text-primary">Saldo disponible</span>
        <h1 className="px-2 py-2 text-left text-sm">Numero de cuenta: {CuentaMessage}</h1>
        <h1 className="px-2 py-2 text-left text-sm">Alias: {AliasMessage}</h1>
        <h1 className="px-2 py-2 text-left text-sm">Descripción: </h1>
        <h1 className="px-2 py-2 text-left text-sm">Nombre: {NombreMessage}</h1>
        <h1 className="px-2 py-2 text-left text-sm">Apellido: </h1>
        <h1 className="px-2 py-2 text-left text-sm">Cumpleaños: </h1>
        <h1 className="px-2 py-2 text-left text-sm">Email: </h1>
        <h1 className="px-2 py-2 text-left text-sm">Nro. Telefono: </h1>
        <button onClick={onClose} className="w-full text-white py-3 px-6 rounded-lg mt-10 bg-secondary border-secondary">Regresar</button>
      </div>
    </div>
  )
}

export default ViewContactos