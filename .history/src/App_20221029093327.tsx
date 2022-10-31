import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { PokemonDetails } from "./interface";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);


  console.log(pokemons);
  
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&&offset=20"
      );

      console.log(res.data);
      
      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        console.log(poke.data);
        
        setPokemons([poke.data]);
      });
    };

    getPokemon();
  }, []);
  return (
    <div className="container">
      <h1 className="header">Pokemon</h1>
      <PokemonCard pokemons={pokemons} />
    </div>
  );
};

export default App;
