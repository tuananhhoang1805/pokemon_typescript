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
  const [nextUrl, setNextUrl] = useState<string>("");

  console.log(pokemons);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&&offset=20"
      );

      console.log(res.data);

      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        console.log(poke.data);

        setPokemons((p) => [...p, poke.data]);
      });
    };

    getPokemon();
  }, []);

  const loadMore = async () => {
      
  }
  return (
    <div className="container">
      <h1 className="header">Pokemon</h1>
      <PokemonCard pokemons={pokemons} />
      <div className="loadmore">
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};

export default App;
