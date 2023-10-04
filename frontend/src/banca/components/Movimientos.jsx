import React, { useEffect, useState } from "react";
import axios from 'axios';

const Movimientos = ({visible, onClose}) => {

    const [movimientos,setMovimientos] = useState([]);
    const [tablaMovimientos, setTablaMovimientos]= useState([]); //////////////////// PARA LA BARRA BUSCADORA
    const [id,setId] = useState("");
    const [amount,setAmount] = useState("");
    const [balance,setBalance] = useState("");
    const [multiplier,setMultiplier] = useState("");
    const [account_number,setAccount_number] = useState("");
    const [description,setDescription] = useState("");
    const [created_at,setCreated_at] = useState("");

    ///////////////// API


    const token = localStorage.getItem("JWT");

    useEffect(() => {
        let url = 'http://localhost:3000/v1/client/movement?page=1&page_size=10';
        axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            console.log(response);
            setMovimientos(response.data.data);
        })
        .catch(error => {
            console.log(error);
        });
    
    },[ ]);

    ///////////////////// FORMATO FECHA

    const formatDate = (created_at) => {
        return new Date(created_at).toLocaleString("es")
    }



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
        <span className="flex items-center justify-center mb-7 text-xl font-bold font-Montserrat text-primary">Consulta de movimientos</span>

        <div className="flex flex-col bg-white">

              <div className="overflow-x-auto">
                  <div className="p-1.5 w-full inline-block align-middle">
                      <div className="overflow-hidden border rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-secondary ">
                                  <tr className="text-white">
                                      <th
                                          scope="col"
                                          className="px-6 py-3 text-xs font-bold text-left uppercase "
                                      >
                                          REFERENCIA
                                      </th>
                                      <th
                                          scope="col"
                                          className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                      >
                                          MONTO
                                      </th>
                                      <th
                                          scope="col"
                                          className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                      >
                                          SALDO
                                      </th>
                                      <th
                                          scope="col"
                                          className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                      >
                                          DEBITO/CREDITO
                                      </th>
                                      <th
                                          scope="col"
                                          className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                      >
                                          NUMERO DE CUENTA
                                      </th>
                                      <th
                                          scope="col"
                                          className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                      >
                                          DESCRIPCIÓN
                                      </th>
                                      <th
                                          scope="col"
                                          className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                      >
                                          FECHA Y HORA
                                      </th>
                                  </tr>
                              </thead>
                              
                              
                              <tbody className="bg-blue-50">

                              {movimientos.map((movimientos,id) => (
                                  <tr key = {movimientos.id}>
                                      <td>{movimientos.id}</td>
                                      <td>{movimientos.amount}</td>
                                      <td>{movimientos.balance}</td>
                                      <td className="px-12">{movimientos.multiplier}</td>
                                      <td>{movimientos.account_number}</td>
                                      <td className="px-10">{movimientos.description}</td>
                                      <td>{formatDate(movimientos.created_at)}</td>
                                  </tr>
                              ))
                              }

                              </tbody>

                          </table>
                      </div>
                  </div>

              </div>
              </div>


        <div className="divide-y "></div>

        <div className="grid grid-cols-4" >
            <div></div>
            <div></div>
            <div></div>
            <div><button onClick={onClose} className="w-full text-white py-3 px-10 rounded-lg mt-10 bg-secondary border-secondary">Regresar</button></div>
        </div>

      </div>
    </div>
  )
}

export default Movimientos