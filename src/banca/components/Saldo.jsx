import React, { useState, useEffect } from 'react';
import { Apiurl, ApiBalance } from '../../API/apirest';
import axios from 'axios';

const Saldo = ({visible, onClose}) => {
  const [BalanceMessage, setBalanceMessage] = useState("");
  const token = localStorage.getItem("JWT");

  useEffect(() => {
    let url = Apiurl + ApiBalance;
    axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            const balance = response.data.data.balance;
            setBalanceMessage(balance);
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
        <h1 className="px-2 py-2 text-center">{BalanceMessage} BS</h1>
        <button onClick={onClose} className="w-full text-white py-3 px-6 rounded-lg mt-10 bg-secondary border-secondary">Regresar</button>
      </div>
    </div>
  )
}

export default Saldo