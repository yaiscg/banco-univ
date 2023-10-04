import React, { useState, useEffect } from 'react';
import { Apiurl, ApiContactId } from '../api/apirest';
import axios from 'axios';

const ViewContactos = ({ visible, onClose, selectedContactId }) => {
  const [contactDetails, setContactDetails] = useState(null);
  const [showServerError, setShowServerError] = useState(false); // Estado para mostrar el mensaje de error del servidor

  const token = localStorage.getItem("JWT");

  useEffect(() => {
    if (selectedContactId) {
      let url = Apiurl + ApiContactId;
      axios.get(url + `/${selectedContactId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
        .then(response => {
          setContactDetails(response.data.data);
        })
        .catch(error => {
          console.log(error);
          setShowServerError(true); // Mostrar el mensaje de error del servidor en caso de error

        });
    }
  }, [selectedContactId, token]);

  const handleOnClose = (e) => {
    if (e.target.id === 'container')
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
        <span className="flex items-center justify-center mb-7 text-xl font-bold font-Montserrat text-primary">Detalles del contacto</span>
        {showServerError ? ( // Mostrar el mensaje de error en caso de error con el servidor
          <>
            <p>Error con el servidor.</p>
            <button onClick={() => window.location.reload()}>Continuar</button>
          </>
        ) : contactDetails ? (
          <>
            <h1 className="px-2 py-2 text-left text-sm">Numero de cuenta: {contactDetails.account_number}</h1>
            <h1 className="px-2 py-2 text-left text-sm">ID: {contactDetails.id}</h1>
            <h1 className="px-2 py-2 text-left text-sm">Alias: {contactDetails.alias}</h1>
            <h1 className="px-2 py-2 text-left text-sm">Descripción: {contactDetails.description}</h1>
            {contactDetails.user ? (
              <>
                <h1 className="px-2 py-2 text-left text-sm">Documento: {contactDetails.user.document_number}</h1>
                <h1 className="px-2 py-2 text-left text-sm">Nombre: {contactDetails.user.first_name}</h1>
                <h1 className="px-2 py-2 text-left text-sm">Apellido: {contactDetails.user.last_name}</h1>
                <h1 className="px-2 py-2 text-left text-sm">Numero Telefonico: {contactDetails.user.phone_number}</h1>
              </>
            ) : null}
          </>
        ) : (
          <p>Cargando detalles...</p>
        )}
        <button onClick={onClose} className="w-full text-white py-3 px-6 rounded-lg mt-10 bg-secondary border-secondary">Regresar</button>
      </div>
    </div>
  )
}

export default ViewContactos;
