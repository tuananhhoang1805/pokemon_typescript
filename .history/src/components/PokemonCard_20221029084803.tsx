import React from "react";
import { PokemonDetails } from "../interface";

interface Props {
    pokemons: PokemonDetails[];
}
const PokemonCard: React.FC<Props> = (props) => {
  const { pokemons } = props;
  return <div>PokemonCard</div>;
};

export default PokemonCard;
