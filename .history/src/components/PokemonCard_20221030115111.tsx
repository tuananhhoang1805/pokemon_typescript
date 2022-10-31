import React from "react";
import { Details } from "../App";
import { PokemonAbilities } from "../interface";
import PokemonDetail from "./PokemonDetail";

interface Props {
  pokemons: PokemonAbilities[];
  viewDetails: Details;
  setViewDetails: React.Dispatch<React.SetStateAction<Details>>;
}
const PokemonCard: React.FC<Props> = (props) => {
  const { pokemons, viewDetails, setViewDetails } = props;

  const selectPokemon = (id: number) => {
    console.log(id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {pokemons.map((pokemon) => {
        return (
          <div
            key={pokemon.id}
            className="pokemon-list"
            onClick={() => selectPokemon(pokemon.id)}
          >
            <PokemonDetail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              abilities={pokemon.abilities}
              height={pokemon.height}
              weight={pokemon.weight}
              types={pokemon.types}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonCard;
