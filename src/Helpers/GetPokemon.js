export const GetPokemon = async ( pokemon ) =>{
    try {
    const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`;
    const respuesta = await fetch( url );
    const  data  = await respuesta.json();
    
    const { name = [], sprites = [] } = data;
    
    
    const nombreImagen =  {
        nombre: name,
        imagen: sprites.front_default   ,
        
    }  
   
            return nombreImagen;

 }
    catch(error){
        alert('Pokemon no existente');
    }



}

