import React from "react";
import { PokemonDetails } from "../interface";
import PokemonDetail from "./PokemonDetail";

interface Props {
  pokemons: PokemonDetails[];
}
const PokemonCard: React.FC<Props> = (props) => {
  const { pokemons } = props;
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <PokemonDetail
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        );
      })}
    </div>
  );
};

export default PokemonCard;
