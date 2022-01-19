export const GetStats = async ( pokemon ) =>{


    const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`;
    const respuesta = await fetch( url );
    const  { stats = [] }  = await respuesta.json();

    

    const status =   stats.map( stat =>{
            
            return {
                    base: stat.base_stat,
                    nombre: stat.stat.name
            }   
      });

     

    return status;
}