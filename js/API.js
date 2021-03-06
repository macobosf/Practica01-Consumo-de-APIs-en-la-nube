import{mostrarAlerta} from "./funciones.js";
//consumo de la pokeapi
const url='https://pokeapi.co/api/v2/pokemon/';

export const obtenerPokemon=async pokemon=>{
    try{
        const respuesta = await fetch(`${url}${pokemon}`);
        if (!respuesta.ok){
            mostrarAlerta('No registrado en la pokedex');
            return;
        }
        const buscar = await respuesta.json();
        return buscar;
        
    } catch (error) {
        mostrarAlerta(error);
    }
}