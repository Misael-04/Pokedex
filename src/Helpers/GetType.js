export const GetType = async ( pokemon ) =>{


        const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`;
        const respuesta = await fetch( url );
        const  { types = [] }  = await respuesta.json();

        const tipos =   types.map(tipo =>{
                
                return {
                        id: tipo.slot,
                        tipe: tipo.type.name,
                        url: tipo.type.url
                }   
          });

        
        return tipos;
}
