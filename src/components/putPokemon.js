import React, { useState } from 'react'
//import { GetPokemon } from '../Helpers/GetPokemon';
import { FindPokemon } from './findPokemon';



const PutPokemon = ({ pokemon, setPokemon }) => {
    
    const [ingresarPokemon, setIngresarPokemon] = useState('');     

    const handlePokemon = (e)=>{
        setIngresarPokemon(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (ingresarPokemon.trim().length === 0) {
            alert("incorrecto");
        } else {
            setPokemon ( ingresarPokemon );    
        }
            setIngresarPokemon('');
    }
//Se agrego este onsubmit para tratar de no usar el useefect  usar un onsubmit clasico

    const mostrarInfo = () => {
        FindPokemon(pokemon);
    }
    
    
    return (
        <form
            className='Ingresar_Pokemon' 
            onSubmit={ handleSubmit }>
            <input type="text" 
                   placeholder = "Ingresa el nombre o numero de tu Pokemon"
                   value={ ingresarPokemon }
                   onChange={ handlePokemon } 
                   onSubmit={ mostrarInfo }
          />
        </form>
    )
}

export default PutPokemon

