import React from 'react'

const Saldo = ({visible, onClose}) => {

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
        <h1 className="px-2 py-2 text-center">3.500 BS</h1>
        <button onClick={onClose} className="w-full text-white py-3 px-6 rounded-lg mt-10 bg-secondary border-secondary">Regresar</button>
      </div>
    </div>
  )
}

export default Saldo