import React, {useState, useEffect} from 'react'
import { PokeCell } from '..'
import './Pokelist.css'

const Pokelist = ({handleOnClick}) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            const pokemonList = data.results.slice(0, data.results.lenth).map(items => items).flat();
            setPokemon(pokemonList)
        }
        fetchData();
    }, [])

    return (
        <section className="poke-list">
           {pokemon.map((pokeClass, id) => {
                   return(
                    <PokeCell key={id} pokeClass={id} handleOnClick={handleOnClick}/>
                )
           })}
        </section>
    )
}

export default Pokelist
