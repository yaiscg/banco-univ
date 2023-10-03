import React from 'react'

const Movimientos = ({visible, onClose}) => {
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
        <div className="grid grid-cols-5 gap-5">
          <h1 className="text-sm text-center text-gray-500">Fecha</h1>
          <h1 className="text-sm text-center text-gray-500">Referencia</h1>
          <h1 className="text-sm text-center text-gray-500">Descripción</h1>
          <h1 className="text-sm text-center text-gray-500">Monto</h1>
          <h1 className="text-sm text-center text-gray-500">Saldo</h1>
        </div>
        <div className="divide-y"></div>
        <button onClick={onClose} className="w-full text-white py-3 px-6 rounded-lg mt-10 bg-secondary border-secondary">Regresar</button>
      </div>
    </div>
  )
}

export default Movimientos