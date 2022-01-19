import React from 'react'
import '../index.css';

const MostrarTipos = ({ tipe, url }) => {
    return (
        
         <h2 className = { tipe }>             
                { tipe }
         </h2> 
        
    )
}

export default MostrarTipos
