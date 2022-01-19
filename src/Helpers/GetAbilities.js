export const GetAbilities = async ( pokemon ) =>{


    const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`;
    const respuesta = await fetch( url );
    const  { abilities = [] }  = await respuesta.json();

    

    const habilidades =   abilities.map( hab =>{
            
            return {
                    nombre: hab.ability.name
            }   
      });

     

    return habilidades;
}