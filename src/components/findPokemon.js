import React, { useEffect, useState } from 'react'
import { GetAbilities } from '../Helpers/GetAbilities';
import GetMoves from '../Helpers/GetMoves';
import { GetPokemon } from '../Helpers/GetPokemon';
import { GetStats } from '../Helpers/GetStats';
import { GetType } from '../Helpers/GetType';
import MostrarHabilidad from './MostrarHabilidad';
import MostrarMovimientos from './MostrarMovimientos';
import MostrarStatus from './MostrarStatus';
import MostrarTipos from './MostrarTipos';

export const FindPokemon = ({ pokemon }) => {
   
    const [informacion, setInformacion] = useState([])
    const [Tipo, setTipo] = useState([])
    const [Status, setStatus] = useState([])
    const [Habilidades, setHabilidades] = useState([])
    const [Movimientos, setMovimientos] = useState([])


    

    useEffect(() => {
             GetPokemon( pokemon )
            .then( setInformacion ) 
            GetStats( pokemon )
            .then( setStatus )
            GetType( pokemon )
            .then( setTipo )
            GetAbilities( pokemon )
            .then( setHabilidades)
            GetMoves( pokemon )
            .then( setMovimientos)
    }, [pokemon]) 

    


    const { nombre, imagen } = !!informacion && informacion;

    console.log( nombre );

    return (     
      <>  
            <div className="fichaPokemon">         
                <section className="estadisticas_grid">
                    <div className="ficha query-block contenedor animate__animated animate__fadeIn">
                        <h1>{ nombre }</h1>
                        <img 
                            className='imagen_pokemon'
                            src={ imagen } 
                            alt={ nombre } 
                            />
                            <div className = 'tipos'> 
                            
                                {
                                    Tipo.map ( tipo => (
                                        
                                        <MostrarTipos 
                                            key = { tipo.id }
                                            { ...tipo }
                                            />         
                                    ) )
                                }
                            </div>
                    </div>
                    
                    <div className = 'habilidades_y_stats animate__animated animate__fadeIn'> 
                    
                    <div className = "stats contenedor query-block" >
                        <h3>Estadisticas</h3>
                        <ul>
                            {
                                Status.map ( (stat, index) => (
                                    
                                    <MostrarStatus 
                                    key = { index }
                                        { ...stat }
                                    />
                                ) )                        
                            }
                        </ul>
                    </div>
                    
                    <div className="habilidades query-block contenedor animate__animated animate__fadeIn">
                        <h3>Habilidades</h3>
                            <ul>
                                    {
                                    
                                    Habilidades.map ( (hab, index) => (
                                        
                                        <MostrarHabilidad 
                                            key = { index }
                                            { ...hab }
                                            />         
                                        ) )
                                    }
                            </ul>
                    </div>        
                    </div>
            </section>
            

                <section className='movimientos query-block'>
                    <h3>Movimientos</h3>
                    <ul>                
                        {
                        
                        Movimientos.map ( (move, index) => (
                            
                            <MostrarMovimientos 
                                key = { index }
                                { ...move }
                                />         
                        ) )
                        }
                    </ul>       
                </section>
            </div>
      
     </>
    )
}
