import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { PokemonDetails } from "./interface";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export interface Details {
  id: number;
  isOpen: boolean;
}
const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [viewDetails, setViewDetails] = useState<Details>({
    id: 0,
    isOpen: false,
  });

  console.log(viewDetails.isOpen);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&&offset=20"
      );


      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );



        setPokemons((p) => [...p, poke.data]);
      });
    };

    getPokemon();
  }, []);

  const loadMore = async () => {
    setIsLoading(true);
    const res = await axios.get(nextUrl);
    setNextUrl(res.data.next);

    res.data.results.forEach(async (pokemon: Pokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      setPokemons((p) => [...p, poke.data]);
      setIsLoading(false);
    });
  };
  return (
    <div className="container">
      <h1 className="header">Pokemon</h1>
      <PokemonCard
        pokemons={pokemons}
        viewDetails={viewDetails}
        setViewDetails={setViewDetails}
      />
      <div>
        {viewDetails.isOpen ? (
          <></>
        ) : (
          <button onClick={loadMore} className="loadmore">
            {isLoading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
