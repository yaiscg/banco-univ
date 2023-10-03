import React, { useEffect, useState } from "react";

import NavbarBanca from "../banca/components/NavbarBanca"
import Header from "../banca/components/Header"

import Edit from "./Edit";

import { Apiurl, ApiContactList, ApiContactDelete } from '../api/apirest';
import axios from 'axios';

//ICONOS
import { RiEyeLine, RiDeleteBinLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";



const Aaprueba = () => {

    const navigate = useNavigate();
    const [contactos,setLista] = useState([]);
    const [id,setId] = useState("");
    const [account_number,setAccount_number] = useState("");
    const [alias,setAlias] = useState(""); 
    const [description,setDescription] = useState("");
    const token = localStorage.getItem("JWT");

    useEffect(() => {
        let url = Apiurl + ApiContactList;
        axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            console.log(response);
            setLista(response.data.data);
        })
        .catch(error => {
            console.log(error);
        });
    
    },[ ]);

    const [showEdit, setShowEdit] = useState(false);
    const handleOnClose = () => { setShowEdit(false) }

    return (
        <div>

            <Header />
            <NavbarBanca />
            
            <div className="flex flex-col">

                <div className="overflow-x-auto">
                    <div className="flex justify-between py-3 pl-2">
 
                        <div className="relative max-w-xs">
                            
                            <input
                                type="text"
                                name="hs-table-search"
                                id="hs-table-search"
                                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-200 dark:border-gray-700 dark:text-gray-400"
                                placeholder="Buscar..."
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
                                            NUMERO DE CUENTA
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 text-xs font-bold text-left uppercase "
                                        >
                                            ALIAS
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-16 py-3 text-xs font-bold text-left  uppercase "
                                        >
                                            DESCRIPCION
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right  uppercase "
                                        >
                                            Vista
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right  uppercase "
                                        >
                                            Editar
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right  uppercase "
                                        >
                                            Eliminar
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {contactos.map((contactos,id) => (
                                        <tr key = {contactos.id}>
                                            <td>{contactos.account_number}</td>
                                            <td>{contactos.alias}</td>
                                            <td>{contactos.description}</td>
                                            <td scope="col" className="px-6 py-3 text-xs font-bold text-right  uppercase">
                                                <button className="bg-transparent border-transparent text-black"><RiEyeLine className=" w-10 text-xl"/></button>
                                            </td>
                                            <td scope="col" className="px-6 py-3 text-xs font-bold text-right  uppercase">
                                                <button onClick={() => setShowEdit(true)} className="bg-transparent border-transparent text-black"><FaUserEdit className=" w-10 text-xl"/></button>
                                            </td>
                                            <td scope="col" className="px-6 py-3 text-xs font-bold text-right  uppercase">
                                                <button onClick={e => handleSubmit(contactos.id) } className="bg-transparent border-transparent text-black"><RiDeleteBinLine className=" w-10 text-xl"/></button>
                                            </td>
    

                                        </tr>
                                    ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <Edit onClose={handleOnClose} visible={showEdit}/>

        </div>

    )

    ////////////////FUNCION ELIMINAR CONTACTO

    function handleSubmit(id){
        const conf = window.confirm("¿Desea eliminar este contacto?");
        if (conf) {
            axios.delete('http://localhost:3000/v1/client/contact/' + id, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then( response => {
                alert("Contacto eliminado.")
                navigate("/aaprueba")
                setTimeout(() => {
                    window.location.reload();
                  }, 3000);
            })
            .catch(err => console.log(err))
        }
    }

        
}

export default Aaprueba