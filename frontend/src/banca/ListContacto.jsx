import React, { useEffect, useState } from "react";
import NavbarBanca from "../banca/components/NavbarBanca"
import Header from "../banca/components/Header"
import Edit from "./Edit";
import ViewContactos from "./ViewContactos";

import { Apiurl, ApiContactList, ApiContactId } from '../api/apirest';
import axios from 'axios';

//ICONOS 
import { RiEyeLine, RiDeleteBinLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ListContacto = () => {

    const navigate = useNavigate();
    const [contactos, setLista] = useState([]);
    const [tablaContactos, setTablaContactos]= useState([]); //////////////////// PARA LA BARRA BUSCADORA

    const [selectedContactId, setSelectedContactId] = useState(null);
    const [selectedContactEdit, setSelectedContactEdit] = useState(null);

    const [showServerError, setShowServerError] = useState(false); // Estado para mostrar el mensaje de error del servidor
    const token = localStorage.getItem("JWT");

    useEffect(() => {
        let url = Apiurl + ApiContactList;
        axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(response => {
                setLista(response.data.data);
                setTablaContactos(response.data.data); ///////PARA LA BARRA BUSCADORA
            })
            .catch(error => {
                setShowServerError(true);
                console.log(error);
            });
    }, [token]);

    const [showEdit, setShowEdit] = useState(false);
    const handleOnClose = () => { setShowEdit(false) }
    const [showView, setShowView] = useState(false);
    const handleOnClose2 = () => { setShowView(false) }
    const handleEditClick = (id) => {
        setSelectedContactEdit(id);
        setShowEdit(true);
    };

    const handleViewClick = (id) => {
        setSelectedContactId(id);
        setShowView(true);
    };
    const handleContinueClick = () => {
        window.location.reload();
    };

////////////////FUNCION ELIMINAR CONTACTO 

    function handleSubmit(id) {
        const conf = window.confirm("¿Desea eliminar este contacto?");
        if (conf) {
            axios.delete(Apiurl + ApiContactId + id, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
                .then(response => {
                    alert("Contacto eliminado.")
                    navigate("/listcontacto")
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                })
                .catch(err => console.log(err))
        }
    }

/////////////////////////BARRA BUSCADORA

    const [busqueda, setBusqueda]= useState("");

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaContactos.filter((elemento)=>{
            if(elemento.alias.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
            {
                return elemento;
            }
        });
            setLista(resultadosBusqueda);
        }
    
///////////////////////////

    return (
        <div>
            <Header />
            <NavbarBanca />
            <div className="flex flex-col bg-gray-200 w-full h-screen">
                <div className="overflow-x-auto">
                    <div className="flex justify-end px-8 py-3 pl-2">
                        <div className="relative max-w-xs">
                            <input
                                type="text"
                                name="hs-table-search"
                                id="hs-table-search"
                                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-gray-400"
                                placeholder="Buscar por alias..."
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
                                            className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                        >
                                            DESCRIPCION
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right  uppercase "
                                        >
                                            Detalles
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
                                <tbody className="bg-blue-50">
                                    {contactos.map((contacto) => (
                                        <tr key={contacto.id}>
                                            <td>{contacto.account_number}</td>
                                            <td>{contacto.alias}</td>
                                            <td>{contacto.description}</td>
                                            <td scope="col" className="px-6 py-3 text-xs font-bold text-right uppercase">
                                                <button onClick={() => handleViewClick(contacto.id)} className="bg-transparent border-transparent text-black"><RiEyeLine className="w-10 text-xl" /></button>
                                            </td>
                                            <td className="px-6 py-3 text-xs font-bold text-right uppercase">
                                                <button onClick={() => handleEditClick(contacto.id)} className="bg-transparent border-transparent text-black">
                                                    <FaUserEdit className="w-10 text-xl" />
                                                </button>
                                            </td>
                                            <td scope="col" className="px-6 py-3 text-xs font-bold text-right  uppercase">
                                                <button onClick={e => handleSubmit(contacto.id)} className="bg-transparent border-transparent text-black"><RiDeleteBinLine className=" w-10 text-xl" /></button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ViewContactos onClose={handleOnClose2} visible={showView} selectedContactId={selectedContactId} />
            <Edit onClose={handleOnClose} visible={showEdit} selectedContactEdit={selectedContactEdit} />
            {showServerError && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <p className="text-center text-xl font-semibold">Error con el servidor.</p>
                        <button
                            className="mt-4 bg-primary text-white py-2 px-4 rounded-lg center"
                            onClick={handleContinueClick}
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

}
export default ListContacto 
