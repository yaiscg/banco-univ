import React, { useState, useEffect } from "react";
import { BsJustifyLeft } from "react-icons/bs";
import { RiEyeLine } from "react-icons/ri";
import Saldo from "./Saldo";
import Movimientos from "./Movimientos";
import { Apiurl, ApiWhoami } from '../../api/apirest';
import axios from 'axios';


const Info = () => {
    const [showBalance, setShowBalance] = useState(false);
    const [showTransactions, setShowTransactions] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [AccountMessage, setAccountMessage] = useState("");
    const currentDate = new Date().toLocaleDateString("es-VE");

    const token = localStorage.getItem("JWT");

    useEffect(() => {
        let url = Apiurl + ApiWhoami;
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {

                const first_name = response.data.data.first_name;
                const last_name = response.data.data.last_name;
                const account_number = response.data.data.account_number;

                setWelcomeMessage(first_name + " " + last_name);
                setAccountMessage("Nro. de cuenta: " + account_number)
            })
            .catch(error => {
                console.log(error);
            });
    }, [token]);


    const handleOnClose = () => {
        setShowBalance(false)
    }

    const handleOnCloseTransactions = () => {
        setShowTransactions(false)
    }

    return (
        <div className="w-full min-h-screen bg-gray-200">
            <div className="py-6">
                <span className="px-8 text-sm text-primary">Bienvenido (a) {welcomeMessage}</span>
                <span className="text-sm text-primary">{currentDate}</span>
            </div>



            <div className=" items-center justify-center flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">

                <h1 className="border-b text-center border-secondary mb-3 text-lg font-bold font-Montserrat text-primary py-6">Posición Consolidada</h1>

                <div className="grid md:grid-cols-4 gap-8 py-12 justify-center md:flex text-sm items-center jsutify-center">

                    <div>
                        <h1 className="px-20 font-semibold">Descripción</h1>
                        <h1 className="px-10 py-12 text-center">Cuenta Estudiantil</h1>
                    </div>

                    <div>
                        <h1 className="px-20 font-semibold">Cuenta Estudiantil</h1>
                        <h1 className="px-10 py-12 text-center">{AccountMessage}</h1>                  
                          </div>

                    <div>
                        <h1 className="px-20 font-semibold">Movimientos</h1>
                        <button onClick={() => setShowTransactions(true)} className="bg-transparent border-transparent text-black px-24 py-12"><BsJustifyLeft className="px-1 w-10 text-xl" /></button>
                    </div>

                    <div>
                        <h1 className="px-20 font-semibold">Saldo</h1>
                        <button onClick={() => setShowBalance(true)} className="bg-transparent border-transparent text-black px-20 py-12"><RiEyeLine className="px-1 w-10 text-xl" /></button>
                    </div>

                </div>

                <h1 className="border-b text-center border-secondary mb-3 text-lg font-bold font-Montserrat text-primary py-2" aria-hidden="true">&nbsp;</h1>
                <h1 className="border-b text-center mb-3 text-lg font-bold font-Montserrat text-primary py-6" aria-hidden="true">&nbsp;</h1>
            </div>

            <Movimientos onClose={handleOnCloseTransactions} visible={showTransactions} />

            <Saldo onClose={handleOnClose} visible={showBalance} />

        </div>
    )

}

export default Info