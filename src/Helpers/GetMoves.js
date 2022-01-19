

const GetMoves = async( pokemon ) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`;
    const respuesta = await fetch( url );
    const  { moves = [] }  = await respuesta.json();

    

    const movimientos =   moves.map( move =>{
            
            return {
                    nombre: move.move.name
            }   
      });

return movimientos;


}

export default GetMoves
