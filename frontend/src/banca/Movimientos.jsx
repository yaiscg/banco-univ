import React, { useEffect, useState } from "react";

import NavbarBanca from "../banca/components/NavbarBanca"
import Header from "../banca/components/Header"
import Paginacion from "../banca/Paginacion"

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import { Apiurl, ApiMovimientos } from '../api/apirest';
import axios from 'axios';


const Movimientos = () => {

    const [movimientos,setMovimientos] = useState([]);
    const [tablaMovimientos, setTablaMovimientos]= useState([]); //////////////////// PARA LA BARRA BUSCADORA
    const [id,setId] = useState("");
    const [amount,setAmount] = useState("");
    const [balance,setBalance] = useState("");
    const [multiplier,setMultiplier] = useState("");
    const [account_number,setAccount_number] = useState("");
    const [description,setDescription] = useState("");
    const [created_at,setCreated_at] = useState("");

    ////////////////// PAGINACION


    const [moviQt, setMovQt] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const indexFin = (currentPage * moviQt);
    const indexIni = (indexFin - moviQt);

    const nData = movimientos.slice(indexIni, indexFin)
    const nPages = Math.ceil(movimientos.lenght / moviQt);

    console.log(moviQt);


    ///////////////// API


    const token = localStorage.getItem("JWT");

    useEffect(() => {
        let url = Apiurl + ApiMovimientos;
        axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            console.log(response);
            setMovimientos(response.data.data);
            setTablaMovimientos(response.data.data); ///////PARA LA BARRA BUSCADORA
        })
        .catch(error => {
            console.log(error);
        });
    
    },[ ]);

    ///////////////////// FORMATO FECHA

    const formatDate = (created_at) => {
        return new Date(created_at).toLocaleString("es")
    }

    /////////////////////////BARRA BUSCADORA

    const [busqueda, setBusqueda]= useState("");

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaMovimientos.filter((elemento)=>{
            if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
            {
                return elemento;
            }
            });
            setMovimientos(resultadosBusqueda);
    }
    

    ///////////////VISUAL

    return (
        <div>

        <Header/>
        <NavbarBanca/>

            <div className="flex flex-col bg-gray-200 w-full h-screen">

                    <div className="overflow-x-auto">
                        <div className="flex justify-end px-8 py-3 pl-2">
    
                            <div className="relative max-w-xs">
                                
                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Buscar por referencia..."
                                    value={busqueda}
                                    onChange={handleChange}
                                />

                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg
                                        className="h-3.5 w-3.5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                            </div>

                        </div>

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
                                            <td className="px-14">{movimientos.multiplier}</td>
                                            <td>{movimientos.account_number}</td>
                                            <td>{movimientos.description}</td>
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

        </div>

        


    )
    
}

export default Movimientos