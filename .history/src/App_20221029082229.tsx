import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


interface Pokemon {
  name : string;
  
}
const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&&offset=20"
      );

      const poke = res.data.results.map((pokemon) => {

      })
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