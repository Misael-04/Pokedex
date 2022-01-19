import React, { useState } from 'react'
import { FindPokemon } from './components/findPokemon';
import Footer from './components/Footer';
import PutPokemon from './components/putPokemon';


export const Pokedex = () => {

    const [pokemon, setPokemon] = useState('');
    
    return (
        <>
            <section className='Contenedor_Global'>     
            <header>
                    <h1>Hola Mundo pokemon</h1>
                    <PutPokemon 
                        setPokemon={ setPokemon }
                        pokemon={ pokemon }
                        />  
                    
                </header>
            { pokemon.length>0 
                    ? <FindPokemon pokemon={ pokemon }/> 
                    : <h2 className='aviso'>Ingresa el nombre o numero de tu pokemon favorito para obtener sus datos basicos</h2>
                }
                
                </section>
            <Footer />
       </>
    )
}
