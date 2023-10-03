import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";


const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className="pb-8">
        <div className="flex items-center justify-between">
            <div className="sm:text-xl text-base font-bold">{title}</div>
            <BsChevronDown
            className={`${
                id === activeIndex ? "rotate-180" : "rotate-0"
            } cursor-pointer transition-all duration-300`}
            onClick={() => handleClick(id)}
            />
        </div>

        <AnimatePresence>
            {id === 1 && activeIndex && (
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
                className="pt-4">

                <p className="text-lg leading-7 text-gray text-justify">
                Para afiliarte a la Banca en Línea, solamente debes ingresar en el área de “Registrarse”, que se encuentra en la barra superior, completar los datos que le solicitan, y así, ya puede ingresar a la banca.
                </p>

            </motion.div>
            )}

            {id === 2 && activeIndex && (
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
                className="pt-4">

                <p className="text-lg leading-7 text-gray text-justify">
                Solo debes ingresar en el área de “Acceso”, posteriormente, darle click a “Olvidé mi contraseña”, llenar los nuevos datos, además de los de verificación y listo, ya puede ingresar con su nueva contraseña.
                </p>

            </motion.div>
            )}

            {id === 3 && activeIndex && (
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
                className="pt-4">

                <p className="text-lg leading-7 text-gray text-justify">
                La sede principal queda ubicada en la ciudad de Caracas, Venezuela, específicamente en la Av. Universidad, Edificio Banco Universitario, piso 12.
                </p>

            </motion.div>
            )}

            {id === 4 && activeIndex && (
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
                className="pt-4">

                <p className="text-lg leading-7 text-gray text-justify">
                Contamos con el apoyo de las Universidades más prestigiosas del país, como lo es la Universidad Centroccidental Lisandro Alvarado, la Universidad Experimental Politecnica Antonio José de Sucre, la Universidad Central de Venezuela, entre otras. Sin embargo, cualquier estudiante puede unirse al banco universitario, sin importar la Universidad a la que pertenezca.
                </p>

            </motion.div>
            )}

            {id === 5 && activeIndex && (
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
                className="pt-4">
                
                <p className="text-lg leading-7 text-gray text-justify">
                Click en el Menú - Agenda, posteriormente Click en “Agregar Contacto”, llena los datos y guarda.
                </p>

                <p className="text-lg leading-7 text-gray py-4">
                Si estás haciendo una transferencia a un tercero no registrado, luego de que esta se haga, hacer click en “Registrar a contacto frecuente”.
                </p>

            </motion.div>
            )}
        </AnimatePresence>


    </div>
  );
};

export default Accordion;