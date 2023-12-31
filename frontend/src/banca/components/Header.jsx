import React from "react";

import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">

        
            <div className="w-full h-[45px] bg-primary drop-shadow-lg mx-auto py-1">
                <div className="px-10 py-2 flex justify-between items-center w-full h-full">
                    <div className="flex items-center">
                        <h1 className='text-xl font-bold font-Montserrat mr-4 sm:text-xl text-white'>
                            <Link to="/homebanca">
                            BANCO UNIVERSITARIO
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    )
    
}

export default Header