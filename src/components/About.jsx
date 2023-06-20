import React from "react";

import telefono from "../assets/telefono.png"

import { HandThumbUpIcon, LockClosedIcon, HeartIcon} from '@heroicons/react/24/outline'

const About = () => {
    return (
        <div name="three" className="w-full bg-zinc-50 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <h1 className="py-1 text-5xl md:text-7xl font-bold text-primary">Banco Universitario</h1>
                    <p className="text-4lg text-secondary font-Montserrat">Impulsamos tu vida.</p>
                    <p className="text-2lg my-4">Tenemos 5 años en el mercado, prestando servicios financieros a estudiante universitarios, mediante las diversas sucursales, cajeros electrónicos y ahora con nuestra banca electrónica.</p>
                    <button className="py-3 px-6 sm:w-[60%] my-4 bg-secondary border-secondary">Únete a nosotros</button>
                </div>

                <div>
                    <img className="w-full" src={telefono} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default About