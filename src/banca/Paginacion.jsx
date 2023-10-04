import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Paginacion = ({nPages, currentPage, setCurrentPage}) => {

    const next = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }

    const prev = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage - 1)
    }

    return (
        <div className="flex space-around"> 
            <h3 onClick={prev} className="px-8">Prev</h3>
            <h3>{currentPage}/{nPages}</h3>
            <h3 onClick={next} className="px-8">Next</h3>
                
        </div>
            
    )
}
export default Paginacion