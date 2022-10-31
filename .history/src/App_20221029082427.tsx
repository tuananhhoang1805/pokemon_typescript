import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}
const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&&offset=20"
      );

      res.data.results.forEach((pokemon: Pokemon) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      });
    };

    getPokemon();
  }, []);
  return (
    <div className="container">
      <h1 className="header">Pokemon</h1>
    </div>
  );
};

export default App;
