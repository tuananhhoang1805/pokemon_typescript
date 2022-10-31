import React from "react";
import { PokemonDetails } from "../interface";
import PokemonDetail from "./PokemonDetail";

interface Props {
  pokemons: PokemonDetails[];
}
const PokemonCard: React.FC<Props> = (props) => {
  const { pokemons } = props;

  //   console.log(pokemons);

  return (
    <div style={{ display : "flex"}}>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} className="pokemon-list">
            <PokemonDetail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonCard;
